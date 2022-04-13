import axios from 'axios'
import { AxiosResponse } from "axios"

class ApiService {
    /**
    * @description set the default HTTP request headers
    */
    public static setHeader(): void {
        axios.defaults.headers.common["Accept"] = "application/json";
        axios.defaults.headers.common["Content-Type"] = "application/json";
      }

    /**
    * @description send the GET HTTP request
    * @param resource: string
    * @param params: AxiosRequestConfig
    * @returns Promise<AxiosResponse>
    */
    public static getAllPokemon(
        resource: string
    ): Promise<AxiosResponse> {
        return axios.get(resource);
    }
}

export default ApiService;