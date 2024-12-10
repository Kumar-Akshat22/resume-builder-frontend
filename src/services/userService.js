import axios from "axios";
import { userEndPoint } from "./apis";



const getProfileCompletionStatus = async () => {
    const token = localStorage.getItem('AccessToken');
    const res = await axios.get(userEndPoint.GET_PROFILE_STATUS,{
        headers: {
            "Authorization" : `Bearer ${token}`
        }
    })
    localStorage.setItem('status', JSON.stringify(res.data.data))
    return res.data.data
}

const getUserData = async () => {
    const token = localStorage.getItem('AccessToken');
    const res = await axios.get(userEndPoint.GET_USER_INFO,{
        headers: {
            "Authorization" : `Bearer ${token}`
        }
    })
    localStorage.setItem('status', JSON.stringify(res.data.data))
    return res.data.data}

export {
    getProfileCompletionStatus,
    getUserData
}