# useParams Hook Issue in Nested React Router v6 Routes

This repository demonstrates a bug encountered when using the `useParams` hook in nested routes within React Router v6.  The issue arises from the asynchronous nature of route parameter resolution, leading to unexpected values being returned by `useParams` when navigating between routes.

The `NestedRoutesBug.js` file showcases the problematic behavior.  The `NestedRoutesSolution.js` file presents a solution using useEffect hook to ensure that the parameters are loaded before rendering the component's content.

## How to Reproduce

1. Clone this repository.
2. Navigate to the `bug` directory.
3. Run `npm install`.
4. Run `npm start`.
5. Navigate between the nested routes to observe the unexpected behavior.

## Solution

The solution utilizes the `useEffect` hook to check for parameter changes and updates the component's state accordingly. This ensures that the component renders only after the route parameters are correctly resolved. See `NestedRoutesSolution.js` for the implementation.