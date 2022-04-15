import {useState,useEffect} from 'react'
import './../../css/sb-admin-2.css'
import './../../css/sb-admin-2.min.css'
import './../../vendor/fontawesome-free/css/all.min.css'
import axios from 'axios'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";

function SelectedByManufacturer() {
    const [listPost , setListPost] = useState([])
    const {manufacturer} = useParams()

    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_ServerUrl}/manufacturer/${manufacturer}`).then((response) =>setListPost(response.data))
        }
      ,[])

      const errorMsg = () =>listPost.length >1 ? "" : "Sorry! We don't have any post for this manufacturer."

    return (
        <div className='row'><h1>{errorMsg()}</h1>
        {listPost.map((val,key)=>{
            return (
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">{key+1} {val.title} {val.manufacturer} {val.model} </h6>
                    </div>
                    <div className="card-body">
                          <div className="text-center">
                        <img style={{maxWidth: '30%'}}src={`${process.env.REACT_APP_ServerUrl}/${val.name[0]}`}></img>
                        </div>
                        <p>{val.description.substr( 0 , 32 )}...
                        </p>
                        <Link to={`/post/${val.postid}`}><div id={val.postid} className="btn btn-light btn-icon-split">
                            <span className="icon text-white-50 noClick ">
                                <i className="fas fa-arrow-right noClick"></i>
                            </span>
                            <span className="text noClick">Read More</span>
                        </div></Link>
                    </div>
                </div>
            </div>
            )
        })} 
        </div>
    );
}
  
  export default SelectedByManufacturer;