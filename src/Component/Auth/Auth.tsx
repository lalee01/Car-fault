import { useState , useEffect } from 'react'
import { GoogleLogin } from 'react-google-login'
import Homepage from '../Homepage/Homepage';
import Login from '../Login/Login'

function Auth() {
    const [isItlogged , setIsItLogged] = useState(false)
    const [googleResponse , setGoogleResponse] = useState()
console.log(import.meta)
    return(
        <div>
            <GoogleLogin clientId={import.meta.env.VITE_ClientID} onSuccess={setGoogleResponse}
            isSignedIn={true} style={{display:'block'}}
            render={()=> <div/>}
            />
            {isItlogged ? <Homepage /> : ''}
            {!isItlogged ? <Login /> : ''}                  
        </div>
    )
}

export default Auth;