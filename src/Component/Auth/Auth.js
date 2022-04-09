import { useState , useEffect } from 'react'
import { GoogleLogin } from 'react-google-login'
import Homepage from '../Homepage/Homepage.js';
import Login from '../Login/Login.tsx'

function Auth() {
    const [isItlogged , setIsItLogged] = useState(false)
    const [googleResponse , setGoogleResponse] = useState()

    return(
        <div>
            <GoogleLogin clientId={process.env.REACT_APP_ClientID} onSuccess={setGoogleResponse}
            isSignedIn={true} style={{display:'block'}}
            render={()=> <div/>}
            />
            {isItlogged ? <Homepage /> : ''}
            {!isItlogged ? <Login /> : ''}                  
        </div>
    )
}

export default Auth;