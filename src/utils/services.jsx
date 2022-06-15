import axios from "axios";
import { EndPoints } from "./endpoint";
import { toast } from 'react-toastify';

export const login = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let res = await axios.post(EndPoints.baseUrl + EndPoints.Login, {
                "email": email,
                "password": password
            }, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(async response => {
                    return response
                })
            resolve(res.data);
        } catch (error) {
            console.log('errorrrss', error);
            reject(`${error.response.data.errors[0]}`);
        }
    });
}

export const register = (email, password, phone, name) => {
    return new Promise(async (resolve, reject) => {
        try {
            let res = await axios.post(EndPoints.baseUrl + EndPoints.Register, {
                "email": email,
                "password": password,
                "name": name,
                "phone": phone
            }, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(async response => {
                    return response
                })
            resolve(res.data);
        } catch (error) {
            console.log('errorrrss', error);
            reject(`${error.response.data.errors[0]}`);
        }
    });
}

export const notify = (msg, type) => toast(msg, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
    type: type
});
