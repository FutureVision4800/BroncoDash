
export const userService = {
    login,
    logout,
    register,
    getAll,
    getByID,
    update,
    delete: _delete
};

function login(username, password){

    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            username: username, 
            password: password
          })
    };

    return fetch('/api/user/login', requestOptions)
        .then(res => res.json()
        .then(res => {
            console.log(res.data);
            if(res.status === 200){
                console('Succesful Login');
                localStorage.setItem('user', JSON.stringify(res.data));
            }

            return data;
        }))
        .catch(err => console.log("Error: ", err));

}

function logout(){
    //remove user from local storage
    localStorage.removeItem('user');
}

function register(user){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch('/users/getUserInfo', requestOptions)
    .then(res => res.json())
    .catch(err => console.log(err));
}

