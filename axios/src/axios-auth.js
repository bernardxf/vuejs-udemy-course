import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://vuejs-axios-85f8f.firebaseio.com'
});

instance.defaults.headers.common['SOMETHING'] = 'something';

export default instance;