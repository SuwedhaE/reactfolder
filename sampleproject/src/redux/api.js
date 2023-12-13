import axios from "axios";

export const listUsersApi = async() =>
    await  axios.get("http://localhost:5000/users");

export const addUserApi = async(user) =>
    await  axios.post("http://localhost:5000/users", user);

export const deleteUserApi = async(userId) =>
    await  axios.delete(`http://localhost:5000/users/${userId}`);

export const updateUserApi = async(userId, userInfo) =>
    await  axios.put(`http://localhost:5000/users/${userId}`, userInfo);