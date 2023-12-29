 

export default function Navbar(){
    return ( 
        <header className="container-fluid p-3 bg-login border-bottom">
            <div className="row">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 me-auto text-decoration-none">
                        <img src={process.env.PUBLIC_URL + '/img/brokersground-logo.png'} alt="Brokers Ground Logo" height="40px"/>
                    </a>

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="./" className="nav-link px-2">Buy</a></li>
                        <li><a href="./" className="nav-link px-2">Rent</a></li>
                        <li><a href="./" className="nav-link px-2">Resources</a></li>
                        <li><a href="./" className="nav-link px-2">Gallery</a></li>
                        <li><a href="./" className="nav-link px-2">Videos</a></li>
                    </ul>

                    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                        <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
                    </form>

                    <a  href="./login" className="btn btn-sm mx-2">Login/Register</a>
                     <div className="dropdown text-end">
                        <a href="./" className="d-block text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle" />
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="./">Profile</a></li>   
                            <li><a className="dropdown-item" href="./">Inbox</a></li>
                            <li><a className="dropdown-item" href="./">Listings</a></li> 
                            <li><a className="dropdown-item" href="./">Settings</a></li> 
                            <li><a className="dropdown-item" href="./logout">Logout</a></li> 
                        </ul>
                    </div>
                    
                    <button className="btn btn-theme btn-sm mx-2">List your Property</button>
                </div>
            </div>
        </header>
  )
}