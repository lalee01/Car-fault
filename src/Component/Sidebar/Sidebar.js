import react , {useState} from 'react'
import './../../css/sb-admin-2.css'
import './../../css/sb-admin-2.min.css'
import './../../vendor/fontawesome-free/css/all.min.css'
import './../../vendor/jquery/jquery.min.js'
import './../../vendor/bootstrap/js/bootstrap.bundle.min.js'

function Sidebar() {

    const [select,setSelect] = useState("")

    const onMouseSelect = (e) =>{setSelect(e.target.id)}
    console.log(select)

    return (
     <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
            <div className="sidebar-brand-icon rotate-n-15">
                <i className="fas fa-laugh-wink"></i>
            </div>
            <div className="sidebar-brand-text mx-3">Title<sup></sup></div>
        </a>
        <hr className="sidebar-divider my-0"/>
        <li className="nav-item active">
            <a className="nav-link" href="/">
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Homepage</span>
            </a>
        </li>
        <hr className="sidebar-divider"/>
        <div className="sidebar-heading">
            Interface
        </div>
        <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
            aria-expanded="true" aria-controls="collapseTwo">
            <i className="fas fa-fw fa-cog"></i>
            <span>Manufacturer</span>
            </a>
            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                <div className="bg-white py-2 collapse-inner rounded" >
                    <a className="collapse-item" href="/manufacturer/audi" id="audi" onMouseEnter={onMouseSelect} >Audi</a>
                    <a className="collapse-item" href="/manufacturer/bmw" id="bmw" onMouseEnter={onMouseSelect}>BMW</a>
                    <a className="collapse-item" href="/manufacturer/citroen" id="citroen" onMouseEnter={onMouseSelect}>Citroen</a>
                    <a className="collapse-item" href="/manufacturer/fiat" id="fiat" onMouseEnter={onMouseSelect}>Fiat</a>
                    <a className="collapse-item" href="/manufacturer/ford" id="ford" onMouseEnter={onMouseSelect}>Ford</a>
                    <a className="collapse-item" href="/manufacturer/mazda" id="mazda" onMouseEnter={onMouseSelect}>Mazda</a>
                    <a className="collapse-item" href="/manufacturer/mercedes" id="mercedes" onMouseEnter={onMouseSelect}>Mercedes</a>
                    <a className="collapse-item" href="/manufacturer/opel" id="opel" onMouseEnter={onMouseSelect}>Opel</a>
                    <a className="collapse-item" href="/manufacturer/peugeot" id="peugeot" onMouseEnter={onMouseSelect}>Peugeot</a>
                    <a className="collapse-item" href="/manufacturer/renault" id="renault" onMouseEnter={onMouseSelect}>Renault</a>
                    <a className="collapse-item" href="/manufacturer/seat" id="seat" onMouseEnter={onMouseSelect}>Seat</a>
                    <a className="collapse-item" href="/manufacturer/vw" id="vw" onMouseEnter={onMouseSelect}>VW</a>
                </div>
            </div>
        </li>
        <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                aria-expanded="true" aria-controls="collapseUtilities">
                <i className="fas fa-fw fa-wrench"></i>
                <span>Upload</span>
            </a>
            <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar">
                <div className="bg-white py-2 collapse-inner rounded">
                    <a className="collapse-item" href="/upload">Upload post</a>
                    <a className="collapse-item" href="/diy">DIY solution</a>
                    <a className="collapse-item" href="/dtc">Fault codes and test </a>
                    <a className="collapse-item" href="/p">Programming</a>
                </div>
            </div>
        </li>
        <hr className="sidebar-divider"/>
        <div className="sidebar-heading">
            Test
        </div>
        <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                aria-expanded="true" aria-controls="collapsePages">
                <i className="fas fa-fw fa-folder"></i>
                <span>Soon</span>
            </a>
            <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                <div className="bg-white py-2 collapse-inner rounded">
                    <h6 className="collapse-header">1</h6>
                    <a className="collapse-item" href="/">2</a>
                    <a className="collapse-item" href="/">3</a>
                    <a className="collapse-item" href="/">4</a>
                    <div className="collapse-divider"></div>
                    <h6 className="collapse-header">Other Pages:</h6>
                    <a className="collapse-item" href="/">1</a>
                    <a className="collapse-item" href="/">2</a>
                </div>
            </div>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="/">
                <i className="fas fa-fw fa-chart-area"></i>
                <span>Soon</span>
            </a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="/">
                <i className="fas fa-fw fa-table"></i>
                    <span>Soon</span>
            </a>
        </li>
        <hr className="sidebar-divider d-none d-md-block"/>
    <div className="text-center d-none d-md-inline">
    </div>
</ul>
    );
  }
  
  export default Sidebar;