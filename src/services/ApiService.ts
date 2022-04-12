import axios from 'axios'
import { AxiosResponse, AxiosRequestConfig } from "axios"

class ApiService {
    /**
    * @description send the GET HTTP request
    * @param resource: string
    * @param params: AxiosRequestConfig
    * @returns Promise<AxiosResponse>
    */
    public static getAllPokemon(
        resource: string,
        params: AxiosRequestConfig
    ): Promise<AxiosResponse> {
        return axios.get(resource, params);
    }
}

export default ApiService;