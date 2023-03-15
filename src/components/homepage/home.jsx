
import React from "react";
import Feed from "../feed/Feed";
import Navbar from "../navbar/navbar";
import Rightbar from "../rightbar/Rightbar";
import Sidebar from "../sidebar/Sidebar";

import "./home.css"

function Home() {

  return (
    <div className="home">
        <Navbar/>
        <div className="homeContainer">
        <Sidebar/>
        <Feed/>
        <Rightbar/>
        </div>
        
    </div>
  );
}

export default Home;
