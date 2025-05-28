import axios from "axios";

const BASE_URL = 'http://127.0.0.1:8000/api/';
const TOKEN_URL = `${BASE_URL}token/`;
const REFRESH_TOKEN_URL = `${BASE_URL}token/refresh/`;
const GET_BARANGAYS_URL = `${BASE_URL}barangays/`;
const GET_CITY = `${BASE_URL}cities/`;
const GET_PROVINCE = `${BASE_URL}provinces/`;
const GET_EDUCATION = `${BASE_URL}educations/`;
const GET_OCCUPATION = `${BASE_URL}occupations/`;


export const get_all_barangays = async() => {
    try {
        const response = await axios.get(GET_BARANGAYS_URL);
        return response.data;
    } catch(error) {
        console.log(error)
    }
}

export const get_all_city = async() => {
    try {
        const response = await axios.get(GET_CITY);
        return response.data;
    } catch(error) {
        console.log(error)
    }
}

export const get_all_province= async() => {
    try {
        const response = await axios.get(GET_PROVINCE);
        return response.data;
    } catch(error) {
        console.log(error)
    }
}

export const get_education  = async() => {
    try {
        const response = await axios.get(GET_EDUCATION);
        return response.data;
    } catch(error) {
        console.log(error)
    }
}

export const get_occupations = async() => {
    try {
        const response = await axios.get(GET_OCCUPATION);
        return response.data;
    } catch(error) {
        console.log(error)
    }
}