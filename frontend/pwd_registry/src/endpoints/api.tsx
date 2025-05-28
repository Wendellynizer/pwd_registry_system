import axios from "axios";

const BASE_URL = 'http://127.0.0.1:8000/api/';
const TOKEN_URL = `${BASE_URL}token/`;
const REFRESH_TOKEN_URL = `${BASE_URL}token/refresh/`;
const GET_BARANGAYS_URL = `${BASE_URL}barangays/`;
const GET_CITY = `${BASE_URL}cities/`;
const GET_PROVINCE = `${BASE_URL}provinces/`;
const GET_EDUCATION = `${BASE_URL}educations/`;
const GET_OCCUPATION = `${BASE_URL}occupations/`;
const LOGIN_URL = `${BASE_URL}login/`;
const APPLICATIONS_URL = `${BASE_URL}applications/`;

const DISABILITIES_URL = `${BASE_URL}disabilities/`


export const login = async(username: string, password: string) => {
    try {
        const response = await axios.post(LOGIN_URL, {
            headers: {
                'Content-Type': 'application/json'
            },
            "username": username,
            "password": password
        });

        // save to localstorage
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', response.data.user);
        localStorage.setItem('isLoggedIn', 'true');

        return {"message": response.data.message, "user": response.data.user, "status": response.status};

    } catch (error) {
        console.log('Login failed', error);
        return false;
    }
}

export const getAllBarangays = async() => {
    try {
        const response = await axios.get(GET_BARANGAYS_URL);
        return response.data;
    } catch(error) {
        console.log('Error Fetching Barangays: ', error)
    }
}

export const getAllOccupations = async() => {
    try {
        const response = await axios.get(GET_OCCUPATION);
        return response.data;
    } catch(error) {
         console.log('Error Fetching Barangays: ', error)
    }
}

export const getAllDisabilities = async() => {
    try {
        const response = await axios.get(DISABILITIES_URL);
        return response.data;
    } catch(error) {
         console.log('Error Disabilities: ', error)
    }
}

export const createDisability = async(disability: any) => {
    try {
        const response = await axios.post(DISABILITIES_URL, disability,{
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Token "+localStorage.getItem('token')
            }
        });
        return response;

    } catch(error) {
        console.log(error.response?.data);
         console.log('Error Creating Disabiity: ', error)
    }
}

//* Applications
export const getApplications = async() => {
    try {
        const response = await axios.post(APPLICATIONS_URL, {
            headers: {
                "Authorization": "Token "+localStorage.getItem('token')
            }
        });

        return response;
        
    } catch(error) {
        console.log(error.response?.data);
        console.log('Error Fetching Applications: ', error)
    }
}


export const createApplication = async(applicationData: any) => {
    try {
        const response = await axios.post(APPLICATIONS_URL, applicationData,{
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Token "+localStorage.getItem('token')
            }
        });
        return response.data;
    } catch(error) {
        console.log(error.response?.data);
        console.log('Error Creating Application: ', error)
    }
}