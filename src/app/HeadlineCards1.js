"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./HeadlineCards.module.css";

const HeadlineCards1 = () => {
  const phoneNumber = '+919925879885'; // Replace with the actual WhatsApp number

  const sliderSettings = {
    dots: true,
    infinite: true,
    arrows:false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Adjust the speed (in milliseconds) as needed
  };

  const menuItem = [
    // Your menu items...
    {
      title: "Bhavyaraj Residency, Gauravpath",
      description: "2BHK Flat",
      url:"/bhavyaraj.jpg",
      doc: "https://drive.google.com/file/d/1O78Akl5A-PMbwkL_zlHaKPwMeu-GFchO/view?usp=drive_link",
    },
    {
      title: "Florida, Gauravpath",
      description: "3BHK Flat",
      url:"/florida.jpg",
      doc: "https://drive.google.com/file/d/11M4J2tujegQAWkOdHZ7pTYPVWzvXOde_/view?usp=drive_link",
    },
    
    {
      title:"Orchid Fantasia, Gauravpath",
      description: "2BHK and 3BHK",
      url:"/bhavyaraj.jpg",
      doc: "https://drive.google.com/file/d/1xwrL2Lyfk_n8YTKmzZgTJyhCCbAxFonq/view?usp=drive_link",
    },
   
  ];

  return (
    <>
    <div>
        {/* Your existing content... */}
              <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        img {
          max-width: 25%;
          max-height:15%;
          float: left;
        }
        
       
      `}</style>
        <div className="container">
          <div className="image">
          <Image
        src="/flyingbird-logo.png"
        width={150}
        height={150}
        alt="Loading" />        
              
      
        </div>
        </div>
            
      </div>
      <Slider {...sliderSettings}>
        <div>
          {/* You can add your slider images here */}
          <Image src="/s1.jpg" width={1280} height={720}  alt="Slider Image " />
        </div>
        <div>
          <Image src="/s2.jpg" width={1280} height={720} alt="Slider Image " />
        </div>
        <div>
          <Image src="/s3.jpg" width={1280} height={720} alt="Slider Image " />
        </div>
        <div>
          <Image src="/s4.jpg" width={1280} height={600} alt="Slider Image " />
        </div>
        <div>
          <Image src="/s5.jpg" width={1280} height={720} alt="Slider Image " />
        </div>
        <div>
          <Image src="/s6.jpg" width={1280} height={720} alt="Slider Image " />
        </div>
        {/* Add more slider items as needed */}
      </Slider>

      

      <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
        {/* Card */}
        {menuItem.map(({ title, description, url, doc }, index) => {
          return (
            <div key={index} className="rounded-xl relative">
              {/* Overlay */}
              <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                <p className="font-bold text-2xl px-2 pt-4">{title} </p>
                <p className="px-2">{description}</p>
                <Link href={`${doc}`}>
                  <button className="border rounded-xl px-5 py-1 border-white bg-white text-black hover:bg-black/50 hover:text-white border-none mx-2 absolute bottom-4">
                    View
                  </button>
                </Link>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Link
                  href={`https://wa.me/${phoneNumber}?text=I%20am%20interested%20in%20${description}%20in%20${title}`}
                  className="border rounded-xl px-5 py-1 border-white bg-white text-black hover:bg-black/50 hover:text-white border-none mx-20 absolute bottom-4">
                  Send an Inquiry
                </Link>
              </div>
              <img
                className="max-h-[160px]  md:max-h-[200px] w-full object-cover rounded-xl"
                src={url}
                alt="/"
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HeadlineCards1;
