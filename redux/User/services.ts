import axios from 'axios';

interface UserLoginPayload {
    username: string
    password: string
    callback?: Function
} 

export const userLogin = async ({username, password, callback}: UserLoginPayload) => {
    await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/login`, {username, password}
    )

    return null;
};

export const getUser = async () => {
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/me`)

    return data;
};
