// Here we can define an axios custom instance
// we can have as many as we want depending on the API endpoints we want to call
// and on the options want to add to each instance configuration
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty',
});

// instance.defaults.headers.common['SOMETHING'] = 'something';

export default instance;