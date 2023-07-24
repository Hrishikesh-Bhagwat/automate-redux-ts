import * as dotProp from "dot-prop-immutable";

export function generateReducers(initialState: Object){
    return (state: Object=initialState,action: action)=>{
        switch(action.type){
            case ActionTypes.Set:
                return dotProp.set(state, action.path, action.data);
            case ActionTypes.Increment:
                var initialValue: number = dotProp.get(state, action.path, 0) as number;
                var newValue = initialValue + (action.data as number);
                return dotProp.set(state, action.path, newValue);
            case ActionTypes.Decrement:
                var initialValue: number = dotProp.get(state, action.path, 0) as number;
                var newValue = initialValue - (action.data as number);
                return dotProp.set(state, action.path, newValue);
            case ActionTypes.Push:
                return dotProp.merge(state, action.path, [action.data]);
            case ActionTypes.Remove:
                return dotProp.delete(state, action.path);
            default:
                return state;
        }
    }
}

type path = string|number|(string|number)[]

interface action {
    type: ActionTypes,
    data?: Object,
    path: path,
}

enum ActionTypes {
    Set = "SET",
    Increment = "INCREMENT",
    Decrement = "DECREMENT",
    Push = "PUSH",
    Remove = "Remove"
}

export function set(path: path,data: Object):action{
    return {
        type: ActionTypes.Set,
        data: data,
        path: path
    };
}

export function increment(path: path,data: number=1):action{
    return {
        type: ActionTypes.Increment,
        data: data,
        path: path
    };
}

export function decrement(path: path,data: number=1):action{
    return {
        type: ActionTypes.Decrement,
        data: data,
        path: path
    };
}

export function push(path: path,data: Object):action{
    return {
        type: ActionTypes.Push,
        data: data,
        path: path
    };
}

export function remove(path: path):action{
    return {
        type: ActionTypes.Remove,
        path: path
    };
}

export function get(state: Object, path: path, defaultValue: Object){
    const result = dotProp.get(state, path, defaultValue);
    if (result === null && defaultValue !== undefined) {
      return defaultValue;
    }
    return result;
}