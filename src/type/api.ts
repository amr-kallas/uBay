export interface APIList<T> {
    pageNumber: number;
    totalPages: number;
    totalDataCount: number;
    data: T[];
  }