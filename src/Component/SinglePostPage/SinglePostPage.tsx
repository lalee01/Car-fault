import {useState,useEffect} from 'react'
import './../../css/sb-admin-2.css'
import './../../css/sb-admin-2.min.css'
import './../../vendor/fontawesome-free/css/all.min.css'
import axios from 'axios'
import {
    BrowserRouter as Router,
    useParams
  } from "react-router-dom";

function Content() {
    const [listPost , setListPost] = useState([])
    const {postid} = useParams()

    console.log(useParams())

    useEffect(()=>{
        axios.get(`${import.meta.VITE_ServerUrl}/post/${postid}`).then((response) =>setListPost(response.data))
        }
      ,[])
      console.log(listPost)
    return (
        <div className='row'>
        {listPost.map((val)=>{
            return (
            <div className="col-lg-13 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 className="m-0 font-weight-bold text-primary">{val.title} {val.manufacturer} {val.model}</h6>
                        <div className="dropdown no-arrow">
                            <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                    aria-labelledby="dropdownMenuLink">
                                <div className="dropdown-header">Dropdown Header:</div>
                                <a className="dropdown-item" href="#">Edit</a>
                                <a className="dropdown-item" href="#">Upload photo</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div>
                </div>                               
                <div className="card-body">
                    <div className="text-center my-4">
                        {val.name.map((pic)=>{
                            return(
                                <img className="mx-1" style={{maxWidth: '30%'}} src={`${import.meta.VITE_ServerUrl}/${pic}`}></img>
                            )
                        })}
                        {val.link.map((link)=>(
                            <div>
                                <iframe className="text-center my-4" width="800" height="400" src={`https://www.youtube.com/embed/${link}`}/>
                            </div>
                        ))}
                    </div>
                    <h2 style={{textAlign:'center'}}>
                        Description:
                    </h2>
                    <h5>
                        {val.description}
                    </h5>
                </div>      
                </div>
            </div>
            )
        })}
       </div>

    );
}
  
  export default Content;