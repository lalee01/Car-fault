import './../../css/sb-admin-2.css'
import './../../css/sb-admin-2.min.css'
import './../../vendor/fontawesome-free/css/all.min.css'
import '../../vendor/jquery/jquery.min.js'
import '../../vendor/bootstrap/js/bootstrap.bundle.min.js'
import { useState } from "react";
import axios, { AxiosResponse } from "axios";
import {GoogleLogin , GoogleLogout} from "react-google-login";
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
        const result: AxiosResponse<AuthResponse> = await axios.post("http://localhost:3001/auth", {
          token: res?.tokenId,
        });
        setUser(result.data.user);
        console.log(result)
      } catch (err) {
        console.log(err);
      }
    }

    return(
        
        <body className="bg-gradient-primary">
      {!user && (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-10 col-lg-12 col-md-9">
                        <div className="card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body p-0">
                                <div className="row">
                                    <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                            </div>
                                            <form className="user">
                                                <hr/>
                                                <GoogleLogin clientId="631569155937-29nbo6s1ef26apovtsdjp891pdkjq902.apps.googleusercontent.com" 
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
                                                <div style={{height:'60%'}}></div>
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
                    <GoogleLogout clientId="631569155937-29nbo6s1ef26apovtsdjp891pdkjq902.apps.googleusercontent.com" 
                        onLogoutSuccess={()=>{console.log('Disconnected from website')}}
                        render={renderProps => ( 
                            <button className="btn btn-google btn-user btn-block" 
                                onClick={renderProps.onClick} 
                                disabled={renderProps.disabled}>
                                <i className="fab fa-google fa-fw"></i> Logout
                            </button>
                        )}
                    />
                    {console.log('Belépve')}
                </>
              )} 
        </body>
        
        )
    }
    export default Login;