import axios from 'axios'
import { portfolioEndPoint } from './apis'
import toast from 'react-hot-toast'

const getPortfolio = async (link) => {
    const res = await axios.get(`${portfolioEndPoint.GET_PORTFOLIO_BY_LINK}/${link}`)
    if(res.data.statusCode == 404){
        throw new Error("Portfolio not found")
    }
    return res.data.data
}

const getLinkAvailability = async (link) => {
    const res = await axios.get(`${portfolioEndPoint.IS_LINK_AVAILABLE}/${link}`)
    console.log("checking link availaabilitry: ", res.data.data.success)
    return res.data.data.success
}

const getPortfolios = async () => {
    const token = localStorage.getItem('AccessToken');
    console.log(token);
    
    const res = await axios.get(portfolioEndPoint.GET_PORTFOLIOS,
        {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
    )
    console.log(res.data.data)
    return res.data.data
}

const generatePortfolio = async (data) => {
    const token = localStorage.getItem('AccessToken');
    const res = await axios.post(portfolioEndPoint.CREATE_PORTFOLIO, data,
        {
            headers: {
                'Authorization': `Bearer ${token}`,
            "Content-Type": "multipart/form-data"
            },
        
        }
    )
    console.log(res.data)
    return res.data.data
}

const getAuthorizedPortfolio = async (link) => {
    const token = localStorage.getItem('AccessToken');
    const res = await axios.get(`${portfolioEndPoint.GET_AUTHORIZED_PORTFOLIO_BY_LINK}/${link}`,
        {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
    )
    if(res.data.statusCode >= 300){
        toast.error(res.data.message);
        throw new Error("Failed to get resume "+res.data.message)
    }
    console.log(res.data.data)
    return res.data.data
}

const changeUrl = async (newLink, oldLink) => {
    const token = localStorage.getItem('AccessToken');
    const res = await axios.put(`${portfolioEndPoint.CHANGE_URL}`,
        {newLink, oldLink},
        {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
    )
    console.log(res.data)
    return res.data.data
}

const updatePortfolio = async (link, data) => {
    const token = localStorage.getItem('AccessToken');
    const res = await axios.put(`${portfolioEndPoint.UPDATE_PORTFOLIO}/${link}`, JSON.parse(data),
        {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
    )
    console.log(res.data)
    return res.data.data
}

const sendEmail = async (link, data) => {
    const res = await axios.post(`${portfolioEndPoint.SEND_MAIL}/${link}`, data)
    console.log(res.data)
    return res.data.data
}
export {
    getPortfolio,
    getLinkAvailability,
    getPortfolios,
    generatePortfolio,
    getAuthorizedPortfolio,
    changeUrl,
    updatePortfolio,
    sendEmail
}