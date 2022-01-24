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
  } from "react-router-dom";

function Content({setSelectedPost}) {

    const [listPost , setListPost] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:3001/getposts").then((response) =>setListPost(response.data))
        //axios.get("http://localhost:3001/getyt").then((response) =>setListPost(response.data))
        }
      ,[])
    
    const postSelectorHandler=(event)=>{
        setSelectedPost(event.target.id)
    } 
    

    return (
        <div className='row'> 
        {listPost.map((val)=>{
            return (
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">{val.title} {val.manufacturer} {val.model} </h6>
                    </div>
                    <div className="card-body">
                          <div className="text-center">
                        <img style={{maxWidth: '30%'}}src={`//localhost:3001/${val.name[0]}`}></img>
                        </div>
                        <p>{val.description}
                        </p>
                        <Link to="/post"><div id={val.postid} className="btn btn-light btn-icon-split"onClick={postSelectorHandler}>
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
  
  export default Content;