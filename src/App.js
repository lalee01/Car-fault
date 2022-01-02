import './App.css';
import './css/sb-admin-2.css'
import './css/sb-admin-2.min.css'
import Sidebar from './Component/Sidebar/Sidebar'
import Content from './Component/Content/Content'
import Topbar from './Component/Topbar/'

function App() {

  return (
    <div>
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
    </div>

  );
}

export default App;
