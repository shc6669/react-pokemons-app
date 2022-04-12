import React from 'react'
import ReactDOM from 'react-dom'
// Redux
// https://github.com/rt2zz/redux-persist
import {PersistGate} from 'redux-persist/integration/react'
import {Provider} from 'react-redux'
import * as _redux from './setup'
import store, {persistor} from './setup/redux/Store'
// Axios
import axios from 'axios'
import {Chart, registerables} from 'chart.js'
import {QueryClient, QueryClientProvider} from 'react-query'

// Apps
import {MetronicI18nProvider} from './_metronic/i18n/Metronici18n'
import './_metronic/assets/sass/style.scss'
import './_metronic/assets/sass/style.react.scss'
import {AppRoutes} from './app/routing/AppRoutes'

_redux.setupAxios(axios, store)

Chart.register(...registerables)

const queryClient = new QueryClient()

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <MetronicI18nProvider>
      <Provider store={store}>
        {/* Asynchronously persist redux stores and show `SplashScreen` while it's loading. */}
        <PersistGate persistor={persistor} loading={<div>Loading...</div>}>
          <AppRoutes />
        </PersistGate>
      </Provider>
    </MetronicI18nProvider>
  </QueryClientProvider>,

  document.getElementById('root')
)
