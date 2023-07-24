export declare function generateReducers(initialState: Object): (state: Object | undefined, action: action) => any;
type path = string | number | (string | number)[];
interface action {
    type: ActionTypes;
    data?: Object;
    path: path;
}
declare enum ActionTypes {
    Set = "SET",
    Increment = "INCREMENT",
    Decrement = "DECREMENT",
    Push = "PUSH",
    Remove = "Remove"
}
export declare function set(path: path, data: Object): action;
export declare function increment(path: path, data?: number): action;
export declare function decrement(path: path, data?: number): action;
export declare function push(path: path, data: Object): action;
export declare function remove(path: path): action;
export declare function get(state: Object, path: path, defaultValue: Object): any;
export {};
