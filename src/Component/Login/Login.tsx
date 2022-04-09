import { useState } from 'react'
import axios, { AxiosResponse } from "axios";
import {GoogleLogin} from "react-google-login";
import Homepage from '../Homepage/Homepage'

interface AuthResponse {
    token: string;
    user: User;
  }
  
  interface User {
    _id: string;
    name: string;
    email: string;
    avatar: string;
  }

 
  
function Login() {

    const [user, setUser] = useState<User | null>(null);
    const onSuccess = async (res: any) => {
      try {
        const result: AxiosResponse<AuthResponse> = await axios.post(`${import.meta.env.VITE_ServerUrl}/auth`, {
          token: res?.tokenId,
        });
        setUser(result.data.user);
      } catch (err) {
        console.log(err);
      }
    }
    
    return(
        <body className="bg-gradient-primary" style={{minHeight:'100vh'}}>
            {!user && (
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-10 col-lg-12 col-md-9">
                            <div className="card o-hidden border-0 shadow-lg my-5">
                                <div className="card-body p-0">
                                    <div className="row" style={{minHeight:'85vh'}}>  
                                        <div className="col-lg-6 d-none d-lg-block bg-login-image" />  
                                        <div className="col-lg-6">  
                                            <div className="p-5">
                                                <div className="text-center">
                                                    <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                                </div>
                                                <form className="user">
                                                    <hr/>
                                                    <GoogleLogin clientId={import.meta.env.VITE_ClientID} 
                                                        onSuccess={onSuccess}
                                                        isSignedIn={true}
                                                        render={renderProps => (
                                                            <button className="btn btn-google btn-user btn-block" 
                                                                onClick={renderProps.onClick} 
                                                                disabled={renderProps.disabled}>
                                                            <i className="fab fa-google fa-fw"></i> Login with Google 
                                                        </button>
                                                    )}/>
                                                    <a href="index.html" className="btn btn-facebook btn-user btn-block">
                                                        <i className="fab fa-facebook-f fa-fw"></i> Login with Facebook Soon!!!
                                                    </a>
                                                    <div style={{height:'auto'}} />
                                                </form>
                                                <hr/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {user && (
                <> 
                    <Homepage />
                </>
            )} 
        </body>
    )
}
export default Login;