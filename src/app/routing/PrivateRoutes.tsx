import {lazy} from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import {MasterLayout} from '../../_metronic/layout/MasterLayout'
import {DashboardWrapper} from '../pages/dashboard/DashboardWrapper'

const PrivateRoutes = () => {
  const DetailPageWrapper = lazy(() => import('../pages/details/DetailPageWrapper'))
  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Profile after success login/registartion */}
        <Route path='auth/*' element={<Navigate to='/dashboard' />} />
        {/* Pages */}
        <Route path='dashboard' element={<DashboardWrapper />} />
        <Route path='pokemon/detail/:pokemonName' element={<DetailPageWrapper />} />
        {/* Page Not Found */}
        <Route path='*' element={<Navigate to='/error/404' />} />
      </Route>
    </Routes>
  )
}

export {PrivateRoutes}
