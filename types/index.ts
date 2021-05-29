export interface ListApiResponse<T> {
    isError: Boolean;
    data: Array<T>;
    error?: String;
    page: number;
    totalPage: number;
    perPage: number;
    total: number;
}

export interface SingleApiResponse<T> {
    isError: Boolean;
    error?: String;
    data?: T
}
