// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

// const ReactElement = {
//     type: 'a', // div , tag, a
//     props:{// properties , ye object hota hai
//         href: 'https://www.google.com',
//         target: '_blank',
//     },
//     children: 'Click me! to visit Google'
// }

// const anotherElement = React.createElement(
//   <a href='https://www.google.com' target='_blank'> visit google</a>
// )
const anotherUser = "saurabh"

const ReactElement = React.createElement(
  'a', // tag p,h1
  {href:'https://www.google.com',target:'_blank'}, // attributes
   'click me ++ to visit google',
   anotherUser//direct variable inject jo gaya
)

ReactDOM.createRoot(document.getElementById('root')).
render(
   ReactElement
)
