import React from 'react';
import '../css/HomePage.css';
import {  Link ,Outlet } from "react-router-dom";


function HomePage() {
//   return (
    
//   );
return (<> 
 {/* <h1>Home</h1> */}
 <div className="container" style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h1>Welcome to PopX</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      <nav>
       {/* <NavLink to="/" activeClassName="active">Home</NavLink> */}
      <button className="create-account"><Link to="/signUp">Create Account</Link></button>
      <button className="login">Already Registered? <Link to="/login">Login</Link></button>
      </nav>
    </div>;
<Outlet/>
</> )


}

export default HomePage