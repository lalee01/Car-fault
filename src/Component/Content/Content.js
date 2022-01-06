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

function Content() {

    const [listPost , setListPost] = useState([])
    const [selectedPost, setSelectedPost] = useState()

    useEffect(()=>{
        axios.get("http://localhost:3001/getposts").then((response) =>setListPost(response.data))
        }
      ,[])
    
    const postSelectorHandler=(event)=>{
        event.prevent.default()
        setSelectedPost(event.target.id)
        console.log(selectedPost)
    } 
    

    return (
    <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Homepage</h1>
        </div>
        <div className='row'>
        {listPost.map((val)=>{
            return (
            <div class="col-lg-6 mb-4">
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">{val.title} {val.manufacturer} {val.model} </h6>
                    </div>
                    <div class="card-body">
                        <div class="text-center">
                        <img style={{maxWidth: '30%'}} src={`//localhost:3001/${val.name[0]}`}></img>
                        </div>
                        <p>{val.description}
                        </p>
                        <Link id={val.postid} rel="nofollow" to={`//localhost:3001/post/${val.postid}`} onClick={postSelectorHandler}>Read More&rarr;
                        </Link>
                    </div>
                </div>
            </div>
            )
        })}
        </div>

    </div>
    );
}
  
  export default Content;