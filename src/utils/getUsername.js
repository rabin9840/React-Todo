// import { useState } from "react";
// import { useSelector } from "react-redux";

// const getUserName = () => {
//     const [username, setUsername] = useState("");
//     const reduxUsername = useSelector((state) => state.username);
//     if (reduxUsername.username) {
//         console.log("reduxUsername", reduxUsername.username);
//         setUsername(reduxUsername.username);
//     }
//     else {
//         setUsername(localStorage.getItem("username"));
//     }

//     return username;

// }

// export default getUserName;

const getUserName = (reduxState) => {

    if (reduxState && reduxState.username) {
        console.log("reduxUsername", reduxState.username);
        return reduxState.username;
    }
    else {
        const localUsername = localStorage.getItem("username");
        return localUsername || "";
    }

}

export default getUserName;