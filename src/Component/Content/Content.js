import {useState,useEffect} from 'react'
import './../../css/sb-admin-2.css'
import './../../css/sb-admin-2.min.css'
import './../../vendor/fontawesome-free/css/all.min.css'
import axios from 'axios'
import { useParams } from 'react-router'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";

function Content() {

    const [postCount , setpostCount] = useState([])

    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_ServerUrl}/counter`).then((response) =>setpostCount(response.data))
        }
      ,[])

    return (
        <div>  
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h1 className="m-0 font-weight-bold text-primary text-center">Welcome</h1>
                </div>
                <h1 className='mt-3 text-center'>We have {postCount} post on the site</h1>
                <div className="card-body">
                    <div className="text-center">
                    </div>
                </div>
            </div>    
        </div>
    );
}
  
  export default Content;