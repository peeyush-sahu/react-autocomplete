# Questions

## What is the difference between Component and PureComponent?
  - **Component** - Component is the basic element of React. It consists lifecycle methods to handle the behaviour of component. Whenever the parent component re-render it will re-render.
  - **PureComponent** - PureComponent is a sub-class of Component which has shallow comparison of props and state inbuilt.
  - **Example of breaking the app** - If any PureComponent is accepting children as a prop and It's parent component has state updates in that case Parent will re-render but PureComponent will not since the props/state is not changed.

## Context + ShouldComponentUpdate might be dangerous. Why is that?
To avoid unneccessary re-render we use shouldComponentUpdate method. If we use it with Context then even if context value is changed the component dosen't re-render beacuse if shouldComponentUpdate returns false.

## Describe 3 ways to pass information from a component to its PARENT.
  1. Using **Callback** in Parent Component which is passed as a prop in children.
  2. Using **useImperativeHandle**

## Give 2 ways to prevent components from re-rendering.
  1. Using **React.memo**
  2. Using **useCallback** & **useMemo**

## What is a fragment and why do we need it? Give an example where it might break my app.
  - **Fragment** - In JSX we need to wrap all children in one element. Earlier we have to wrap it with div/span etc. After 16.2 version React introduced Fragment which is used as a wrapper for children. It is not treated as a element in DOM.
  - **Example of breaking the app** - If we have CSS/styled some chidren on the basis of Parent (maybe div/span/p) and we forgot to wrap those children as per element required by styling or we use Fragment instead. In that case styling will be broken.

## Give 3 examples of the HOC pattern.
  1. Connect is a HOC available in react-redux.
  2. If we check if particular page is used by authorized user; we can bind that compoenent or page using withAuthorizaton HOC.
  3. If we want to decorate any element/component as a draggable. We can create an HOC withDraggable and can bind that component.

## What's the difference in handling exceptions in promises, callbacks and async...await?
  - **Promises** - In promises we use `.catch` method.
  - **Callbacks** - In callback we can user `try-catch` block.
  - **Async/Await** - In async/await we can user `try-catch` block.

## How many arguments does setState take and why is it async.
  1. setState has 2 arguements `nextState` and `callback (optional)`. 
  2. **Why setState is async** - If setState will be a synchronus operation than it may hit the performance of main thread/browser because of heavy operations of state updation. Instead React batch those setState calls to improve the performance.

## List the steps needed to migrate a Class to Function Component.
  1. Remove class declaration and use `const ComponentName = () => {}` to declare.
  2. Remove `render` method and only retain `return` statement to return JSX.
  3. Change all functions to const based declaration `const methodName = () => {}`.
  4. Remove state initialization and use `useState` instead.
  5. Remove event handler binding.
  6. Replace all lifecycle methods with `useEffect`.

## List a few ways styles can be used with components.
  1. Can be styled with inline styles.
  2. Can be styled with css files using className.
  3. Can be styled with `styled-components`
  4. Can be styled with UI Libraries/Frameworks.

## How to render an HTML string coming from the server.
It can be rendered using `dangerouslySetInnerHtml`; but before rendering it should be santized using any third party library `dompurify, santize-html` etc.
