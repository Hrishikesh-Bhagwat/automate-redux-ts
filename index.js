"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = exports.remove = exports.push = exports.decrement = exports.increment = exports.set = exports.generateReducers = void 0;
var dotProp = require("dot-prop-immutable");
function generateReducers(initialState) {
    return function (state, action) {
        if (state === void 0) { state = initialState; }
        switch (action.type) {
            case ActionTypes.Set:
                return dotProp.set(state, action.path, action.data);
            case ActionTypes.Increment:
                var initialValue = dotProp.get(state, action.path, 0);
                var newValue = initialValue + action.data;
                return dotProp.set(state, action.path, newValue);
            case ActionTypes.Decrement:
                var initialValue = dotProp.get(state, action.path, 0);
                var newValue = initialValue - action.data;
                return dotProp.set(state, action.path, newValue);
            case ActionTypes.Push:
                return dotProp.merge(state, action.path, [action.data]);
            case ActionTypes.Remove:
                return dotProp.delete(state, action.path);
            default:
                return state;
        }
    };
}
exports.generateReducers = generateReducers;
var ActionTypes;
(function (ActionTypes) {
    ActionTypes["Set"] = "SET";
    ActionTypes["Increment"] = "INCREMENT";
    ActionTypes["Decrement"] = "DECREMENT";
    ActionTypes["Push"] = "PUSH";
    ActionTypes["Remove"] = "Remove";
})(ActionTypes || (ActionTypes = {}));
function set(path, data) {
    return {
        type: ActionTypes.Set,
        data: data,
        path: path
    };
}
exports.set = set;
function increment(path, data) {
    if (data === void 0) { data = 1; }
    return {
        type: ActionTypes.Increment,
        data: data,
        path: path
    };
}
exports.increment = increment;
function decrement(path, data) {
    if (data === void 0) { data = 1; }
    return {
        type: ActionTypes.Decrement,
        data: data,
        path: path
    };
}
exports.decrement = decrement;
function push(path, data) {
    return {
        type: ActionTypes.Push,
        data: data,
        path: path
    };
}
exports.push = push;
function remove(path) {
    return {
        type: ActionTypes.Remove,
        path: path
    };
}
exports.remove = remove;
function get(state, path, defaultValue) {
    var result = dotProp.get(state, path, defaultValue);
    if (result === null && defaultValue !== undefined) {
        return defaultValue;
    }
    return result;
}
exports.get = get;
