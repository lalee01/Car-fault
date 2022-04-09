import './../../App.css'
import './../../css/sb-admin-2.css'
import './../../css/sb-admin-2.min.css'
import Sidebar from './../Sidebar/Sidebar'
import Content from './../Content/Content'
import Topbar from './../Topbar/Topbar'
import SinglePostPage from './../SinglePostPage/SinglePostPage'
import Postpage from '../Postpage/Postpage'
import ErrorPage from '../ErrorPage/ErrorPage'
import { useParams } from 'react-router'
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
  } from "react-router-dom"

    function Homepage() {
    const selectedPostID = useParams()
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
                                </div>
                                <Routes>
                                    <Route path="/"element={<Content />}/>
                                    <Route path="/manufacturer/:manufacturer" element={<SinglePostPage />}/>
                                    <Route path="/post/:postid" element={<SinglePostPage />}/>
                                    <Route path="/upload" element={<Postpage />}/>
                                    <Route path="*" element={<ErrorPage />}/>
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