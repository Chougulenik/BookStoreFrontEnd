import axios from "axios";

const BOOK_STORE_API = 'http://localhost:9090';

class BookStoreService {

    addUsers(user) {
        return axios.post(BOOK_STORE_API+'/register', user);
    }

    loginUser(userLogin) {
        return axios.post(BOOK_STORE_API+'/login', userLogin);
    }

    getBooks() {
        return axios.get(BOOK_STORE_API+'/booksList');
    }
    

    
}

export default new BookStoreService();
