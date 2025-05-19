export const apiUrl = "http://backend.test/api/";
export const fileUrl = "http://backend.test/";

export const token = () => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo')); // Ensure the key matches
    if (userInfo && userInfo.token) {
        return userInfo.token;
    }
    return null; // Return null if no token is found
};