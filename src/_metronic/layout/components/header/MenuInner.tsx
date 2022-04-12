import {MenuItem} from './MenuItem'
import {useIntl} from 'react-intl'

export function MenuInner() {
  const intl = useIntl()
  return (
    <>
      <MenuItem title={intl.formatMessage({id: 'MENU.DASHBOARD'})} to='/dashboard' />
      {/* <MenuItem title='Dashboard' to='/dashboard' /> */}
    </>
  )
}