import axios from 'axios';

const instance = axios.create({
    baseURL:'https://mi-proyecto-5192d.firebaseio.com/'
})

export default instance;