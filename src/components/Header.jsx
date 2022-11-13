import profile from '../images/profile.png';

export default function Header(){
    const ArabSocial = {
        color: "white", 
        fontFamily: "'jsMath-cmbx10', sans-serif"
    }
    const Create = {
        fontFamily: "'Jua', sans-serif",
        backgroundColor: "#801655", 
        color: "white",
        border: "2px solid white"
    }
    const Header = {
        margin : "0 auto"
    }

    return(
        <nav className="navbar navbar-expand-lg navbar-light d-md-flex sticky-top">
            <div className="container container-lg-fluid row" style={Header}>
                <a className="navbar-brand fs-3 col-lg-3 col-12 text-center" href="index.html" style={ArabSocial}>ArabSocial</a>
                <form className="d-flex w-md-100 col-lg-6 col-">
                    <input className="form-control me-2 rounded-pill text-center bg-white w-100" type="search" placeholder="Search  for users, posts, groups, pages, messages  ... " aria-label="Search"/>
                </form>
                <div className="col-12 col-lg-3 text-center d-flex justify-content-around align-items-center">
                    <button className="btn rounded rounded-pill h-100 fw-bold fs-5 w-50" type="submit" 
                            style={Create}>
                        Create
                    </button>

                    <button className="btn navbar-brand " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">
                        <img src={profile} alt="" width={60} height={50} className="rounded-circle img-fluid border-2"/>
                    </button>
                    
                    <div className="offcanvas offcanvas-bottom bg-transparent" data-bs-scroll="true" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
                        <div className="offcanvas-body">
                            <div className="nav-menu row">
                                <div className="col-md-1"></div>
                                <div className="menu col-12 col-md-10">
                                    <ul className="list-group text-center fs-6 fw-bold">
                                        <a href="#/Home" className="text-decoration-none border-bottom border-1 border-light"><li className="list-group-item border-0 bg-transparent text-white"><i className="fa-solid fa-house"></i> HOME</li></a>
                                        <a href="#/Explore" className="text-decoration-none border-bottom border-1 border-light mt-1"><li className="list-group-item bg-transparent text-white border-0"><i className="fa-solid fa-globe"></i> EXPLORE</li></a>
                                        <a href="#/Messages" className="text-decoration-none border-bottom border-1 border-light mt-1"><li className="list-group-item bg-transparent text-white border-0"><i className="fa-solid fa-user-group"></i> MESSAGES</li></a>
                                        <a href="#/Settings" className="text-decoration-none"><li className="list-group-item bg-transparent text-white border-0"><i className="fa-solid fa-gear"></i> SETTINGS</li></a>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}