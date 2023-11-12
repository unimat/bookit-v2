import { NextRequest, NextResponse } from "next/server";

type HandlerFunction = (req: NextRequest, params: any) => Promise<NextResponse>;

interface IValidationError {
  message: string;
}

export const catchAsyncErrors =
  (handler: HandlerFunction) => async (req: NextRequest, params: any) => {
    try {
      return await handler(req, params);
    } catch (error: any) {

      // CastError for example invalid _id
      if (error?.name === "CastError") {
        error.message = `Resource not found. Invalid ${error?.path}`;
        error.statusCode = 400;
      }

      // Validation Error: for example missing required parameter(s)  (multiple errors)
      if (error?.name === "ValidationError") {
        error.message = Object.values<IValidationError>(error.errors).map(
          (value) => value.message
        );
        error.statusCode = 400;
      }
      
      // Handling mongoose duplicate key error
      if (error.code === 11000) {
        let field = error.message.split(" index: ")[1];
        field = field.substring(0, field.lastIndexOf("_"));
        error.message = `Duplicate ${field} entered`;
        // Ez nem működik:
        // error.message = `Duplicate ${Object.keys(error.keyValue)} entered`;
      }

      return NextResponse.json(
        {
          errMessage: error.message,
        },
        { status: error.statusCode || 500 }
      );
    }
  };
