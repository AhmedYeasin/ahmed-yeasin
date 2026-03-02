import React from 'react';
import profile from '../../assets/ahmed.jpeg.jpg'
const Home = () => {
  return (
    <div className="hero min-h-screen" id="home">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">
       
        <img 
          src={profile} 
          className="max-w-sm rounded-full shadow-2xl border-4 border-primary" 
          alt="My Profile"
        />
        
        <div>
          <h1 className="text-5xl font-bold">Hello, this is <span className="text-primary">Ahmed Yeasin Ramadan</span></h1>
          <p className="py-6 text-xl">
            I am a <span className="badge badge-primary p-3">React Developer</span> 
            a passionate Web Developer specializing in building beautiful, interactive user interfaces with React.
          </p>
          <div className="flex gap-4">
            <button className="btn btn-primary" href='#projects'>My Projects</button>
            <button className="btn btn-outline btn-secondary">My CV</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;