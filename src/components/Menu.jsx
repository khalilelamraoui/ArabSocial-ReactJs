import profile from '../images/profile.png';

export default function Menu(){
    const h5 = {
        fontFamily: "'Jua', sans-serif"
    }
    const profile_content = {
        marginLeft: "-1rem;"
    }
    return(
        <div class="col gy-5 h-100 nav-menu-wide">
                <div class="sections profile d-flex justify-content-evenly align-items-center p-2 mt-5">
                    <img src={profile} alt="" width={70} height={70} class="img-fluid rounded-circle"/>
                    <div class="profile-content mt-3" style={profile_content}>
                        <h5 class="fw-bold" style={h5}>
                            Khalil Predox<span class="mb-3 fs-6 fw-light"><br/>@khalil_03</span>
                    </h5>
                    </div>
                </div>
                <div class="menu mt-3">
                    <ul class="list-group p-3 text-center fs-5 fw-bold">
                        <a href="#/Home" class="text-decoration-none border-bottom border-2 border-light"><li class="list-group-item border-0 bg-transparent text-white"><i class="fa-solid fa-house"></i> HOME</li></a>
                        <a href="#/Explore" class="text-decoration-none border-bottom border-2 border-light mt-2"><li class="list-group-item bg-transparent text-white border-0"><i class="fa-solid fa-globe"></i> EXPLORE</li></a>
                        <a href="#/Messages" class="text-decoration-none border-bottom border-2 border-light mt-2"><li class="list-group-item bg-transparent text-white border-0"><i class="fa-solid fa-user-group"></i> MESSAGES</li></a>
                        <a href="#/Settings" class="text-decoration-none mt-2"><li class="list-group-item bg-transparent text-white border-0"><i class="fa-solid fa-gear"></i> SETTINGS</li></a>
                    </ul>
                </div>
        </div>
    )
}