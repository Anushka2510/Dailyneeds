const API_HOST_LOCAL = "http://localhost:8080";
const UI_HOST_LOCAL = "http://localhost:3000";
const ENV_LOCAL = "local";
const HOSTS = {
    local: {
        "API": API_HOST_LOCAL,
        "UI": UI_HOST_LOCAL
    }
};
export const serviceUrl = () => {
    
    console.log("process.env.REACT_APP_ENVIRONMENT is ");
    console.log(process.env.REACT_APP_ENVIRONMENT);

    return HOSTS[ENV_LOCAL].API
};

export const urls = {
    service: serviceUrl()
    
};
