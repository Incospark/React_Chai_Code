import { Header, Footer } from "./components"
import { Outlet } from "react-router-dom"

// Outlet ka matlab header aur footer same rahenge, aur beech mein ki chije change hoti rahegi. Jaise ki home, about, contact etc. Ye Outlet wahi jagah hai jahan par ye chije render hongi.
function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout
