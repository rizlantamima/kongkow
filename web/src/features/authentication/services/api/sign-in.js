import { fetchApi } from "../../../../configurations/api";

export default async function RestApiSignIn (username, password){
    try {
        const response = await fetchApi('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            return true;
        } else {
            console.error(response.status);
            throw new Error('Invalid username or password');
        }
    } catch (error) {
        console.error(error);
        throw new Error('An error occurred while logging in');
    }
};