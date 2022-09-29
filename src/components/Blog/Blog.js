import React from 'react';
import './Blog.css'
const Blog = () => {
    return (
        <div>
            <div className='blog-container'>
            <h1>How Does React Work?</h1>
            <p>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.</p>

            </div>
            <div className='blog-container'>
                <h1>Difference Between Props and State</h1>
                <p>1.Props are read-only.	State changes can be asynchronous.
                    <br />
               2.Props are immutable.	State is mutable.
               <br />
                 3.	Props allow you to pass data from one component to other components as an argument.	State holds information about the components.
                 <br />
               4.Props can be accessed by the child component.	State cannot be accessed by child components.
               5.Props are used to communicate between components.	States can be used for rendering dynamic changes with the component.
            6.	Stateless component can have Props.	Stateless components cannot have Stat</p>
            </div>
            <div className='blog-container'>
                <h1>What else does useEffect do other than data load? </h1>
                <p > Accepts a function that contains imperative, possibly efficient code. Mutations,subscriptions, times logging,and other side effects are not allowed inside the main body of a function component (referred to as React's render phase). Doing so will lead to confusing bugs and inconsistencies in the UI.</p>
            </div>
        </div>
    );
};

export default Blog;