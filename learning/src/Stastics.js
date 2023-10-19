import React from "react";
import img1 from "./images/1.jpg";
import img2 from "./images/2.jpg";
import img3 from "./images/3.jpg";
import img4 from "./images/4.jpg";
import img5 from "./images/5.jpg";
import img6 from "./images/6.jpg";



const heroSection = () => {
    return(
        <div className="w-[70%] max-w-[1250px] mx-auto mt-14">
            <div>
            <h1 className="text-lg bg-blue-50 text-blue-500 font-semibold w-44 px-6 py-1 rounded-lg"> Why Choose Us</h1>
            </div>
            <div className="left-0 font-extrabold text-black text-2xl">
                <h1 >
            Make Your Dreams Come True with Learning Routes
            </h1>
            </div>
            <div className="flex flex-row max-w-[1250px] gap-15">
                {/*left part  */}
                <div className="flex flex-col gap-2 max-w-[750px]">
                <div className="mt-7">
                Having over 7 years of experience in the EdTech industry, our seasoned professionals have helped over 30,000 individuals to realise their dreams.
                 We help professionals find the right course based upon their interests and passions.
                 </div>
                 <div className="flex flex-row mt-7">
                    <img src={img1} 
                    width={100}
                    height={100}
                    className="rounded-full"
                    alt="img1"></img>
                    <div className="ml-2">
                    <span className="text-green-500">   
                    Free & Personalised Career Counselling.
                    </span>
                    <p className="mt-3">
                    We realise that every individual has some unique talents and different ambitions. Therefore, we help them find a course that perfectly caters to their needs.
                    </p>
                    </div>

                 </div>
                 <div className="flex flex-row mt-5">
                 <img src={img2} 
                    width={80}
                    height={100}
                    className="rounded-full"
                    alt="img2"></img>
                    <div className="ml-2">
                    <span className="text-green-500">   
                    Career Assistance Post Course Completion
                    </span>
                    <p className="mt-3">
                    We make sure that students are able to secure a bright future by offering career assistance services after course completion.
                    </p>
                    </div>
                    
                 </div>
                </div>
                {/* right part */}
                <div className="relative ml-5">
                    <div className="absolute top-5 left-2 h-[120px] border-2 w-[100px] flex flex-col items-center justify-evenly">
                    <img src={img3} 
                    width={30}
                    height={30}
                    className="rounded-full mb-2"
                    alt="img3"
                    ></img>
                        <h1>273+</h1>
                        <p>Courses</p>
                    </div>
                    
                    
                    <div className="absolute top-10 left-20 h-[120px] border-2 w-[100px] ml-10 flex flex-col items-center justify-evenly">
                    <img src={img4} 
                    width={30}
                    height={30}
                    className="rounded-full mb-2"
                    alt="img4"></img>
                        <h1>293</h1>
                        <p>Counselers</p>
                    </div>
                    <div className="absolute bottom-10 left-2 h-[120px] border-2 w-[100px] flex flex-col items-center justify-evenly">
                    <img src={img5} 
                    width={30}
                    height={30}
                    className="rounded-full mb-2"
                    alt="img5"></img>
                        <h1>6</h1>
                        <p>Offices</p>
                    </div>
                    <div className="absolute bottom-5 left-20 h-[120px] border-2 w-[100px] ml-10 flex flex-col items-center justify-evenly">
                    <img src={img6} 
                    width={30}
                    height={30}
                    className="rounded-full mb-2"
                    alt="img6"></img>
                        <h1>67k+</h1>
                        <p>Students</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default heroSection;