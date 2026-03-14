# React Router Learning Summary

Bhai tumne **React Router + Loader + Barrel Export** jo seekha hai uska
short summary ye hai 👇

------------------------------------------------------------------------

## 1️⃣ React Router

**Kyu use karte hain?**

-   React app me **multiple pages banane ke liye** (SPA -- Single Page
    Application).
-   Page reload ke bina navigation hota hai.

**Example Routes**

    /           → Home
    /about      → About
    /contact    → Contact
    /user/1     → Dynamic user

------------------------------------------------------------------------

## 2️⃣ Layout + Outlet

**Kyu use karte hain?**

Common UI ko repeat hone se bachane ke liye.

**Example Structure**

    Header
       ↓
    Page content (Home / About / Contact)
       ↓
    Footer

`<Outlet />` wahi jagah hai jaha **child route render hota hai**.

------------------------------------------------------------------------

## 3️⃣ Dynamic Routing (useParams)

**Kyu use karte hain?**

URL se **dynamic data lene ke liye**.

**Example URLs**

    /user/ashish
    /user/123

**Code Example**

``` javascript
const { id } = useParams()
```

------------------------------------------------------------------------

## 4️⃣ Loader (React Router)

**Kyu use karte hain?**

Component render hone se **pehle data fetch karne ke liye**.

**Example**

    GitHub API fetch
    loader: githubInfoLoader

**Component me use:**

``` javascript
const data = useLoaderData()
```

------------------------------------------------------------------------

## 5️⃣ Barrel Export

**Kyu use karte hain?**

Multiple imports ko **clean aur organized** banane ke liye.

Instead of:

``` javascript
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
```

Use:

``` javascript
import { Home, About, Contact } from "./components"
```

------------------------------------------------------------------------

# 🧠 One Line Summary

-   👉 **React Router** = navigation handle karta hai\
-   👉 **Outlet** = nested layout render karta hai\
-   👉 **useParams** = URL se data leta hai\
-   👉 **Loader** = component render hone se pehle API data fetch karta
    hai\
-   👉 **Barrel file** = imports ko clean banati hai
