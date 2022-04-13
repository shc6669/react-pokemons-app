import React, {useEffect} from 'react'
import {Outlet} from 'react-router-dom'
import {AsideDefault} from './components/aside/AsideDefault'
import {Footer} from './components/Footer'
import {HeaderWrapper} from './components/header/HeaderWrapper'
import {Toolbar} from './components/toolbar/Toolbar'
import {ScrollTop} from './components/ScrollTop'
import {Content} from './components/Content'
import {PageDataProvider, useLayout} from './core'
import {useLocation} from 'react-router-dom'
import {MenuComponent} from '../../_metronic/assets/ts/components'
import clsx from 'clsx'
import {Main} from '../partials' 

const MasterLayout: React.FC = ({children}) => {
  const {classes} = useLayout()

  const location = useLocation()
  useEffect(() => {
    setTimeout(() => {
      MenuComponent.reinitialization()
    }, 500)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      MenuComponent.reinitialization()
    }, 500)
  }, [location.key])

  return (
    <PageDataProvider>
      <div className='page d-flex flex-row flex-column-fluid'>
        <div className='wrapper d-flex flex-column flex-row-fluid' id='kt_wrapper'>
          <HeaderWrapper />

          <div id='kt_content' className='content d-flex flex-column flex-column-fluid'>
            <Toolbar />
            <div
              className={clsx(
                'd-flex flex-column-fluid align-items-start',
                classes.contentContainer.join(' ')
              )}
              id='kt_post'
            >
              <AsideDefault />
                <Content>
                    <Outlet />
                </Content>
            </div>
          </div>
          <Footer />
        </div>
      </div>

      {/* begin:: Modals */}
      <Main />
      {/* end:: Modals */}
      <ScrollTop />
    </PageDataProvider>
  )
}

export {MasterLayout}
