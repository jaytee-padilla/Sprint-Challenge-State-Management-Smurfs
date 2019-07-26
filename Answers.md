1. What problem does the context API help solve?
React Context API is a way to essentially create global variables that can be passed around in a React app

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions are payloads of information that send data from your application to your store. They are the only source of information for the store. Reducers specify how the application's state changes in response to actions sent to the store. Store brings everything together.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is kind of similar to global access. Component state is kind of similar to private access.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Redux-Thunk makes our action-creators asynchronous

1. What is your favorite state management system you've learned and this sprint? Please explain why!
I'm kinda sorta starting to like Redux. I hate it because the syntax/boilerplate to make it work is so all over the place, but it's pretty cool hooking up components to the store