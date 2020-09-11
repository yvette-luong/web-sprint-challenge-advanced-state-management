## Answer Interview Questions


1. What problem does the context API help solve?

- Sharing state down a component tree to prevent prop drilling, pass data down the component tree without mannually passing the props at every stages.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

-Actions - show the reducer the mission 
-Reducers - include state and action --> to know what we want to do with the state. Check against the action.type --> do what we want to do with the state while copying all the state as well ( keep it immubility)
- Store - hold the states, and all the copies of the states to keep it immutibility. Store is the single source of truth because the only way to change data in the UI is to pass sate and action through the reducer

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

- Component state is stored locally in the component - need to use component state on say a form in order to hold the form values

- Application state - is a state at a given point in time

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

-Thunk allows us to write action creators taht return a function instead of an action.
- Thunk can be used to delay a dispatch of an action, or to dispatch only if a certain condition is met. 

5. What is your favorite state management system you've learned and this sprint? Please explain why!

- I prefer redux, rather than context. Redux is easier for me to understand. I'm on the way get used to write react-redux. 