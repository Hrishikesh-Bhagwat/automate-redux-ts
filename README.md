# automate-redux-ts
An npm package that automates the process of writing reducers and saves developer efforts. It is a typescript port  for spaceuptech's  automate-redux. This package uses dot-prop-immutable too.

[![Actions Status](https://github.com/tomchen/example-typescript-package/workflows/Test/badge.svg)](https://github.com/tomchen/example-typescript-package/actions) [![License](https://img.shields.io/github/license/tomchen/example-typescript-package)](https://github.com/tomchen/example-typescript-package/blob/main/LICENSE)


# Build
To build the project, run:
```bash
npm run build
```
# Test
To run the tests, run:
```bash
npm run test
```
# Usage
We create a redux store as usual but using our generateReducers function.
```js
import { createStore } from "redux";
import { generateReducers } from "automate-redux";

// Initial state of redux
const initialState = { foo: "1" };

// Generate reducers with the initial state and pass it to the redux store
const store = createStore(generateReducers(initialState));
```
After this we can use the helper functions from the library to manage the redux state.
```js
import { createStore } from "redux";
import { generateReducers, get, set, increment, decrement, push, reset, del} from "automate-redux";

// Initial state of redux
const initialState = { foo: "1", items: ["1", "2"] };

// Generate reducers with the initial state and pass it to the redux store
const store = createStore(generateReducers(initialState));

// Set the value of a field
store.dispatch(set("foo", "2"));

// Set the value of a nested field
store.dispatch(set("foo.bar", "1"));

// Increment/decrement the value of a nested field
store.dispatch(increment("foo.bar"));
store.dispatch(decrement("foo.bar"));

// Increment/decrement the value of a nested field by a particular value 
store.dispatch(increment("foo.bar", 2));
store.dispatch(decrement("foo.bar", 2));

// Push the value of a field
store.dispatch(push("items", "3"));

// Reset a field to an initial value
store.dispatch(reset("foo"));

// Reset the entire state to initial value
store.dispatch(reset());

// Remove a field
store.dispatch(del("items"));

// Read a field's value
get(store.getState(), "foo");

// Return default value if field is undefined or null
get(store.getState(), "some-field", "default value");

// Read a nested field's value
get(store.getState(), "foo.bar");

```
# Credits
- [dot-prop-immutable](https://github.com/debitoor/dot-prop-immutable): Made accessing nested paths a piece of cake!
- [space-cloud](https:github.com/spaceuptech/space-cloud): An open-source Firebase + Heroku. This library came into existence while building the admin console of space cloud:). This organization made the automate-redux package of which this is a typescript port of.
