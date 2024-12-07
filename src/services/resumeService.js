import axios from 'axios'
import { resumeEndpoint } from './apis'
const generateResume = async(data) => {
    const token = localStorage.getItem('AccessToken')
    const res = await axios.post(resumeEndpoint.GENERATE_RESUME, data, {
        headers:{
            Authorization: `Bearer ${token}`,
        }
    })
    return res.data.data
}

const generateResumeWithAI = async (data) => {
    const token = localStorage.getItem('AccessToken')
    const res = await axios.post(resumeEndpoint.GENERATE_RESUME_WITH_AI, data, {
        headers:{
            Authorization: `Bearer ${token}`,
        }
    })
    return res.data.data
}

const getAllResume = async () => {
    const token = localStorage.getItem('AccessToken')
    const res = await axios.get(resumeEndpoint.GET_ALL_RESUMES, {
        headers:{
            Authorization: `Bearer ${token}`,
        }
    })
    return res.data.data
}
export {
    generateResume,
    generateResumeWithAI,
    getAllResume,
 
}