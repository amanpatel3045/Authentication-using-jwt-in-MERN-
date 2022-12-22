import React, { useEffect } from "react";
import {useNavigate} from 'react-router-dom';
const About = () => {
const navigate=useNavigate();
  const callAboutPage=async()=>{
try{
const res=await fetch('/about',{
  method:"GET",
  headers:{
    Accept:"application/json",
    "Content-Type":"application/json"
  },
  //cookie or token k liye credentials use krna is must
  credentials:"include"
});
//auth.js (server) file me jo res.send(req.rootUser); hai wha se res send krke
//data variable me store kr liya
//res me user ka sara data hai jo database me store hai
const data=await res.json();
console.log(data);

if(!res.status===200){
  const error = new Error(res.error);
  throw error;
}

} catch(err){
  console.log(err);
  //agr user authorized nhi hai toh user ko login pe reedirect kr denge
  navigate('/login');
}
  }

useEffect(()=>{
callAboutPage();
},[]);


  return (
    <>
     <form  method="GET">
    <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="image"/>
    <h5>Aman</h5>
    <h6>Full Stack Web Developer</h6>
    <p>RANKINGS:<span>1/10
      </span></p>
<ul>
  <li>
    <a id="home-tab" data-toggle="tab" href="#home" role="tab">About</a>
  </li>
  <li>
  <a id="profile-tab" data-toggle="tab" href="#home" role="tab">Timeline</a>
  </li>
</ul>
<div className="col-md-2">
<input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit-Profile" />
</div>
<div>
  <p>WORK LINK</p>
  <a href="https://github.com/amanpatel3045" alt="LinkedIn-Profile" target="_blank">Github</a>
  <br/>
  <a href="https://www.linkedin.com/in/aman-kumar-patel-540a47169/" alt="LinkedIn-Profile" target="_blank">LinkedIn</a>
  <br/>
  <a href="https://sde-amanpatel.netlify.app/" alt="LinkedIn-Profile" target="_blank">Portfolio</a>
  <br/>
  <a href="https://github.com/amanpatel3045" alt="LinkedIn-Profile" target="_blank">Github</a>
  <br/>
  <a href="https://github.com/amanpatel3045" alt="LinkedIn-Profile" target="_blank">Github</a>
  <br/>
  <a href="https://github.com/amanpatel3045" alt="LinkedIn-Profile" target="_blank">Github</a>
  <br/>
  <a href="https://github.com/amanpatel3045" alt="LinkedIn-Profile" target="_blank">Github</a>
 
</div>
<div className="about-details">
  <div id="home">
    <label>User ID</label>
    <p>12345678</p>
    <label>Name</label>
    <p>Aman</p>
    <label>User ID</label>
    <p>12345678</p>
    <label>User ID</label>
    <p>12345678</p>
    <label>User ID</label>
    <p>12345678</p>
    <label>User ID</label>
    <p>12345678</p>
  </div>

</div>
     </form>
    </>
  )
};

export default About;