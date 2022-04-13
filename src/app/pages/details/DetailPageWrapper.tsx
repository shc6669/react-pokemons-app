import React, {FC} from 'react'
import {PageTitle} from '../../../_metronic/layout/core'
import {DetailPage} from './DetailPage'

const DetailPageWrapper: FC = () => {
  return (
    <>
      <PageTitle breadcrumbs={[]}>Detail Page Pokemon</PageTitle>
      <DetailPage />
    </>
  )
}

export default DetailPageWrapper
