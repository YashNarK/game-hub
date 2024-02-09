export interface  ResponseData<T> {
    count: number;
    results: T[];
    next: string | null;
    previous: string | null;
  }