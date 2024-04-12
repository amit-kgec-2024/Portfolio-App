const projectData = [
  {
    id: 0,
    projectImg: "project1.png",
    projectName: "Portfolio",
    linksProject: "https://amit-mandal-kgce.github.io/My-Portfolio-HTML/",
    projectDetails:
      "My first portfolio website, this portfolio are uses techonology HTML, CSS and Javascript.",
  },
  {
    id: 1,
    projectImg: "project2.png",
    projectName: "INDUSTRIAL-PROJECTS",
    linksProject: "https://github.com/amit-mandal-kgce/INDUSTRIAL-PROJECTS",
    projectDetails:
      "Cycling is a green and healthy choice. This project aims to make the cycle a more accessible vehicle. The project thus aims to reintroduce the bicycle with more user friendly and low cost features. An attempt will be made to model a similar design for the simple bicycles.",
  },
  {
    id: 2,
    projectImg: "project1.png",
    projectName: "brain-stroke",
    linksProject: "https://github.com/amit-mandal-kgce/brain-stroke",
    projectDetails:
      "Medical image processing is a field of study that focuses on the application of image processing techniques to medical images. Medical images can include medical images such as X-rays, CT scans, and MRI scans, as well as microscopic images of cells and tissues. The goal of medical image processing is to improve the accuracy and efficiency of medical diagnosis and treatment.",
  },
  {
    id: 3,
    projectImg: "project3.png",
    projectName: "Libery-Frontend",
    linksProject: "https://amit-mandal-kgce.github.io/Libery-Frontend/",
    projectDetails:
      "Student Library is my Fourth project here i made a Forntent Website and some description Books. Here we discuss about some About Library here we also develop a Contact us but in this Project i don't use any Backend but in feature we would also develop it's backend. So, this is my project Student Library.",
  },
  {
    id: 4,
    projectImg: "project4.png",
    projectName: "Food-Shop-Frontend",
    linksProject: "https://amit-mandal-kgce.github.io/Food-Shop-Frontend/",
    projectDetails:
      "Le Catering is my Third project here i made a Forntent Website and some description Foods Our Menu. Here we discuss about some About Catering and Our Menu here we also develop a Contact us but in this Project i don't use any Backend but in feature we would also develop it's backend. So, this is my project Le Catering.",
  },
  {
    id: 5,
    projectImg: "project5.png",
    projectName: "Online-Tutorial",
    linksProject: "https://amit-mandal-kgce.github.io/Online-Tutorial/",
    projectDetails:
      "A N A S is my first project here i made a sign up and sign In page and some description about me and my friends. Here we discuss about some ML using Python, Web Development, App Development, Internet of Things(IOT), Matlab Langauge and Vlsi Design here we also develop a Payment page for Register the Course but in this Project i don't use any Backend but in feature we would also develop it's backend. So, this is my project A N A S - Tutorial.",
  },
  {
    id: 6,
    projectImg: "project6.png",
    projectName: "Login-page-Frontend",
    linksProject: "https://amit-mandal-kgce.github.io/Login-page-Frontend2/",
    projectDetails:
      "Registration Format is my Fifth project here i made a Forntent Website and some description Books. Here we discuss about some About Library here we also develop a Contact us but in this Project i don't use any Backend but in feature we would also develop it's backend. So, this is my project Registration Format.",
  },
  {
    id: 7,
    projectImg: "project7.png",
    projectName: "Register-page-Frontend",
    linksProject: "https://amit-mandal-kgce.github.io/Register-page-Frontend1/",
    projectDetails:
      "Registration Format is my Fifth project here i made a Forntent Website and some description Books. Here we discuss about some About Library here we also develop a Contact us but in this Project i don't use any Backend but in feature we would also develop it's backend. So, this is my project Registration Format.",
  },
  {
    id: 8,
    projectImg: "project8.png",
    projectName: "Frontend-pages",
    linksProject: "https://amit-mandal-kgce.github.io/Frontend-pages1/",
    projectDetails:
      "Le Catering is my Third project here i made a Forntent Website and some description Foods Our Menu. Here we discuss about some About Catering and Our Menu here we also develop a Contact us but in this Project i don't use any Backend but in feature we would also develop it's backend. So, this is my project Le Catering.",
  },
  {
    id: 9,
    projectImg: "project9.png",
    projectName: "Weather-Application",
    linksProject: "https://amit-mandal-kgce.github.io/Weather-Application1/",
    projectDetails:
      "Used Technology : HTML, CSS, javascript etc. Designed and built a dynamic online Weather checking. This portal are showing any Cuntry, City Weathers and Showes Huminaty, Wind Speed. For projects are use OpenWeather API Kyes and Built-in API.",
  },
  {
    id: 10,
    projectImg: "project10.png",
    projectName: "E-commerce-HTML",
    linksProject:
      "https://amit-mandal-kgce.github.io/E-commerce-Frontend-HTML/",
    projectDetails:
      "Used Technology : HTML, CSS, javascript etc. Designed and built a dynamic online shopping portal offering a variety of products such as electronics, books, Sports, Laptops, Mobiles, Watches, Two Wheelers, Appliances, Grocery, Fashion and various equipments. Developed interactive features for browsing, detailed product exploration. Ensured a seamless and engaging shopping journey through intuitive interface elements.",
  },
  {
    id: 11,
    projectImg: "project11.png",
    projectName: "Frontend-pages",
    linksProject: "https://amit-mandal-kgce.github.io/Frontend-pages2/",
    projectDetails:
      "Used Technology : HTML, javascript etc. Designed and built a Business Consulting Company. This portal are showing Business Consulting Company projects, Services, Plans & Pricing, Developing Innovative Strategies. For projects are use in Javascript code & Responsive",
  },
  {
    id: 12,
    projectImg: "project12.png",
    projectName: "Agency-app",
    linksProject: "https://agency-app-flame.vercel.app/users/sign_in",
    projectDetails:
      "Used Technology : React js, Tailwind, Javascript, node js etc. Designed and built a dynamic online agency portal. This portal are fully compleated frontend and backend backend use cors, JSON, jsonwebtoken, bcryptjs, express and Databese use MongoDM Atls.",
  },
  {
    id: 13,
    projectImg: "project13.png",
    projectName: "E-commerce",
    linksProject: "https://e-commerce-frontend-beryl.vercel.app/account/signin",
    projectDetails:
      "Used Technology : React js, Tailwind, Javascript, node js etc. Designed and built a dynamic online agency portal. This portal are fully compleated frontend and backend backend use cors, JSON, jsonwebtoken, bcryptjs, express and Databese use MongoDM Atls and Image upload Database in Cloudinary.",
  },
  {
    id: 14,
    projectImg: "project14.png",
    projectName: "social-media",
    linksProject: "https://social-media-alpha-one.vercel.app/auth",
    projectDetails:
      "Used Technology : Next js, Tailwind, Typescript etc. Designed and built a dynamic online agency portal. This portal are fully compleated frontend and backend backend use Databese MongoDM Atls and Image upload Database in Cloudinary.",
  },
  {
    id: 15,
    projectImg: "project15.png",
    projectName: "WhatsApp_clone",
    linksProject: "https://whats-app-clone-teal-ten.vercel.app/",
    projectDetails:
      "Used Technology : React js, Tailwind, javascript etc. Designed and built a dynamic online Chatting portal. This project are not not completed work in this time",
  },
];
export default projectData;