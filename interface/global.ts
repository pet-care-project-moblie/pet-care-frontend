export interface IPagination<T> {
    data: T[];
    total: number;
    page: number;
    perPage: number;
  }
  
  export interface ILocation {
    type: string;
    coordinates: number[];
  }
  