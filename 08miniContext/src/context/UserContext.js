import React from "react";

const UserContext = React.createContext();

export default UserContext;


















/*
? | Now we will wrap all your components with this & it will become Provider for all the components to consume & subscribe to changes in the context.

 ! | provider ka matlab koii bhe iske andr jo component hai sarre components ko is global state ** const UserContext = React.createContext(); ** ka access mil jayega.
 ^ | context ko global variable hi man lo jisme humne user ka data store kar diya hai. Ab isko kisi bhi component me access kar sakte hai.
TODO | Ab hum isko App.js me import karenge aur iske provider se wrapkarenge.


// App.js
<UserContext>

    <Login />

    
</UserContext>
*/


