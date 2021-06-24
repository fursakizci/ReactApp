import axios from "axios"

export default class ProductService{
    getProducts(){
        return axios.get("https://jsonplaceholder.typicode.com/posts")
    }

    getProductById(id){
        return axios.get("https://jsonplaceholder.typicode.com/posts/"+id)
    }
}