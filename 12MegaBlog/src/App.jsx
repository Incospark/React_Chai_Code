
import './App.css'

function App() {
 //~ for react app use->  process.env.REACT_APP_APPWRITE_URL
  console.log(import.meta.env.VITE_APP_APPWRITE_URL)

  return (
    <>
      <h1>A Blog app with AppWrite</h1>
    </>
  )
}

export default App
