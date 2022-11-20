import profile1 from '../images/profile1.jpeg';
import profile2 from '../images/profile2.png';
import profile3 from '../images/profile3.png';
import profile4 from '../images/profile4.png';
import profile5 from '../images/profile5.jpeg';

export default function Messages(){
    return(
        <div class="col gy-5 messages">
            <div class="sections d-flex justify-content-center mt-5 border-bottom border-2 border-dark">
                <h5 href="#" class="text-decoration-none mt-2 fw-bold"><li class="list-group-item bg-transparent text-white border-0"><i class="fa-solid fa-user-group"></i> MESSAGES
                <span class="position-absolute top-25 start-100 translate-middle badge rounded-pill bg-light text-dark">5 <span class="visually-hidden">unread messages</span></span>
                </li></h5>
            </div>
            <div class="profiles d-flex flex-column p-3 gap-3 align-items-start">
                <a class="profile d-flex bg-transparent align-items-center justify-content-center gap-3" href="elizabeth">
                    <img src={profile1} alt="" class="rounded-circle bg-transparent" width="60" height="56"/>
                    <h5 class="bg-transparent text-white">@elizabeth_sr</h5>
                </a>
                <a class="profile d-flex bg-transparent align-items-center justify-content-center gap-3" href="miguel">
                    <img src={profile4} alt="" class=" rounded-circle bg-transparent" width="60" height="56"/>
                    <h5 class="bg-transparent text-white">@miguel_bi</h5>
                </a>
                <a class="profile d-flex bg-transparent align-items-center justify-content-center gap-3" href="frank">
                    <img src={profile3} alt="" class=" rounded-circle bg-transparent" width="60" height="56"/>
                    <h5 class="bg-transparent text-white">@dr.frank</h5>
                </a>
                <a class="profile d-flex bg-transparent align-items-center justify-content-center gap-3" href="mery">
                    <img src={profile2} alt="" class="rounded-circle bg-transparent" width="60" height="56"/>
                    <h5 class="bg-transparent text-white">@mery_vord</h5>
                </a>
                <a class="profile d-flex bg-transparent align-items-center justify-content-center gap-3" href="kali">
                    <img src={profile5} alt="" class="rounded-circle bg-transparent" width="60" height="56"/>
                    <h5 class="bg-transparent text-white">@mr.kalissan</h5>
                </a>
            </div>
        </div>
    )
}