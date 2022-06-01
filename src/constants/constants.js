// OUR SERVUCES

import Enterprise from "../assets/images/enterprise.png";
import Hosting from "../assets/images/hosting.png";
import Web from "../assets/images/web.png";
import Mobile from "../assets/images/app.png";

// HOW WE WORK

import ELE1 from "../assets/images/ele1.png";
import ELE2 from "../assets/images/ele2.png";
import ELE3 from "../assets/images/ele3.png";
import ELE4 from "../assets/images/ele4.png";
import ELE5 from "../assets/images/ele5.png";

// PROJECTS

import Digimedical from "../assets/images/Projects/digimedical.png";
import Gyapu from "../assets/images/Projects/gyapu.png";
import BestWedding from "../assets/images/Projects/best-wedding.png";
import XcelTrip from "../assets/images/Projects/xceltrip.png";

// TESTIMONIALS
import client from "../assets/images/client.jpg";
import client1 from "../assets/images/client.png";

// CLIENTS
import bestwedding from "../assets/images/clients/best-wedding.png";
import digimedical from "../assets/images/clients/digi-medical.png";
import finis from "../assets/images/clients/finis.png";
import prabhu from "../assets/images/clients/prabhu.png";
import xceltrip from "../assets/images/clients/xceltrip.png";
import nepalcallsyou from "../assets/images/clients/nepal-calls-you.png";
import gyapu from "../assets/images/clients/gyapu.png";
import {
  FaFacebookF,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

import Code from "../assets/images/svgs/code.png";
import Support from "../assets/images/svgs/support.svg";
import Team from "../assets/images/svgs/team.png";

import Rook from "../assets/images/svgs/rook.svg";
import Cloud from "../assets/images/svgs/cloud.png";
import Idea from "../assets/images/svgs/idea.svg";
import Pray from "../assets/images/svgs/pray.svg";
import { MdPhone, MdEmail, MdPinDrop } from "react-icons/md";
import { FiChevronDown } from "react-icons/fi";

// Teams
import SamirGautam from "../assets/images/team/samir-gautam.png";
import ShivaNeupane from "../assets/images/team/shiva-neupane.png";
import BibekNeupane from "../assets/images/team/bibek-neupane.png";
import BinuGhimire from "../assets/images/team/binu-ghimire.png";
import JosuaTamang from "../assets/images/team/josua-tamang.png";
import AnishDevkota from "../assets/images/team/anish-devkota.png";
import NijanAdhikari from "../assets/images/team/nijan-adhikari.png";
import RohitSingh from "../assets/images/team/rohit-singh.png";
import RanjitShrestha from "../assets/images/team/ranjit-shrestha.png";
import SarahGorkhali from "../assets/images/team/sarah-gorkhali.png";
import NootanBhandari from "../assets/images/team/nootan-bhandari.png";

//Products
import Product1 from "../assets/images/Products/Product1.png";
import Product2 from "../assets/images/Products/Product2.png";
export const navlinks = [
  { title: "About Us", path: "/about" },
  { title: "Services", path: "/services" },
  {
    title: "Our Works ",
    path: "/works",
    children: [
      { path: "/works/projects", title: "Our Projects" },
      { path: "/works/products", title: "Our Products" },
    ],
  },
  { title: "Careers", path: "/careers" },
];
/*
Devloping a website means creating a user journey end to end. You 
need solid planning , a touch of stor ytelling and a taste of inspiration. 
Web development
App development
Mobile is the future of digital world. Deliver speed, flexibility and 
mobility with our bespoke app development ser vices. 
Enterprise application development
Simplf ying and Digitizing work is must. We help you to build a per fect 
enterprise application that doesn’t fails and suppor t your work.
Hosting
Hosting is a crucial step in digital products. We manage multiple 
hosting platform to deploy application.
Some of them are VPS, Cloud 
*/
export const services = [
  {
    id: 1,
    title: "Website Design & Development",
    content: {
      header: "Devloping a website means creating a user journey end to end.",
      body: `You need solid planning, a touch of storytelling and a taste of inspiration. From pencil sketches to whiteboard sessions, we think about your project from every angle and every marketing platform.`,
      img: Web,
      techstack: ["React", "Vue", "Html"],
    },
    bg: "#F6F9FC",
  },
  {
    id: 2,
    title: "Mobile App Design & Development",
    content: {
      header: "Mobile Applications let you reach out to the great masses",
      body: `Mobile is the future of digital world. Deliver speed, flexibility and 
      mobility with our bespoke app development ser vices.`,
      img: Mobile,
      techstack: ["Flutter", "Java", "Firebase"],
    },
    bg: "#FBFBFB",
  },
  {
    id: 3,
    title: "Hosting",
    content: {
      header: "Hosting is a crucial step in digital products.",
      body: `Hosting is a crucial step in digital products. We manage multiple 
      hosting platform to deploy application.`,
      techstack: ["Java", "Mongo DB", "My Sql"],
      img: Hosting,
    },
    bg: "#E6FAF0",
  },
  {
    id: 4,
    title: "Enterprise App Development",
    content: {
      header: "Manage all your enterprise operations with applications.",
      body: `Simplfying and Digitizing work is must. We help you to build a per fect 
      enterprise application that doesn’t fails and suppor t your work.`,
      img: Enterprise,
      techstack: ["AWS", "My Sql", "Mongo DB"],
    },
    bg: "#FFF9F1",
  },
];

export const workflow = [
  {
    id: 1,
    img: ELE1,
    text: "Understanding Requirement",
    delay: 300,
  },
  {
    id: 2,
    img: ELE2,

    text: "Design",
    delay: 500,
  },
  {
    id: 3,
    img: ELE3,
    text: "Development",
    delay: 700,
  },
  {
    id: 4,
    img: ELE4,
    text: "Quality Assuarance",
    delay: 900,
  },
  {
    id: 5,
    img: ELE5,
    text: "Deployment",
    delay: 1200,
  },
];
export const products = [
  {
    id: 1,
    techStack: ["React", "Java"],
    // client: gyapu,
    img: Product1,
    path: "prabhu-ipo",
    name: "Prabhu Ipo",
    lable: "Website",
    keywords: ["Prabhu IPO", "Web App"],
    description: {
      first: `Prabhu IPO is developed with the thought of solving the problems that arise while publishing and applying for a Local IPO.
        We can create a local IPO for certain wards, municipalities and districts as well.`,
      second: `We can filter the local IPO applicant based on the citizenship address.
      We can merge the data from CASBA.
      Summary report of the IPO applicant.
      Import and export Excel Data.
      `,
    },
  },
  {
    id: 2,
    techStack: ["React", "Java"],
    path: "dbs",
    img: Product2,
    name: "Digital Banking System",
    lable: "Websites",
    keywords: ["DBS", "Web App", "Banking System"],
    description: {
      first: `DBS is developed with the aim to eliminate the tedious procedure for depositing cash and cheque in the bank.
      Users can request for the cash and cheque deposit from the application.
      `,
      second: `Users will be provided with the token which can be used to validate by the branch user of the application.
        Users can apply for block and unblock requests for the mobile banking service.
        Users can apply for new card request.
        `,
    },
  },
  {
    id: 3,
    techStack: ["React", "Java"],
    path: "task-maangement",
    img: Product2,
    name: "Task Management System",
    lable: "Websites",
    keywords: ["DBS", "Web App", "Banking System"],
    description: {
      first: `TMS is built to manage projects and products flow in the IT industry.
      Assign tasks to employees.
      Track the progress of the employees and projects.
      Bug fixing
      Work on new features.
      .
      `,
      second: `
        `,
    },
  },
];
export const projects = [
  {
    id: 1,
    img: Digimedical,
    name: "Digimedical Sewa",
    lable: "Websites",
    keywords: ["Healthcare", "Web App & Mobile App"],
    description: {
      first:
        "Digi Medical Sewa is an emerging healthcare service established to provide world-class quality health care to the citizen of Nepal without compromising quality from the comfort of your home. We provide preventive, promotive, and curative services to maintain quality of life with an entirely new concept of hassle-free, convenient, and high-quality healthcare services at patient's doorsteps.",
      second:
        " The idea of providing effective medical services that fulfill the community's needs of affordable yet quality healthcare solutions is Digi Medical's sole concern. We are professionals at work; we uphold human values.",
    },
  },
  {
    id: 2,
    img: Gyapu,
    name: "Gyapu Trading",
    lable: "Websites",
    keywords: ["E-commerce", "Web App"],
    description: {
      first:
        " Gyapu Trading is a B2B ecommerce website. It is specailly developed to solve the problem of business of buying goods in abundants and in a easy ways.rative services to maintain quality of life with an entirely new concept of hassle-free, convenient, and high-quality healthcare services at patient's doorsteps.",
      second:
        "The idea of providing effective medical services that fulfill the community's needs of affordable yet quality healthcare solutions is Digi Medical's sole concern. We are professionals at work; we uphold human values.",
    },
  },
];
export const ProjectsLabel = ["All", "Websites", "Enterprise", "Mobile"];
export const allProjects = [
  ...projects,
  {
    id: 3,
    img: XcelTrip,
    name: "Xcel Trip",
    lable: "Enterprise",
    keywords: ["Travel & Tour", "Web App & Mobile App"],
    description: {
      first:
        "Digi Medical Sewa is an emerging healthcare service established to provide world-class quality health care to the citizen of Nepal without compromising quality from the comfort of your home. We provide preventive, promotive, and curative services to maintain quality of life with an entirely new concept of hassle-free, convenient, and high-quality healthcare services at patient's doorsteps.",
      second:
        " The idea of providing effective medical services that fulfill the community's needs of affordable yet quality healthcare solutions is Digi Medical's sole concern. We are professionals at work; we uphold human values.",
    },
  },
  {
    id: 4,
    img: BestWedding,
    name: "Best Wedding",
    lable: "Mobile",
    keywords: ["Ecommerce", "Mobile App"],
    description: {
      first:
        "Digi Medical Sewa is an emerging healthcare service established to provide world-class quality health care to the citizen of Nepal without compromising quality from the comfort of your home. We provide preventive, promotive, and curative services to maintain quality of life with an entirely new concept of hassle-free, convenient, and high-quality healthcare services at patient's doorsteps.",
      second:
        " The idea of providing effective medical services that fulfill the community's needs of affordable yet quality healthcare solutions is Digi Medical's sole concern. We are professionals at work; we uphold human values.",
    },
  },
];
export const testimonials = [
  {
    id: 1,
    client: {
      name: "Nijan Adhikari",
      title: "Front End Developer",
      company: "GrowTech",
    },
    img: client,
    testimonial: `
    We had an incredible experience working with Landify and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the product concept so quickly. It acted as a catalyst to take our design to the next level and get more eyes on our product.
    `,
  },
  {
    id: 2,
    client: {
      name: "Bigyan Shrestha",
      title: "Vice President",
      company: "DigiMedical",
    },
    img: client1,
    testimonial: `
    Test data is data which has been specifically identified for use in tests, typically of a computer program. Some data may be used in a confirmatory way, typically to verify that a given set of input to a given function produces some expected result
    `,
  },
];

export const clients = [
  {
    img: prabhu,
    title: "Prabhu Capital",
  },
  {
    img: xceltrip,
    title: "XcelTrip",
  },
  {
    img: bestwedding,
    title: "Best Wedding",
  },
  {
    img: finis,
    title: "Finis",
  },
  {
    img: nepalcallsyou,
    title: "Nepal Calls You",
  },
  {
    img: digimedical,
    title: "Digi Medical",
  },
  {
    img: gyapu,
    title: "Gyapu Trading",
  },
];

export const quickLinks = [
  { title: "About Us", path: "/about" },
  { title: "Our Works", path: "/works" },
  { title: "Our Services", path: "/services" },
  { title: "Contact Us", path: "/contact" },
  { title: "Careers", path: "/careers" },
];

export const socialLinks = [
  {
    icon: <FaTwitter />,
    link: "https://www.twitter.com/",
  },
  {
    icon: <FaInstagram />,
    link: "https://www.insram.com/",
  },
  {
    icon: <FaFacebookF />,
    link: "https://www.facebook.com/",
  },
  {
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/",
  },
];
// About Us

export const Creation = [
  {
    id: 1,
    title: "Digital product that people love to use",
    body: `By applying behavioral science to customer experience, we design engaging digital products used by hundred of people.`,
  },
  {
    id: 2,
    title: "Enterprise Software that doesn’t fails",
    body: `We create human-centered enterprise software that has the polished, snappy feel of the best consumer apps.`,
  },
  {
    id: 3,
    title: "Website that support your vision",
    body: `From Slack to Facebook, we team up with marketing departments of large companies and startups to deliver their desired websites.`,
  },
];

export const Reasons = [
  {
    icon: Support,
    title: "Regular Support",
    body: `We assure you that our team is here to provide continuous feedback, quality maintenance, and constant motivation to generate qualitative output.`,
  },
  {
    icon: Code,
    title: "Quality Code",
    body: `Our code quality is important to determine the overall status of your project. Quality code is the basis to measure how safe, secure and reliable your project is. Maintenance of quality is not difficult for Growtech to develop.`,
  },

  {
    icon: Team,
    title: "Experienced Team",
    body: `We always Choose experienced professionals as our team member who can bring good changes to the company’s working conditions. We assure you that our members possess technical, conceptual, and human skills.`,
  },
];

export const WeAre = [
  {
    icon: Rook,
    title: "Creatively Lead",
    body: `Ambition for the best creative leads all of us. We care about the quality and integrity of our work above all else.`,
  },
  {
    icon: Idea,
    title: "Strategically Driven",
    body: `We believe the path to world-class work is through rigorous creative strategy that has clear and measurable objectives and is rooted in Brand Purpose.`,
  },
  {
    icon: Cloud,
    title: "System Thinkers",
    body: `From product innovation to performance marketing, we believe all our work needs to work in concert to connect every element at every phase of the customer journey.`,
  },
  {
    icon: Pray,
    title: "Humanity Obsessed",
    body: `We strive to create work that adds value to people’s lives, not noise. We believe our industry needs to be transformed to create things people actually want and welcome.
`,
  },
];

export const Vacancies = [
  // {
  //   id: 1,
  //   title: 'Frontend Developer',
  //   requirements: ['Part Time', '1 Post Opening', '3-4 Years of Experience'],
  // },
  // {
  //   id: 2,
  //   title: 'Flutter Developer',
  //   requirements: ['Part Time', '1 Post Opening', '3-4 Years of Experience'],
  // },
  // {
  //   id: 3,
  //   title: 'Frontend Developer',
  //   requirements: ['Part Time', '1 Post Opening', '3-4 Years of Experience'],
  // },
  // {
  //   id: 4,
  //   title: 'Frontend Developer',
  //   requirements: ['Part Time', '1 Post Opening', '3-4 Years of Experience'],
  // },
];

export const contactDetails = [
  {
    icon: <MdPhone />,
    title: "Phone Number",
    data: ["+9779849495387", "+9779843873035"],
  },
  {
    icon: <MdEmail />,
    title: "For General Enquiry & Information",
    data: ["info@growtech.com.np"],
  },
  {
    icon: <MdPinDrop />,
    title: "Office Location",
    data: ["Babarmahal, Kathmandu, Nepal"],
  },
  {
    icon: <MdEmail />,
    title: "To Join Our Team",
    data: ["career@growtech.com.np"],
  },
];

export const Teams = [
  {
    title: "Leadership",
    members: [
      {
        img: SamirGautam,
        name: "Samir Gautam",
        position: "Founder & CEO",
        fb: "https://www.facebook.com",
        ln: "https://www.linkedin.com",
      },
      {
        img: ShivaNeupane,
        name: "Shiva Neupane",
        position: "Managing Director",
        fb: "https://www.facebook.com",
        ln: "https://www.linkedin.com",
      },
    ],
  },
  {
    title: "Professionals",
    members: [
      {
        img: RanjitShrestha,
        name: "Ranjit Shrestha",
        position: "UI/UX Designer",
        fb: "",
        ln: "",
      },
      {
        img: JosuaTamang,
        name: "Josua Tamang",
        position: "Web Designer",
        fb: "",
        ln: "",
      },
      {
        img: SarahGorkhali,
        name: "Saraha Grokhali",
        position: "Web Designer",
        fb: "",
        ln: "",
      },
      {
        img: NijanAdhikari,
        name: "Nijan Adhikari",
        position: "Front End Developer",
        fb: "",
        ln: "",
      },
      {
        img: BinuGhimire,
        name: "Binu Ghimire",
        position: "Front End Developer",
        fb: "",
        ln: "",
      },
      {
        img: RohitSingh,
        name: "Rohit Singh",
        position: "Front End Developer",
        fb: "",
        ln: "",
      },
      {
        img: BibekNeupane,
        name: "Bibek Neupane",
        position: "Front End Developer",
        fb: "",
        ln: "",
      },
      {
        img: AnishDevkota,
        name: "Anish Devkota",
        position: "Mobile Developer",
        fb: "",
        ln: "",
      },
      {
        img: NootanBhandari,
        name: "Nootan Bhandari",
        position: "Mobile Developer",
        fb: "",
        ln: "",
      },
      {
        img: "",
        name: "Ajit Pudasaini",
        position: "Back End Developer",
        fb: "",
        ln: "",
      },
    ],
  },
];
