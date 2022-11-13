//PROFILES
import profile from '../images/profile.png';
//import profile1 from '../images/profile1.jpeg';
import profile2 from '../images/profile2.png';
//import profile3 from '../images/profile3.png';
//import profile4 from '../images/profile4.png';
import profile5 from '../images/profile5.jpeg';

//POSTS
import post1 from '../images/post1.jfif';
import post2 from '../images/post2.jpg';
import post3 from '../images/post3.jpg';


//RENDERED COMPONENT
export default function Posts(){
    const style = {
        fontFamily: "'K2D Light', sans-serif",
        fontStyle: "italic"
    }
    return(
        <>
        {/* POST 1*/}
        <div class="post post1 d-flex flex-column">
            <a class="profile profile1 d-flex bg-transparent align-items-center justify-content-start gap-3 w-25 p-2" href="mery">
                <img src={profile2} alt="" class="img-fluid rounded-circle bg-transparent" width="50" height="45"/>
                <h5 class="bg-transparent text-white">@mery_vord</h5>
            </a>
            <img src={post2} alt="" class="mt-2"/>
            <div class="reactions p-3 row">
                <a href="/liked" class="col-1"><i class="fa-solid fa-heart fs-4"></i></a>
                <a href="/comment" class="col-1"><i class="fa-solid fa-comment fs-4"></i></a>
                <a href="/share" class="col-1"><i class="fa-solid fa-paper-plane fs-4"></i></a>
                <div class="col-8"></div>
                <a href="/saved" class="col-1"><i class="fa-solid fa-bookmark fs-4"></i></a>
                <span class="col-12 likes gy-2 ">845 Likes</span>
                <span class="col-12 fs-5">Meryem 
                    <span class="fs-6 mt-1" style={style}>&nbsp;Discover with me the Wild nature over ... 
                        <a href="description" style={{textDecoration: "none"}}>more</a> 
                    </span>
                </span>                          
                <a class="col-12" style={{color: "#302842",style}} href="viewComments">View all 53 comments</a>
                <div class="col-8 mt-2">
                    <img src={profile} alt="" width="45" height="75" class="rounded-circle img-fluid"/>&nbsp;
                    <a href="/addComment" style={style} class="add-comment">Add a comment ...</a>
                </div>
            </div>
        </div>
        {/* POST 2*/}
        <div class="post post1 d-flex flex-column mt-2">
            <a class="profile profile1 d-flex bg-transparent align-items-center justify-content-start gap-3 w-25 p-2" href="kali">
                <img src={profile5} alt="" class="rounded-circle bg-transparent" width="50" height="45"/>
                <h5 class="bg-transparent text-white">@mr.kalissan</h5>
            </a>
            <img src={post3} alt="" class="mt-2"/>
            <div class="reactions p-3 row">
                <a href="/liked" class="col-1"><i class="fa-solid fa-heart fs-4"></i></a>
                <a href="/comment" class="col-1"><i class="fa-solid fa-comment fs-4"></i></a>
                <a href="/share" class="col-1"><i class="fa-solid fa-paper-plane fs-4"></i></a>
                <div class="col-8"></div>
                <a href="/saved" class="col-1"><i class="fa-solid fa-bookmark fs-4"></i></a>
                <span class="col-12 likes gy-2 ">1,215 Likes</span>
                <span class="col-12 fs-5">Kalissan <span class="fs-6 mt-1" style={style}>
                    Gerard Pique shocked the world earlier this week when ... 
                    <a href="description" style={{textDecoration: "none"}}>more</a> 
                </span></span>
                
                <a class="col-12" style={{color: "#302842",style}} href="viewComments">View all 128 comments</a>
                <div class="col-8 mt-2">
                    <img src={profile} alt="" width="45" height="75" class="rounded-circle img-fluid"/>&nbsp;
                    <a href="/addComment" style={style} class="add-comment">Add a comment ...</a>
                </div>
            </div>
        </div>
        {/* POST 2*/}
        <div class="post post1 d-flex flex-column mt-2">
            <a class="profile profile1 d-flex bg-transparent align-items-center justify-content-start gap-3 w-25 p-2" href="kali">
                <img src={profile} alt="" class="rounded-circle bg-transparent" width="50" height="45"/>
                <h5 class="bg-transparent text-white">@khalil_03</h5>
            </a>
            <img src={post1} alt="" class="mt-2"/>
            <div class="reactions p-3 row">
                <a href="/liked" class="col-1"><i class="fa-solid fa-heart fs-4"></i></a>
                <a href="/comment" class="col-1"><i class="fa-solid fa-comment fs-4"></i></a>
                <a href="/share" class="col-1"><i class="fa-solid fa-paper-plane fs-4"></i></a>
                <div class="col-8"></div>
                <a href="/saved" class="col-1"><i class="fa-solid fa-bookmark fs-4"></i></a>
                <span class="col-12 likes gy-2 ">1,215 Likes</span>
                <span class="col-12 fs-5">Predox <span class="fs-6 mt-1" style={style}>
                    G2-Esports Wins the final match against ...  
                    <a href="description" style={{textDecoration: "none"}}>more</a> 
                </span></span>
                
                <a class="col-12" style={{color: "#302842",style}} href="viewComments">View all 326 comments</a>
                <div class="col-8 mt-2">
                    <img src={profile} alt="" width="45" height="75" class="rounded-circle img-fluid"/>&nbsp;
                    <a href="/addComment" style={style} class="add-comment">Add a comment ...</a>
                </div>
            </div>
        </div>
        </>
        
    )
        
}
    