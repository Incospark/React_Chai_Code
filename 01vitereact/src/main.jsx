import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


// *** 2️⃣Ye ek React component hai,  Agar tum <MyApp /> render karoge to ye HTML page me show hoga.
function MyApp() {

  return (
    <div>
      <h1>Mai Custom App Hu ! </h1>
    </div>
  )
}



// ** 3️⃣ Ye JSX wala element hai, React internally isko convert karta hai:  React.createElement('a', {href: ..., target: ...}, "Visit Google")

const anotherElement = (
  <a href="https://google.com" target="_blank">Visit Google</a>
)


const anotherUser = " Chai aur ashish"

// ** 4️⃣Ye manual React element hai,  Ye same kaam manually kar raha hai jo JSX karta hai, JSX likhna easy hai kyuki React.createElement() likhna boring aur lamba hai.

//  Hum Custom react element bana rahe hai, jisme type 'a' hai, props me href aur target hai, aur children me "Click me to Visit Google" hai, aur ek aur evaluated expression pass kar rahe hai jo ki " Chai aur ashish" hai, jiska result bhi children ke sath show hoga.

//  React.createElement( inject by babel ) 3 arguments leta hai, 1st tag ka naam, 2nd props object, 3rd children (jo ki string ya phir aur React element ho sakta hai), final mai evalated expression bhi pass kar sakte ho jo ki string return karega, jaise ki neeche example me hai.

const ReactElement = React.createElement(
  'a',
  {
    href: 'https://www.google.com',
    target: '_blank'
  },
  ' Click me to Visit Google',
  anotherUser
)


// ** 5️⃣ Ye final rendering hai. 
// Tum chahe to MyApp component ko render kar sakte ho, ya phir JSX element ko, ya phir React.createElement se bana hua element ko. Sab kaam karega.

createRoot(document.getElementById('root')).
  render(
    //anotherElement
    ReactElement
    // <App />

  )


/*🧠Important Concept (Sabse Important)
🔥 JSX kya hota hai?

Ye:

<a>Visit</a>

Actually convert hota hai:

React.createElement('a', null, 'Visit')

Isliye React import zaroori hota hai (old versions me especially).
*/