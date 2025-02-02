import React from 'react';
import ReactDOM from 'react-dom/client';
// React Element
const JSXHeading= ()=> (
    <h1 className='heading 1'>
    Sachin this side !!!!!
    </h1>
    );
const number = 6000;
const Title=(
    {number},    
    <h1 className='heading 1'>
    it happened by react element not reacat Component !!!!!
    </h1>
    );
// react component-->
// 1) class based.... old way to write ... use JS Classes
// 2)functional .... new way of writing of code.. use fuction of JS
const HeadingComponent= ()=>(
    <div>
        {JSXHeading()}
        {number}
        <JSXHeading/>
        <h1> king is here my darling &&&</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
//  JSX also not any HTML insdie JS 
// JSX is HTML like syntax , it is jsx only not any html ot js or anything other stuff
console.log(JSXHeading);
// JSX-->(bable)-->react element(JS OBJECT)-->html and js -->render to browser
