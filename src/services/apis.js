const portfolioEndPoint = {
    
    CREATE_PORTFOLIO : '/api/v1/portfolio/generate',
    GET_PORTFOLIOS : '/api/v1/portfolio/all',
    GET_PORTFOLIO_BY_LINK : '/api/v1/portfolio/',
    GET_AUTHORIZED_PORTFOLIO_BY_LINK : '/api/v1/portfolio/get-authorized-portfolio',
    UPDATE_PORTFOLIO : '/api/v1/portfolio',
    DELETE_PORTFOLIO : '/api/v1/portfolio',
    IS_LINK_AVAILABLE : '/api/v1/portfolio/link-available',
    CHANGE_URL : '/api/v1/portfolio/change-url',
    SEND_MAIL : '/api/v1/portfolio/send-mail'

}

const resumeEndpoint = {

    GET_RESUME_BY_ID : '/api/v1/resume/',
    GENERATE_RESUME : '/api/v1/resume/generate',
    GENERATE_RESUME_WITH_AI : '/api/v1/resume/generate-with-ai',
    DELETE_RESUME : '/api/v1/resume',
    GET_ALL_RESUMES : '/api/v1/resume',
    RESUME_ANALYTICS : '/api/v1/resume/analyze'
    
}

const assetsEndpoint = {
    UPLOAD_ASSETS : '/api/v1/assets',
    GET_ASSETS : '/api/v1/assets',
    DELETE_ASSET : '/api/v1/assets/'
}

const userEndPoint = {
    GET_PROFILE_STATUS : '/api/v1/users/status',
    GET_USER_INFO : '/api/v1/users/get-user-info'
}
export {
    portfolioEndPoint,
    resumeEndpoint,
    assetsEndpoint,
    userEndPoint
}