// import React from 'react';
// import AuthProvider  from 'react-auth-kit'
// import RoutesLogin from './plugins/login.routes'

// const App = () => (
//     <AuthProvider authType = {'cookie'}
//                   authName={'_auth'}
//                   cookieDomain={window.location.hostname}
//                   cookieSecure={window.location.protocol === "https:"}>
//         <RoutesLogin />
//     </AuthProvider>
// );

// export default App;

import './index.css'

import RoutesLogin from './plugins/login.routes'


function App(){
  return (
    <>
    <RoutesLogin/>
   
    </>
  )
}

export default App