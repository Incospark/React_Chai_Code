//**Barrel file it includes all the components imports and exports in a single file */

// Barrel file

import Layout from "../Layout.jsx"
import Home from "./Home/Home.jsx"
import About from "./About/About.jsx"
import Contact from "./Contact/Contact.jsx"
import Header from "./Header/Header.jsx"
import Footer from "./Footer/Footer.jsx"
import User from "./user/User.jsx"
import Github,{ gitHubinfoLoader } from "./Github/Github.jsx"

export {
    Layout,
    Home,
    About,
    Contact,
    User,
    Github,
    gitHubinfoLoader,
    Header,
    Footer
}

