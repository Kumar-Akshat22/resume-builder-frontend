import axios from 'axios'
import { assetsEndpoint } from './apis'


const getAssets = async () => {
    const token = localStorage.getItem('AccessToken')
    const res = await axios.get(assetsEndpoint.GET_ASSETS,{
        headers: {
            'Authorization': `Bearer ${token}`
        }        
    })
    return res.data.data
}

const uploadAssets = async (formData) => {
    const token = localStorage.getItem('AccessToken')
    const res = await axios.post(assetsEndpoint.UPLOAD_ASSETS, formData, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
        }
    })
    return res.data.data
}

const deleteAsset = async (id) => {
    const token = localStorage.getItem('AccessToken')
    const res = await axios.delete(`${assetsEndpoint.DELETE_ASSET}${id}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    return res.data.data
}

export {
    uploadAssets,
    getAssets,
    deleteAsset
}