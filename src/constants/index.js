import img1 from '../assets/Blog.webp'
import img2 from '../assets/travelApp.png'
import img3 from '../assets/Wallet.png'
import img4 from '../assets/ViviLittlle.png'
import img5 from '../assets/Gaming App.png'
import img6 from '../assets/Bailey.jpg'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "works",
    title: "Works",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const imgData = [
         {
           id: 1,
           title: "East Asian Blog",
           img: img1,
           description:
             "This is a personal project based on my passion for East Asian Cultures. A Blog built with React and Bootstrap.",
           button: "See Project",
           link: "https://east-asian-blog.vercel.app/",
           icon: <BsFillArrowRightCircleFill />,
         },
         {
           id: 2,
           title: "Travel App",
           img: img2,
           description:
             "A Travel Mobile App Prototype focused on simplifying travel planning.",
           button: "View Case Study",
           link:
             "https://www.figma.com/file/bohhBEUAqAzkZO6bV7XcxC/Travel-Mobile-App?type=design&node-id=512-19&mode=design&t=ylCfF6WYazFErRMf-0",
           icon: <BsFillArrowRightCircleFill />,
         },
         {
           id: 3,
           title: "Wallet App",
           img: img3,
           description:
             "A Wallet Mobile App designed to enhance customers involvement with their expenses.",
           button: "View Case Study",
           link:
             "https://www.figma.com/file/lz1iEHveQYDxKmOdyb2yH3/Wallet-mobile-app?type=design&node-id=271-7&mode=design&t=ylCfF6WYazFErRMf-0",
           icon: <BsFillArrowRightCircleFill />,
         },
         {
           id: 4,
           title: "Vivi Littlegreen",
           img: img4,
           description:
             "This project is a beauty-care wordpress website.",
           button: "See Project",
           link: "https://dev-vivilittlegreen.pantheonsite.io/",
           icon: <BsFillArrowRightCircleFill />,
         },
         {
           id: 5,
           title: "Gaming App",
           img: img5,
           description:
             "This is a desktop gaming platform. I took inspiration from Steam and Epic Games",
           button: "View Prototype",
           link: "https://www.figma.com/file/eyj3oXiTlGgjXyoN5vP95w/Gaming-Desktop-App?type=design&mode=design&t=3OrTSj7xQLP14xlF-0",
           icon: <BsFillArrowRightCircleFill />,
         },
         {
           id: 6,
           title: "Bailey World",
           img: img6,
           description:
             "An E-commerce Project I am currently working on, built with minimal design practices",
           button: "View Project",
           link: "https://bailey-world.vercel.app/",
           icon: <BsFillArrowRightCircleFill />,
         },
       ];

