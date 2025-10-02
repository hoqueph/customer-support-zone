# Question 1 : What is JSX, and why is it used?

Ans: 
JavaScript XML (JSX) is a syntax extension that allows writing HTML-like code inside JavaScript. It is used because it makes UI code more readable and allows React to create elements efficiently.

# Question 2 : What is the difference between State and Props?

Ans: 
The main difference is that props are external and read-only, while state is internal and mutable.

State : State is the internal memory of a component. It holds data that can change over time, usually in response to user actions or other events. State is local to the component and can be updated using functions like useState in functional components or this.setState in class components. It's used for things like form input values, UI visibility (e.g., modals), or counters.

Props : Props are used to pass data from a parent component to a child component. They are read-only, meaning the child component cannot modify them. This helps maintain a clear and predictable one-way data flow, known as unidirectional data flow. Props are commonly used to pass initial values or functions (callbacks) that allow the child to communicate with the parent.


# Question 3 : What is the useState hook, and how does it work?

Ans: The useState hook lets functional components in React manage internal state—data that can change over time. It returns a pair: the current state value and a function to update it. You call it with an initial value at the top of your component. When the update function is called, React re-renders the component with the new state. It’s commonly used for handling user input, toggling UI, and managing dynamic data.

# Question 4 : How can you share state between components in React?

Ans: 
1.Lifting State Up: Best for closely related components (parent/child or siblings). Move shared state to their nearest common ancestor.

2.React Context API: Ideal for app-wide or deeply nested state. Avoids prop drilling by providing state via a context provider.

3.External State Libraries: Use tools like Redux or Zustand for complex apps with large-scale or deeply shared state needs.

# Question 5 : How is event handling done in React?

Ans: 
Event handlers in React are passed as functions using camelCase syntax (e.g., onClick, onChange).
