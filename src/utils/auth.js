import Cookies from "js-cookie";

// Function to check if the session cookie is present
const isAuthenticated = () => {
    const sessionCookie = Cookies.get("connect.sid");
    return !!sessionCookie; // Returns true if the session cookie is present, otherwise false
};

export default isAuthenticated;
