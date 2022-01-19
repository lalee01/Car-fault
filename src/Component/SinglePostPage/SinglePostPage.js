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

function Content({selectedPost}) {
    const [listPost , setListPost] = useState([])

    useEffect(()=>{
        axios.get(`http://localhost:3001/post/${selectedPost}`).then((response) =>setListPost(response.data))
        }
      ,[])
    return (
        <div className='row'>
        {listPost.map((val)=>{
            return (
            <div class="col-lg-13 mb-4">
                  <div class="card shadow mb-4">
                    <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 class="m-0 font-weight-bold text-primary">{val.title} {val.manufacturer} {val.model}</h6>
                        <div class="dropdown no-arrow">
                            <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                    aria-labelledby="dropdownMenuLink">
                                <div class="dropdown-header">Dropdown Header:</div>
                                <a class="dropdown-item" href="#">Edit</a>
                                <a class="dropdown-item" href="#">Upload photo</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>
                </div>
                                
                <div class="card-body">
                <div class="text-center">
                    {val.name.map((key)=>{
                        return(
                            <img style={{maxWidth: '30%'}} src={`//localhost:3001/${key}`}></img>
                        )
                    })}
                        </div><br></br>
                                    Dropdown menus can be placed in the card header in order to extend the functionality
                                    of a basic card. In this dropdown card example, the Font Awesome vertical ellipsis
                                    icon in the card header can be clicked on in order to toggle a dropdown menu.
                </div>
                            
                </div>
            </div>
            )
        })}
        </div>

    );
}
  
  export default Content;