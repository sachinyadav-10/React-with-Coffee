import React from 'react';
import ReactDOM from 'react-dom/client';
// react.createElement give a react element(which is JS object)  => reandered as HTMLElement
const heading= React.createElement("h1",{id:"heading"},"Hello to everyone😎")
// react element is an object not any html tag or dom element 
//  when we render it on dom of browser it become html 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
// JSX --->>> it is not part of the react 
const JSXHeading= <h1>Sachin this side !!!!!</h1>;
root.render(JSXHeading);
//  JSX also not any HTML insdie JS 
// JSX is HTML like syntax , it is jsx only not any html ot js or anything other stuff
console.log(heading);
console.log(JSXHeading);
// JSX-->(bable)-->react element(JS OBJECT)-->html and js -->render to browser



