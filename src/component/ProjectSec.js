import React from 'react'
import ProjectCard from './ProjectCard';



function ProjectSec() {
  return (
    <main className="w-[80%] left-[20%] p-6 content-center text-center relative ">
      <div>
        {data.map((el) => (
          <ProjectCard
            key={el.title}
            title={el.title}
            useTech={el.useTech}
            links={el.links}
          />
        ))}
      </div>
    </main>
  );
}

export default ProjectSec

const data = [
  {
    title: "My Portfolio",
    useTech:
      "I have done this work all by myself and in it all my details and my project work have been uploaded. About Section and Go to Contact Section and Feedback Me.",
    links: "https://amit-mandal-kgce.github.io/my-portfolio/",
  },
  {
    title: "IndMart",
    useTech:
      "Used Technology : HTML, CSS, javascript etc. Designed and built a dynamic online shopping portal offering a variety of products such as electronics, books, Sports, Laptops, Mobiles, Watches, Two Wheelers, Appliances, Grocery, Fashion and various equipments. Developed interactive features for browsing, detailed product exploration. Ensured a seamless and engaging shopping journey through intuitive interface elements.",
    links: "https://amit-mandal-kgce.github.io/IndMart/",
  },
  {
    title: "Weathers",
    useTech:
      "Used Technology : HTML, CSS, javascript etc. Designed and built a dynamic online Weather checking. This portal are showing any Cuntry, City Weathers and Showes Huminaty, Wind Speed. For projects are use OpenWeather API Kyes and Built-in API.",
    links: "https://amit-mandal-kgce.github.io/Weather/",
  },
  {
    title: "Business Consulting Company",
    useTech:
      "Used Technology : HTML, javascript etc. Designed and built a Business Consulting Company. This portal are showing Business Consulting Company projects, Services, Plans & Pricing, Developing Innovative Strategies. For projects are use in Javascript code & Responsive",
    links: "https://amit-mandal-kgce.github.io/Busness_Consulting_Company/",
  },
  {
    title: "A N A S - Tutorial",
    useTech:
      "A N A S is my first project here i made a sign up and sign In page and some description about me and my friends. Here we discuss about some ML using Python, Web Development, App Development, Internet of Things(IOT), Matlab Langauge and Vlsi Design here we also develop a Payment page for Register the Course but in this Project i don't use any Backend but in feature we would also develop it's backend. So, this is my project A N A S - Tutorial.",
    links: "https://amit-mandal-kgce.github.io/anas-tutorial/",
  },
  {
    title: "Learn to code with Apple",
    useTech:
      "Learn to code with Apple is my Second project here i made a Forntent Website and some description about Code Apple. Here we discuss about some Swift Coding Clubs, Apple Professional Training Courses here we also develop a Contact us but in this Project i don't use any Backend but in feature we would also develop it's backend. So, this is my project Learn to code with Apple.",
    links: "https://amit-mandal-kgce.github.io/code_applepage/",
  },
  {
    title: "Le Catering",
    useTech:
      "Le Catering is my Third project here i made a Forntent Website and some description Foods Our Menu. Here we discuss about some About Catering and Our Menu here we also develop a Contact us but in this Project i don't use any Backend but in feature we would also develop it's backend. So, this is my project Le Catering.",
    links: "https://amit-mandal-kgce.github.io/Pizzafood/",
  },
  {
    title: "Student Library",
    useTech:
      "Student Library is my Fourth project here i made a Forntent Website and some description Books. Here we discuss about some About Library here we also develop a Contact us but in this Project i don't use any Backend but in feature we would also develop it's backend. So, this is my project Student Library.",
    links: "https://amit-mandal-kgce.github.io/liberycopy/",
  },
  {
    title: "Register Format",
    useTech:
      "Registration Format is my Fifth project here i made a Forntent Website and some description Books. Here we discuss about some About Library here we also develop a Contact us but in this Project i don't use any Backend but in feature we would also develop it's backend. So, this is my project Registration Format.",
    links: "https://amit-mandal-kgce.github.io/register/",
  },
  {
    title: "SignIn Format",
    useTech:
      "Registration Format is my Fifth project here i made a Forntent Website and some description Books. Here we discuss about some About Library here we also develop a Contact us but in this Project i don't use any Backend but in feature we would also develop it's backend. So, this is my project Registration Format.",
    links: "https://amit-mandal-kgce.github.io/coffeeshop/",
  },
  {
    title: "Brain Strokes",
    useTech:
      "Medical image processing is a field of study that focuses on the application of image processing techniques to medical images. Medical images can include medical images such as X-rays, CT scans, and MRI scans, as well as microscopic images of cells and tissues. The goal of medical image processing is to improve the accuracy and efficiency of medical diagnosis and treatment.",
    links: "https://github.com/amit-mandal-kgce/brain-stroke",
  },
  {
    title: "Making Electric Bicycle Smart",
    useTech:
      "Cycling is a green and healthy choice. This project aims to make the cycle a more accessible vehicle. The project thus aims to reintroduce the bicycle with more user friendly and low cost features. An attempt will be made to model a similar design for the simple bicycles.",
    links: "https://github.com/amit-mandal-kgce/INDUSTRIAL-PROJECTS",
  },
];
