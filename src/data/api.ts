import axios from "axios"
import { BookDTO } from "../domain/entities";


export const url = 'http://192.168.1.193:8082/api/book'

export const getBooks =async () => {
    const response = axios.get<BookDTO[]>(url)
    console.log(response);
    return response
}