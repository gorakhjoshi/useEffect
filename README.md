# useEffect: HTTP requests

## 📝 Your Notes

## Background

HTTP requests are another common side-effect that we need to do in applications.
This is no different from the side-effects we need to apply to a rendered DOM or
when interacting with browser APIs like localStorage. In all these cases, we do
that within a `useEffect` hook callback. This hook allows us to ensure that
whenever certain changes take place, we apply the side-effects based on those
changes.

One important thing to note about the `useEffect` hook is that you cannot return
anything other than the cleanup function. This has interesting implications with
regard to async/await syntax:

```javascript
// this does not work, don't do this:
React.useEffect(async () => {
  const result = await doSomeAsyncThing();
  // do something with the result
});
```

The reason this doesn't work is because when you make a function async, it
automatically returns a promise (whether you're not returning anything at all,
or explicitly returning a function). This is due to the semantics of async/await
syntax. So if you want to use async/await, the best way to do that is like so:

```javascript
React.useEffect(() => {
  async function effect() {
    const result = await doSomeAsyncThing();
    // do something with the result
  }
  effect();
});
```

This ensures that you don't return anything but a cleanup function.

🦉 I find that it's typically just easier to extract all the async code into a
utility function which I call and then use the promise-based `.then` method
instead of using async/await syntax:

```javascript
React.useEffect(() => {
  doSomeAsyncThing().then((result) => {
    // do something with the result
  });
});
```

But how you prefer to do this is totally up to you :)