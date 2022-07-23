import React from 'react'
import ReactDOM from 'react-dom/client'

import { Hello } from './Hello.jsx'

export function start(root = document.getElementById('app'), name = 'Jenny') {
  console.log('[LIBRARY1] Instantiating application')
  const app = ReactDOM.createRoot(root)
  app.render(React.createElement(Hello, { name }))
  console.log('[LIBRARY1] app =', app)

  return app
}
