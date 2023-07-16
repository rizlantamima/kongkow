import Cookies from "js-cookie";

const cookieName = "apiToken"
export const SetApiToken = (apiToken, expires) => {
    Cookies.set(cookieName, apiToken, {
        expires: expires,
    });
};

// Method to get data from cookies
export const GetApiToken = () => {
    return Cookies.get(cookieName);
};

// Method to remove data from cookies
export const RemoveCookie = () => {
    Cookies.remove(cookieName);
};