
import Chai from "./chai"

function App() {
  const username = "Ashish Sharma"

  return (
    <>
      <Chai />
      <h1>Chai Aur Code with Vite | {username}</h1>
      <p>---This Chai is ready to be Served ---</p>
    </>
  )

  // return (
  //   //<h1>Chai Aur Code with Vite | Ashish Sharma</h1>
  // )
}

export default App



// ** {username} ise bolte hai Evaluated expresion ,  mtlb yaha ap J.scrp nahi likhte ho js ka final outcome result likhte ho
//  <> this is called Fragment / A container in js which holdes * html tags within it to use bcoz jsx allows only 1 element to in return fn()