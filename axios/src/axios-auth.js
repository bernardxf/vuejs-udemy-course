import axios from 'axios';

const instance = axios.create({
	// baseURL: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=[API_KEY]'
	baseURL: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty'
});

//instance.defaults.headers.common['SOMETHING'] = 'something';

export default instance;