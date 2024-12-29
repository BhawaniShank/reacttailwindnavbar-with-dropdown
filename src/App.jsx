import React from "react";
import Button from "./components/Button";
import Navbar from "./components/Navbar/Navbar";
import BookingForm from "./components/Hero/BookingForm.jsx";
import Footer from "./components/Hero/Footer.jsx";
import Page2  from "./components/Hero/Page2.jsx";
import CuratedExperience from "./components/Hero/CuratedExperience.jsx";
// import Grid from "./components/Hero/Grid.jsx";
// import Hero from "./components/Hero/Hero"
const App = () => {
  return (
    // <section
    //   className="h-screen bg-Hero bg-cover
    //   font-[Poppins] md:bg-top bg-center"
    // >
    //   <Navbar />
    //   <div className="flex flex-col justify-center text-center items-center h-3/4">
    //     {/* <h2 className="text-white text-2xl font-medium ">Fashion Tips</h2>
    //     <h1 className="md:text-5xl text-3xl text-white font-semibold py-5">
    //       Items every woman should have
    //     </h1>
    //     <div className="text-xl">
    //       <Button /> */}
    //     </div>
    //   {/* </div> */}
    // </section>

<div className="relative w-[100%] max-w-[120em] mx-auto h-full z-0 ">
<Navbar />
<div className="relative">
<video
    className="w-full h-[30em]  md:h-[40em] lg:h-[50em] object-cover group "
    autoPlay
    loop
    muted
    playsInline
>
    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
   
</video>

<div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col justify-center items-center text-center gap-5 text-white px-4">
    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
        Welcome to <span className="italic">India's</span> first luxury<br /> heritage polo resort
    </h1>
    <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
        125 luxurious rooms amid a 20-acre private estate ideal for milestone celebrations and a unique<br /> curated experience.
    </p>
    
</div>
<BookingForm />
</div>

{/* <Hero/> */}

<Page2/>
{/* <Grid/> */}
<CuratedExperience/>
<Footer/>
</div>
  );
};

export default App;
