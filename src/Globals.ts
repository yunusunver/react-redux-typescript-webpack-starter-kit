export const TYPES = {};

export interface Dispatcher {
    type: string;
    payload?: any;
}

export interface Dispatch {
    (dispatcher: Dispatcher): void;
}
