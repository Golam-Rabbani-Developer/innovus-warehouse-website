import React from 'react';
import { BiRightArrow } from "react-icons/bi"
const BlogPost = () => {
    const array = ` [
        {name:"mouse",price:120}
        {name:"mouse",price:120}
        {name:"mouse",price:120}
        {name:"mouse",price:120}
]
`
    const ans = `array.filter(price => price.name.toLowerCase().includes("mo"))`
    return (
        <div className='grid w-9/12 mx-auto grid-cols-1 gap-4 mt-32 font-oswald'>
            <div class="card bg-base-100 shadow-xl border-l-8 border-secondary">
                <div class="card-body">
                    <h2 class="card-title">Question : 1 : How will you improve the performance of a React Application ?</h2>
                    <hr />
                    <p><span className='font-bold'>Aswer : </span>The simplest way to improve the performance of our react app by avoiding some mutation values that we are using as props or state described below.</p>
                    <p className=' text-sm  flex items-center gap-3 '><BiRightArrow className='text-secondary' /> Use the Necessary Props only. </p>
                    <p className=' text-sm  flex items-center gap-3 '><BiRightArrow className='text-secondary' /> Keeping component state local where necessary.</p>
                    <p className=' text-sm  flex items-center gap-3 '><BiRightArrow className='text-secondary' /> Declaring required state and React components to prevent unnecessary re-renders</p>
                    <p className=' text-sm  flex items-center gap-3 '><BiRightArrow className='text-secondary' />Code-splitting in React using dynamic import</p>
                    <p className=' text-sm  flex items-center gap-3 '><BiRightArrow className='text-secondary' />Windowing or list virtualization in React.</p>

                </div>
            </div>
            <div class="card bg-base-100 shadow-xl border-l-8 border-secondary">
                <div class="card-body">
                    <h2 class="card-title">Question : 2 : What are the different ways to manage a state in a React application?</h2>
                    <hr />
                    <p><span className='font-bold'>Aswer : </span> In Our React application we need to know first the state available state. There are four state available in our react applicaiton. These are : </p>
                    <p>✔️ Local State </p>
                    <p>✔️ Global State </p>
                    <p>✔️ Server State </p>
                    <p>✔️ URL State </p>
                    <hr />
                    <p>Now There are two ways to manage all the state in react applicaition</p>
                    <p>✔️ Using UseState :  It can take accept any valid data value, including primitive and object values. Additionally, its setter function can be passed down to other components as a callback function without needing optimizations like (useCallback)</p>
                    <p>✔️ Using UseReducer : As compared to useState  it takes always a reducer . The benefit of useReducer is that it provides a built-in way to perform a number of different state operations with the help of the reducer function, which makes it more dynamic overall than useState.</p>
                </div>
            </div>
            <div class="card bg-base-100 shadow-xl border-l-8 border-secondary">
                <div class="card-body">
                    <h2 class="card-title">Question : 3 : How does prototypical inheritance work?</h2>
                    <hr />
                    <p><span className='font-bold'>Aswer :

                    </span>Since Javascript is a Object oriented programming language. It runs by making the piece of code into a simple object. So we need to clear our concept on the prototypical inheritance.</p>
                    <hr />
                    <p> <span className='font-bold'>Protypical Inheritance</span> means making an object and sharing the property of that object to another object.In ES5 we had to created our objects by using Object.create(). But using class constractor and __proto__ funtion. Using this  we can create the objects by sharing and adding to one another objects. Let suppose we have an object name user and and we want to share the property of that object at that we create a constractor and share the property by using prototypical inheritance.</p>
                </div>
            </div>
            <div class="card bg-base-100 shadow-xl border-l-8 border-secondary">
                <div class="card-body">
                    <h2 class="card-title">Question : 4 : Why you do not set the state directly in React?</h2>
                    <hr />
                    <p><span className='font-bold'>Aswer : </span>
                        Actually for updating or keeping the users activity undercontrol we use the state of react and update the state with every activities of users. But what if we update the state directly ? Take a close look on it --</p>
                    <p>Every time react update the state with compared to the react virtual DOM. If we update the state directly then react will not update it will render and for this react lifecycle changes and losses one of its stage and create a problem sometimes it leads a huge difficulties to solve</p>
                    <p>🔸 If we update it directly, calling the setState() afterward may just replace the update we made. </p>
                    <p>🔸 When we directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.</p>
                    <p>🔸 We will lose control of the state across all components.</p>
                </div>
            </div>
            <div class="card bg-base-100 shadow-xl border-l-8 border-secondary mb-12">
                <div class="card-body">
                    <h2 class="card-title">Question : 5 : You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                    <hr />
                    <p><span className='font-bold'>Aswer : </span>Implement search option in an array  </p>
                    <div className='bg-secondary text-white mt-4 p-4'> {array}
                        <p>{ans}</p>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default BlogPost;