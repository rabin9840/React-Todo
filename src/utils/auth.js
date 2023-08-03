// import Cookies from "js-cookie";

// // Function to check if the session cookie is present
// const isAuthenticated = () => {
//     const sessionCookie = Cookies.get("connect.sid");
//     console.log(sessionCookie);
//     return !!sessionCookie; // Returns true if the session cookie is present, otherwise false
// };

// export default isAuthenticated;

// Function to check if the session cookie is present
// const isAuthenticated = () => {
//     console.log("all cookies" + document.cookie);
//     const cookies = document.cookie.split(';').map(cookie => cookie.trim());
//     console.log("Inside cookies" + cookies);

//     // Check if the "connect.sid" cookie is present
//     const sessionCookieExists = cookies.some(cookie => cookie.startsWith('connect.sid='));
//     console.log("Inside the auth utility" + sessionCookieExists);

//     return sessionCookieExists;
// };

// export default isAuthenticated;
//NOTE:PROBLEM DUE TO BEING COOKIE HTTP-ONLY AND NOT ACCESSIBLE BY JS



