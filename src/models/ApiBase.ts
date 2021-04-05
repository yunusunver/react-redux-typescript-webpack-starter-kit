export interface ApiResultBase {
    statusCode: number;
    message: string;
    success: boolean;
    errorCode: string;
}

export interface ApiResultBaseOf<T extends any> extends ApiResultBase {
    data: T[];
}
