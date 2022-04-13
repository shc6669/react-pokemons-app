/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {Link, useParams} from 'react-router-dom'
import {KTSVG} from '../../../_metronic/helpers'

const DetailPage: React.FC = () => {
  const {pokemonName} = useParams()

  return (
    <>
        <div className='card card-custom'>
            <div className='card-header card-header-stretch overflow-auto'>
                {/* begin::Actions */}
                <div className='svg-icon svg-icon-3x svg-icon-dark my-5'>
                    <Link to={'/dashboard'} className='text-dark'>
                        <span>
                            <KTSVG path='/media/icons/duotune/arrows/arr063.svg' />
                        </span>
                        <span className="fw-bolder my-1 fs-3">
                            Stok pokemon
                        </span>
                    </Link>
                </div>
                <div className='d-flex align-items-center py-1'>
                    <a
                        href='#'
                        className='btn btn-bg-secondary btn-active-color-primary'
                        data-bs-toggle='modal'
                        data-bs-target='#kt_modal_create_app'
                        id='kt_toolbar_primary_button'
                    >
                        Update Stok
                    </a>
                </div>
                {/* end::Actions */}
            </div>

            {/* begin::Body */}
            <div className='card-body'>
                {/* begin::Title */}
                <div className='card h-100'>
                    <div className='card-body d-flex flex-column p-8'>
                        <div className='text-gray-800 text-hover-primary d-flex flex-column'>
                            <h3 className='fs-1 fw-bolder mb-2'>
                                {pokemonName!.charAt(0).toUpperCase() + pokemonName!.slice(1)}
                            </h3>
                        </div>
                    </div>
                </div>
                {/* end::Title */}
                {/* begin::Table */}
                {/* begin::Header */}
                <div className='card-header border-0 pt-5'>
                    <h3 className='card-title align-items-start flex-column'>
                        <span className='text-muted mt-1 fw-bold fs-5'>
                            Sisa Stok
                        </span>
                        <span className='card-label fw-bold fs-1 mb-1'>
                            10 pcs
                        </span>
                    </h3>
                </div>
                <div className='card-header border-0 pt-5'>
                    <h3 className='card-title align-items-start flex-column'>
                        <span className='card-label fw-bolder fs-2 mb-1'>
                            Riwayat stok
                        </span>
                        <span className='text-muted mt-1 fw-bold fs-5'>
                            Satuan stok dalam pcs
                        </span>
                    </h3>
                </div>
                {/* end::Header */}
                {/* begin::Body */}
                <div className='card-body py-3'>
                    {/* begin::Table container */}
                    <div className='table-responsive'>
                        {/* begin::Table */}
                        <table className='table align-middle gs-0 gy-4'>
                            {/* begin::Table head */}
                            <thead>
                            <tr className='fw-bolder text-muted bg-light'>
                                <th className='ps-4 min-w-125px rounded-start'>
                                    Waktu
                                </th>
                                <th className='min-w-200px'>
                                    Kegiatan
                                </th>
                                <th className='min-w-300px'>
                                    Catatan
                                </th>
                                <th className='min-w-125px text-end'>
                                    Jumlah
                                </th>
                                <th className='min-w-125px text-end rounded-end'>
                                    Stok
                                </th>
                            </tr>
                            </thead>
                            {/* end::Table head */}
                            {/* begin::Table body */}
                            <tbody>
                                <tr>
                                    <td>
                                        <div className='d-flex align-items-center'>
                                            <div className='symbol symbol-50px me-5'>
                                                <span className='text-muted fw-bold text-muted d-block fs-7'>
                                                    2 Apr 2021, 08:00
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                                            Update stok
                                        </a>
                                    </td>
                                    <td>
                                        <span className='text-muted fw-bold text-muted d-block fs-7'>
                                            “Stok awal”
                                        </span>
                                    </td>
                                    <td className='text-end'>
                                        <span className='text-dark fw-bolder d-block mb-1 fs-6'>
                                            +10
                                        </span>
                                    </td>
                                    <td className='text-end'>
                                        <span className='text-muted fw-bold text-muted d-block fs-7'>
                                            10
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className='d-flex align-items-center'>
                                            <div className='symbol symbol-50px me-5'>
                                                <span className='text-muted fw-bold text-muted d-block fs-7'>
                                                    1 Apr 2021, 00:00
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                                            Stok Awal
                                        </a>
                                    </td>
                                    <td>
                                        <span className='text-muted fw-bold text-muted d-block fs-7'>
                                            
                                        </span>
                                    </td>
                                    <td className='text-end'>
                                        <span className='text-dark fw-bolder d-block mb-1 fs-6'>
                                            0
                                        </span>
                                    </td>
                                    <td className='text-end'>
                                        <span className='text-muted fw-bold text-muted d-block fs-7'>
                                            0
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                            {/* end::Table body */}
                        </table>
                        {/* end::Table */}
                    </div>
                    {/* end::Table container */}
                </div>
                {/* begin::Body */}
                {/* end::Table */}
            </div>
            {/* end::Body */}
        </div>
    </>
  )
}

export {DetailPage}
