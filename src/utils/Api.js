const onResponse = (response) => {
    return response.ok ? response.json() : Promise.reject(`Ошибка: ${response.status}`);
}

// const onError = (err) => {
//     alert("Что-то пошло не так!");
// }
class Api {
    constructor({ baseUrl, token, headers }) {
        this._baseUrl = baseUrl;
        this._token = `Bearer ${token}`;
        this.headers = headers;
    }
    //ПОСТЫ
    // получение всех постов-------------------------------------------------
    getAllPosts() {
        return fetch(`${this._baseUrl}/posts`, {
            headers: this.headers,
        }).then(onResponse)
            // .catch(onError)
    }

    //получение всех пользователей-------------------------------------------
    getAllUsers() {
        return fetch(`${this._baseUrl}/users`, {
            headers: this.headers,
        }).then(onResponse)
            // .catch(onError)
    }

    // получение информации о пользователе по токену в заголовках
    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this.headers,
        }).then(onResponse)
            // .catch(onError)
    } 
    
    // установка/снятие лайка
    changeLikeStatus(postId, isLike) {
        return fetch(`${this._baseUrl}/posts/likes/${postId}`, {
            method: isLike ? "DELETE" : "PUT",
            headers: this.headers,
        }).then(onResponse)
    }

    // удаление поста по ID
    deletePostById(postId) {
        return fetch(`${this._baseUrl}/posts/${postId}`, {
            method: "DELETE",
            headers: this.headers,
        }).then(onResponse)
    
    }
}


const config = {
    baseUrl: "https://api.react-learning.ru",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjJiNmZmYzA5YjEyZjgwZjRjMTBiZDMiLCJpYXQiOjE2NDcwMTM4ODgsImV4cCI6MTY3ODU0OTg4OH0.p7Do0zbSL9XjfLic1NkjmBGSGA6uQl4WKB_wW30bBvA",
    headers: {
        authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjJiNmZmYzA5YjEyZjgwZjRjMTBiZDMiLCJpYXQiOjE2NDcwMTM4ODgsImV4cCI6MTY3ODU0OTg4OH0.p7Do0zbSL9XjfLic1NkjmBGSGA6uQl4WKB_wW30bBvA',
        'Content-Type': 'application/json'
    }
}

const api = new Api(config);
export default api;