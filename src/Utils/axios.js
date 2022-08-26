import axios from "axios";
import {getSession} from './Session';


const BASE_URL = "https://mitramas-test.herokuapp.com";
const axioscall = axios.create({
    baseURL: BASE_URL,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

const token = getSession('token')
const axiosauth = axios.create({
    baseURL: BASE_URL,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization : `${token}`
    },
  });

export {axioscall, axiosauth}