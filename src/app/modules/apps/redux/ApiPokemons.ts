import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL

export const GET_POKEMONS_URL = `${API_URL}/pokemon`

export function getAllPokemon(payload: any) {
    const { urlPage, params } = payload
    return axios.get(urlPage, {params})
}