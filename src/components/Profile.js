import '../css/Account.css';
import profilePic from '../profile.png.png';
 function Profile(){
    return(
        
            <div className="container">
                <div className="header"><h2>Account Setting</h2></div>
                <div className="profile"> <div className="profile-img"><img src={profilePic} alt='profie' /></div> <div>Marry doe </div> <div> marriee@gmail.com</div><div className="username"></div></div>
                <div className="details">Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</div>
            </div>
       
    )
 }
 export default Profile;