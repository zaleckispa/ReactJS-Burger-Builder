import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://burger-2de1e.firebaseio.com/'
});

export default instance;