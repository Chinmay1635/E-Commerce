import Cookies from 'js-cookie';


const isLoggedIn = () => {
    return !!Cookies.get('token');
}

export default isLoggedIn;