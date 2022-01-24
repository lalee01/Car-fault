import { useState } from 'react'
import './../../App.css'
import './../../css/sb-admin-2.css'
import './../../css/sb-admin-2.min.css'
import Sidebar from './../Sidebar/Sidebar'
import Content from './../Content/Content'
import Topbar from './../Topbar/Topbar'
import SinglePostPage from './../SinglePostPage/SinglePostPage'
import YoutubePost from '../YoutubePost/YoutubePost'
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom"

    function Homepage() {
    const [selectedPost, setSelectedPost] = useState("")
    console.log(selectedPost)
    return (
      <BrowserRouter>
    <div>
        <body id="page-top">
            <div id="wrapper">
            <Sidebar/>
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <Topbar/>
                        <div className="container-fluid">
                            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 className="h3 mb-0 text-gray-800">Homepage</h1>
                            </div>
                            <Routes>
                                <Route path="/"element={<Content setSelectedPost={setSelectedPost}/>}/>
                                <Route path="/post" element={<SinglePostPage selectedPost={selectedPost}/>}/>
                                <Route path="/yt" element={<YoutubePost/>}/>
                            </Routes>                               
                        </div> 
                    </div> 
                    <footer className="sticky-footer bg-white">
                        <div className="container my-auto"> 
                            <div className="copyright text-center my-auto">
                                <span>Copyright &copy; Your Website 2021</span>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </body>
    </div>
      </BrowserRouter>
    )
}

export default Homepage
