import React from "react";
const Section=()=>{
    return(
        <>
        <div className="sec-container grid grid-rows-[2fr 1fr] text-white border-hidden overflow-x-hidden w-screen">
            <div className="box1 relative h-[110vh] grid grid-cols-2 grid-rows-2 gap-1">
                <div className="sec-cont-card card1 flex flex-col justify-center space-y-3 ">
                    <h1 className="text-3xl ml-[14rem] mt-[4rem] z-10">Let's get started</h1>
                    <img src={process.env.PUBLIC_URL+"/images/logo2.png"} className="w-[18vw] ml-[15rem] mt-[1rem] z-[10]" alt="not found" />
                </div>
                <div className="sec-cont-card card2  flex justify-center">
                    <div className="sec-content w-[35vw] h-[25vh] mt-[9rem] mr-[9rem]">

                    <h1 className="text-2xl z-10"><b>N</b>urturing <b>M</b>inds, <b>I</b>gniting <b>I</b>nnovation:Our Computer Science Society, where passion means proficiency in the digital realm.</h1>
                    </div>
                </div>
                <div className="sec-cont-card card3  flex flex-col space-y-3">
                    <div className="head h-[10vh]">
                        <h1 className="text-4xl ml-3 z-10">Introductions are in order...</h1>
                    </div>
                    <div className="para h-[50vh] flex flex-col space-y-5 ml-3 ">
                        <p className=" text-2xl z-10">Welcome to <b>Sanganika</b></p>
                        <p className="w-[40vw] text-[1rem] z-10">A dynamic hub for technology enthusiasts, our society thrives on the fusion of creativity, curiosity,and collaboration.Whether you're a seasoned coder, a budding software engineer, or simply intrigued by the ever-evolving world of computing, Sanganika provides a space to connect , learn, and contribute. Join us on a journey of exploration, where we celebrate the boundless possibilities of computer science and faster a supportive network of like-minded individuals.</p>
                    </div>
                </div>
            </div>
            <div className="box2  h-[60vh] grid grid-cols-2 gap-2 ">
                <div className="box2-card1 rounded-2xl flex justify-center ml-3">
                    <img src={process.env.PUBLIC_URL+'/images/mainimg.png'} className="w-[50vw] h-[50vh]" alt="not found" />
                </div>
                <div className="box2-card2 rounded-2xl flex flex-col space-y-5 ml-[1rem] mt-[1rem]">
                    <p className="text-2xl z-10">Here at <b>Sanganika</b></p>
                    <p className="w-[40vw] text-[1rem]">Our realm extends beyond the binary. We offer not just a platform for tech enthusiasts but a vibrant community that engages in a ever-so-fun-filled activities.From exciting excursions to englightening webinars, thrilling competitions to englightening seminars,we believe in balancing the technical with the enjoyable.Sanganika is not just a society; it's a place where passion meets play, and where you'll discover a myriad of experiences beyond the lines of code.Welcome to a community where bytes and bits come to life, and where the passion for technology ignites a shared sense of discovery.</p>
                </div>
            </div>
        </div>
        </>
    );
}
export default Section;