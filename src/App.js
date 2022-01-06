import './App.css';
import './css/sb-admin-2.css'
import './css/sb-admin-2.min.css'
import Sidebar from './Component/Sidebar/Sidebar'
import Content from './Component/Content/Content'
import Topbar from './Component/Topbar/Topbar'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";


function App() {

  return (
    <div>
        <Router>
        <body id="page-top">
            <div id="wrapper">
            <Sidebar/>
                <div id="content-wrapper" class="d-flex flex-column">
                    <div id="content">
                        <Topbar/>
                        <Content/>
                    </div>
                    <footer class="sticky-footer bg-white">
                        <div class="container my-auto">
                            <div class="copyright text-center my-auto">
                                <span>Copyright &copy; Your Website 2021</span>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </body>
        </Router>
    </div>

  );
}

export default App;
