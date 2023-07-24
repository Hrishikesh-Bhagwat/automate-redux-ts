const assert = require("assert");
const { createStore } = require("redux");
const {
  generateReducers,
  set,
  push,
  get,
  increment,
  decrement
} = require("../index");

describe("set function", function () {
    it("should set a given state for a field which is already present", function () {
      const initialState = { name: "foo" };
      const store = createStore(generateReducers(initialState));
      store.dispatch(set("name", "bar"));
      const newState = store.getState();
      assert.equal(newState.name, "bar");
    });
  
    it("should create a given field with the value if not already present", function () {
      const initialState = {};
      const store = createStore(generateReducers(initialState));
      store.dispatch(set("name", "bar"));
      const newState = store.getState();
      assert.equal(newState.name, "bar");
    });
});

describe("push function", function () {
    it("should push a given value for a field which is already present", function () {
      const initialState = { items: ["foo"] };
      const store = createStore(generateReducers(initialState));
      store.dispatch(push("items", "bar"));
      const newState = store.getState();
      assert.equal(newState.items.length, 2);
      assert.equal(newState.items[0], "foo");
      assert.equal(newState.items[1], "bar");
    });
  
    it("should initialize an array with a given value for a field if not already present", function () {
      const initialState = {};
      const store = createStore(generateReducers(initialState));
      store.dispatch(push("items", "foo"));
      const newState = store.getState();
      assert.equal(newState.items.length, 1);
      assert.equal(newState.items[0], "foo");
    });
});

describe("increment function", function () {
    it("should increment a given field", function () {
      const initialState = { foo: 2 };
      const store = createStore(generateReducers(initialState));
      store.dispatch(increment("foo"));
      const newState = store.getState();
      assert.equal(newState.foo, 3);
    });
});
  
  describe("decrement function", function () {
    it("should decrement a given field", function () {
      const initialState = { foo: 3 };
      const store = createStore(generateReducers(initialState));
      store.dispatch(decrement("foo"));
      const newState = store.getState();
      assert.equal(newState.foo, 2);
    });
});

describe("get function", function () {
    it("should get value for a given field which is present", function () {
      const initialState = { name: "foo" };
      const store = createStore(generateReducers(initialState));
      const newState = store.getState();
      assert.equal(get(newState, "name"), "foo");
    });
  
    it("should get default value for a given field which is not present", function () {
      const initialState = {};
      const store = createStore(generateReducers(initialState));
      const newState = store.getState();
      assert.equal(get(newState, "name", "foo"), "foo");
    });
  
    it("should get default value for a given field if field value is null", function () {
      const initialState = { name: null };
      const store = createStore(generateReducers(initialState));
      const newState = store.getState();
      assert.equal(get(newState, "name", "foo"), "foo");
    });
});