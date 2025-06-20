import Nav from './Nav';

const Header =()=> {

    return(
    <header className="header" id="header">
            <div className="container mb-3">
                <div className="row">
                    <div className="col">
                        <Nav />
                        <div className="banner-image d-flex justify-content-center">
                            <img src="/readingrainbow.jpeg" alt="placeholder img" className=" top-img img-fluid image w-75 h-50" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header