import React from 'react';

const Question = () => {
    return (
        <div>
            <div>
              <h3>How does work react ?</h3>
              <p><b>Answer</b>:React is fundamentally Javascript.
              ReactJS is an open-source, component-based front end library responsible only for the view layer of the application.
                  React works in declerative code and it work asynchronous .When a component loads, it can start an asynchronous function, and when the asynchronous function resolves it can trigger a re-render that will cause the component to recall the asynchronous function.</p>
          </div>
          <div>
              <h3>Props vs state different?</h3>
              <p><b>Answer</b>:
                 Props pass data from parent component to child.Rather state build component and the state of object where store property values and even the state object changes, the component re-renders.
            Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</p>
          </div>
          <div>
              <h3>How  useState work?</h3>
              <p><b>Answer</b>:useState is a Hook (function) that allows you to have state variables in functional components.
              If you want to set an initial value for the variable, pass the initial value as an argument to the useState function. When React first runs your component, useState will return the two-element array as usual but will assign the initial value to the first element of the array, as shown in figure 5
              </p>
          </div>
        </div>
    );
};

export default Question;