class APIFilters {
  query: any;
  queryStr: any;

  constructor(query: any, queryStr: any) {
    this.query = query;
    this.queryStr = queryStr;
  }

  search(): APIFilters {
    const location = this.queryStr?.location
      ? {
          address: {
            $regex: this.queryStr.location,
            // "i" means case insensitive
            $options: "i",                          
          },
        }
      : {};

    this.query = this.query.find({ ...location });
    return this;
  }

  filter(): APIFilters {
    const queryCopy = { ...this.queryStr };

    // Remove fields handled by search and pagination
    const removeFields = ["location", "page"];
    removeFields.forEach((element) => delete queryCopy[element]);

    this.query = this.query.find(queryCopy);

    return this;
  }

  pagination(resPerPage: number): APIFilters {
    const currentPage = Number(this.queryStr?.page) || 1;
    const skip = resPerPage * (currentPage - 1);

    this.query = this.query.limit(resPerPage).skip(skip);

    return this;
  }
}

export default APIFilters;
