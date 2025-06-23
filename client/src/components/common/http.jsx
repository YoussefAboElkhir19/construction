export const apiUrl = "http://server.test/api/";
export const fileUrl = "http://server.test/";

export const token = () => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo')); // Ensure the key matches
    if (userInfo && userInfo.token) {
        return userInfo.token;
    }
    return null; // Return null if no token is found
};