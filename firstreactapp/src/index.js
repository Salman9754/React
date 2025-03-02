import React from 'react';
import ReactDOM from 'react-dom/client';
import MyBtn from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <MyBtn text='Click me' heading='First Heading'/>
  <MyBtn text='Second button' heading='Second Heading' />
  </>
  
);

