
// const URI = '/api/users';                //  si estamos en un servidor para produccion se deja asi   = '/api/users'
//const URI = 'https://localhost:5000/api'; // en desarrollo
const URI = 'https://jsonwebtoken-backend.onrender.com:1000/api'
// const URI = 'https://album-fotos-backend-production.up.railway.app/api/users';
// const URI = 'https://albumfotos-api.onrender.com/api/users'

const UserServices = {};

UserServices.isLoggedUser = async () => {
    try {
        const response = await fetch(URI + '/users/login', {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log(data);
        if (response.status == 200) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.log(error);
        return false;
    }
}

UserServices.getProfile = async () => {
    try {
        const response = await fetch(URI + '/users/profile', {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json()
        if (response.status == 200) {
            return data;
        } else {
            return null;
        }
    } catch (error) {
        console.log(error);
        return null;
    }
}

UserServices.logoutUser = async () => {
    try {
        const response = await fetch(URI + '/users/logout', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log(data);
        return response;
    } catch (error) {
        console.log(error);
        return null;
    }
}

UserServices.loginUser = async (authentication) => {
    try {
        const response = await fetch(URI + '/users/login', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(authentication)
        });
        const data = await response.json();
        console.log(data);
        return response;
    } catch (error) {
        console.log(error);
        return null;
    }
}

UserServices.registerUser = async (user) => {
    try {
        const response = await fetch(URI + '/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });

        const data = await response.json();
        return response;

    } catch (err) {
        console.log(err);
        return null;
    }

}


export default UserServices;