import { useState , useEffect } from 'react'
import { GoogleLogin } from 'react-google-login'
import Homepage from '../Homepage/Homepage.js';
import Login from '../Login/Login.tsx'


function Auth() {
    const [isItlogged , setIsItLogged] = useState()
    const [googleResponse , setGoogleResponse] = useState({accessToken:''})
    
    useEffect(() => {
        const timer = setTimeout(() => {
            // if(googleResponse.accessToken.length > 100){
            //     setIsItLogged(false)
            // }else{
            //     setIsItLogged(false)
            // }
            googleResponse.accessToken.length > 100 ? setIsItLogged(true) : setIsItLogged(false)
            console.log(googleResponse.accessToken)
            console.log(isItlogged)
          console.log('timer')
        }, 1000);
        return () => clearTimeout(timer);
      }, []);
    console.log(isItlogged)
    console.log(googleResponse)

    return(
        <div>
            <GoogleLogin clientId="631569155937-29nbo6s1ef26apovtsdjp891pdkjq902.apps.googleusercontent.com" onSuccess={setGoogleResponse}
            isSignedIn={true} style={{display:'block'}}
            render={()=> <div/>}
            />
                   {isItlogged == true ? <Homepage /> : ''}
                   {isItlogged == false ? <Login /> : ''}

                   
        </div>
    )
}

export default Auth;