import React, { ReactNode } from 'react'
import ReactDOM from 'react-dom'
// import useActiveWeb3React from './hooks/useActiveWeb3React'
// import { BLOCKED_ADDRESSES } from './config/constants'
// import MulticallUpdater from './state/multicall/updater'
import App from './App'
import Providers from './Providers'

function Updaters() {
  return (
    <>
      
    </>
  )
}

function Blocklist({ children }: { children: ReactNode }) {
  // const { account } = useActiveWeb3React()
  const blocked = false
  if (blocked) {
    return <div>Blocked address</div>
  }
  return <>{children}</>
}

ReactDOM.render(
  <React.StrictMode>
    <Blocklist>
      <Providers>
        <Updaters />
        <App />
      </Providers>
    </Blocklist>
  </React.StrictMode>,
  document.getElementById('root'),
)
