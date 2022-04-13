/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {KTSVG} from '../../../helpers'
import ApiService from '../../../../services/ApiService'
import { PokemonsData } from '../../../../app/pages/index'

type Props = {
  className: string
}

const TablesPokemons: React.FC<Props> = ({className}) => {
  const API_URL = process.env.REACT_APP_API_URL
  const GET_POKEMONS_URL = `${API_URL}/pokemon?limit=100&offset=`
  const imagePreviewUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/'
  const [pokemons, setPokemons] = useState([])

  const fetchApiPokemons = () => {
    ApiService.setHeader()
    ApiService.getAllPokemon(GET_POKEMONS_URL)
    .then(({ data }) => {
        const pokemons = data;
        const foo: string[] = [];
        pokemons.results.forEach((pokemon: any) => {
            pokemon.id = pokemon.url
                .split("/")
                .filter((part: any) => {
                    return !!part;
                })
                .pop();
            foo.push(pokemon);
        })

        const pokemonsData = pokemons.results
        // console.log(pokemonsData)

        setPokemons(pokemonsData)
    })
    .catch((err: Error) => {
      console.log(err);
    })
  }

  useEffect(() => {
    setTimeout(() => {
      fetchApiPokemons()
    }, 500)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder fs-3 mb-1'>Stok Pokemons</span>
        </h3>
        {/* begin::Search Form */}
        <form className='w-100 position-relative' autoComplete='off'>
          <KTSVG
            path='/media/icons/duotune/general/gen021.svg'
            className='svg-icon-2 svg-icon-lg-1 svg-icon-gray-500 position-absolute top-50 ms-5 translate-middle-y'
          />

          <input
            type='text'
            className='form-control form-control-solid px-15'
            name='search'
            placeholder='Cari Pokemon'
          />
        </form>
        {/* end::Search Form */}
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        {/* begin::Table container */}
        <div className='table-responsive'>
          {/* begin::Table */}
          <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
            {/* begin::Table head */}
            <thead>
              <tr className='fw-bolder text-muted'>
                <th className='w-25px'>
                  <div className='form-check form-check-sm form-check-custom form-check-solid'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value='1'
                      data-kt-check='true'
                      data-kt-check-target='.widget-9-check'
                    />
                  </div>
                </th>
                <th className='min-w-150px'>Nama Pokemon</th>
                <th className='min-w-140px text-end'>Stok</th>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              {pokemons.map((pokemon: PokemonsData, index: number) => {
                return (
                  <tr key={index}>
                    <td>
                      <div className='form-check form-check-sm form-check-custom form-check-solid'>
                        <input className='form-check-input widget-9-check' type='checkbox' value='1' />
                      </div>
                    </td>
                    <td>
                      <div className='d-flex align-items-center'>
                        <div className='symbol symbol-50px me-5'>
                          <img src={imagePreviewUrl + pokemon.id + '.png'} alt={pokemon.name} />
                        </div>
                        <div className='d-flex justify-content-start flex-column'>
                          <Link to={`/pokemon/detail/${pokemon.name}`}
                            className='text-dark fw-bolder text-hover-primary fs-6'
                          >
                            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                          </Link>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className='text-muted text-end fw-bold text-muted d-block fs-7'>
                        10 pcs
                      </span>
                    </td>
                  </tr>
                )
              })}
            </tbody>
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>
        {/* end::Table container */}
      </div>
      {/* begin::Body */}
    </div>
  )
}

export {TablesPokemons}
