// OUR SERVUCES

import Enterprise from '../assets/images/enterprise.png';
import Hosting from '../assets/images/hosting.png';
import Web from '../assets/images/web.png';
import Mobile from '../assets/images/app.png';

// HOW WE WORK

import ELE1 from '../assets/images/ele1.png';
import ELE2 from '../assets/images/ele2.png';
import ELE3 from '../assets/images/ele3.png';
import ELE4 from '../assets/images/ele4.png';
import ELE5 from '../assets/images/ele5.png';

// PROJECTS

import DegiMedical from '../assets/images/degi.png';
import Gyapu from '../assets/images/gyapu.png';

// TESTIMONIALS
import client from '../assets/images/client.jpg';
import client1 from '../assets/images/client.png';

// CLIENTS
import amazon from '../assets/images/amazon.png';
import airbnb from '../assets/images/airbnb.png';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaTwitter,
} from 'react-icons/fa';


import Code from '../assets/images/svgs/code.png';
import Support from '../assets/images/svgs/support.svg';
import Team from '../assets/images/svgs/team.png';

//
import Rook from '../assets/images/svgs/rook.svg';
import Cloud from '../assets/images/svgs/cloud.png';
import Idea from '../assets/images/svgs/idea.svg';
import Pray from '../assets/images/svgs/pray.svg';
import { MdPhone, MdEmail, MdPinDrop } from 'react-icons/md';

export const navlinks = [
  { title: 'About Us', path: '/about' },
  { title: 'Services', path: '/services' },
  { title: 'Our Works', path: '/works' },
  { title: 'Careers', path: '/careers' },
];

export const services = [
  {
    id: 1,
    title: 'Website Design & Development',
    content: {
      header: 'Devloping a website means creating a user journey end to end.',
      body: 'You need solid planning, a touch of storytelling and a taste of inspiration. From pencil sketches to whiteboard sessions, we think about your project from every angle and every marketing platform.',
      img: Web,
      techstack: ['React', 'Vue', 'Html'],
    },
    bg: '#F6F9FC',
  },
  {
    id: 2,
    title: 'Mobile App Design & Development',
    content: {
      header: 'Devloping a website means creating a user journey end to end.',
      body: 'You need solid planning, a touch of storytelling and a taste of inspiration. From pencil sketches to whiteboard sessions, we think about your project from every angle and every marketing platform.',
      img: Mobile,
      techstack: ['Flutter', 'Java', 'Firebase'],
    },
    bg: '#FBFBFB',
  },
  {
    id: 3,
    title: 'Hosting',
    content: {
      header: 'Hosting is a crucial step in digital products.',
      body: 'We help you to choose and find a perfect host for your product. A good host lead to increase the efficency of the website.',
      techstack: ['Java', 'Mongo DB', 'My Sql'],
      img: Hosting,
    },
    bg: '#E6FAF0',
  },
  {
    id: 4,
    title: 'Enterprise App Development',
    content: {
      header: 'Devloping a website means creating a user journey end to end.',
      body: 'You need solid planning, a touch of storytelling and a taste of inspiration. From pencil sketches to whiteboard sessions, we think about your project from every angle and every marketing platform.',
      img: Enterprise,
      techstack: ['AWS', 'My Sql', 'Mongo DB'],
    },
    bg: '#FFF9F1',
  },
];

export const workflow = [
  {
    id: 1,
    img: ELE1,
    text: 'Understanding Requirement',
    delay: 300,
  },
  {
    id: 2,
    img: ELE2,

    text: 'Design',
    delay: 500,
  },
  {
    id: 3,
    img: ELE3,
    text: 'Development',
    delay: 700,
  },
  {
    id: 4,
    img: ELE4,
    text: 'Quality Assuarance',
    delay: 900,
  },
  {
    id: 5,
    img: ELE5,
    text: 'Deployment',
    delay: 1200,
  },
];

export const projects = [
  {
    id: 1,
    img: DegiMedical,
    name: 'Digimedical Sewa',
    lable: 'Websites',
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
    name: 'Gyapu Trading',
    lable: 'Websites',
    description: {
      first:
        " Gyapu Trading is a B2B ecommerce website. It is specailly developed to solve the problem of business of buying goods in abundants and in a easy ways.rative services to maintain quality of life with an entirely new concept of hassle-free, convenient, and high-quality healthcare services at patient's doorsteps.",
      second:
        "The idea of providing effective medical services that fulfill the community's needs of affordable yet quality healthcare solutions is Digi Medical's sole concern. We are professionals at work; we uphold human values.",
    },
  },
];
export const ProjectsLabel = ['All', 'Websites', 'Enterprise'];
export const allProjects = [
  ...projects,
  {
    id: 3,
    img: DegiMedical,
    name: 'Project One',
    lable: 'Enterprise',
    description: {
      first:
        "Digi Medical Sewa is an emerging healthcare service established to provide world-class quality health care to the citizen of Nepal without compromising quality from the comfort of your home. We provide preventive, promotive, and curative services to maintain quality of life with an entirely new concept of hassle-free, convenient, and high-quality healthcare services at patient's doorsteps.",
      second:
        " The idea of providing effective medical services that fulfill the community's needs of affordable yet quality healthcare solutions is Digi Medical's sole concern. We are professionals at work; we uphold human values.",
    },
  },
  {
    id: 4,
    img: Gyapu,
    name: 'Project Two',
    lable: 'Enterprise',
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
      name: 'Nijan Adhikari',
      title: 'Front End Developer',
      company: 'GrowTech',
    },
    img: client,
    testimonial: `
    We had an incredible experience working with Landify and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the product concept so quickly. It acted as a catalyst to take our design to the next level and get more eyes on our product.
    `,
  },
  {
    id: 2,
    client: {
      name: 'Bigyan Shrestha',
      title: 'Vice President',
      company: 'DigiMedical',
    },
    img: client1,
    testimonial: `
    Test data is data which has been specifically identified for use in tests, typically of a computer program. Some data may be used in a confirmatory way, typically to verify that a given set of input to a given function produces some expected result
    `,
  },
];

export const clients = [
  amazon,
  airbnb,
  amazon,
  airbnb,
  amazon,
  airbnb,
  amazon,
  airbnb,
  amazon,
  airbnb,
];

export const quickLinks = [
  { title: 'About Us', path: '/about' },
  { title: 'Our Works', path: '/works' },
  { title: 'Our Services', path: '/services' },
  { title: 'Contact Us', path: '/contact' },
  { title: 'Careers', path: '/careers' },
];

export const socialLinks = [
  {
    icon: <FaTwitter />,
    link: 'https://www.twitter.com/',
  },
  {
    icon: <FaInstagram />,
    link: 'https://www.instagram.com/',
  },
  {
    icon: <FaFacebookF />,
    link: 'https://www.facebook.com/',
  },
  {
    icon: <FaLinkedin />,
    link: 'https://www.linkedin.com/',
  },
];
// About Us

export const Creation = [
  {
    id: 1,
    title: 'Digital product that people love to use',
    body: `By applying behavioral science to customer experience, we design engaging digital products used by hundred of people.`,
  },
  {
    id: 2,
    title: 'Enterprise Software that doesn’t fails',
    body: `We create human-centered enterprise software that has the polished, snappy feel of the best consumer apps.`,
  },
  {
    id: 3,
    title: 'Website that support your vision',
    body: `From Slack to Facebook, we team up with marketing departments of large companies and startups to deliver their desired websites.`,
  },
];

export const Reasons = [
  {
    icon: Support,
    title: 'Regular Support',
    body: `We assure you that our team is here to provide continuous feedback, quality maintenance, and constant motivation to generate qualitative output.`,
  },
  {
    icon: Code,
    title: 'Quality Code',
    body: `Our code quality is important to determine the overall status of your project. Quality code is the basis to measure how safe, secure and reliable your project is. Maintenance of quality is not difficult for Growtech to develop.`,
  },

  {
    icon: Team,
    title: 'Experienced Team',
    body: `We always Choose experienced professionals as our team member who can bring good changes to the company’s working conditions. We assure you that our members possess technical, conceptual, and human skills.`,
  },
];

export const WeAre = [
  {
    icon: Rook,
    title: 'Creatively Lead',
    body: `Ambition for the best creative leads all of us. We care about the quality and integrity of our work above all else.`,
  },
  {
    icon: Idea,
    title: 'Strategically Driven',
    body: `We believe the path to world-class work is through rigorous creative strategy that has clear and measurable objectives and is rooted in Brand Purpose.`,
  },
  {
    icon: Cloud,
    title: 'System Thinkers',
    body: `From product innovation to performance marketing, we believe all our work needs to work in concert to connect every element at every phase of the customer journey.`,
  },
  {
    icon: Pray,
    title: 'Humanity Obsessed',
    body: `We strive to create work that adds value to people’s lives, not noise. We believe our industry needs to be transformed to create things people actually want and welcome.
`,
  },
];

export const Teams = [
  {
    title: 'Leadership',
    members: [
      {
        img: `https://media-exp1.licdn.com/dms/image/C5103AQFpdrLL0h4Mrw/profile-displayphoto-shrink_200_200/0/1553689108590?e=1651104000&v=beta&t=0JpJAB9cKz17W2b3UTwXtw7M11g2Xn9NazTeAfnkiwc`,
        name: 'Samir Gautam',
        position: 'Founder & CEO',
        fb: 'https://www.facebook.com',
        ln: 'https://www.linkedin.com',
      },
      {
        img: `https://media-exp1.licdn.com/dms/image/C5635AQEETAmzH44u1g/profile-framedphoto-shrink_200_200/0/1600046374761?e=1645714800&v=beta&t=G1hvNI3ACzfFbfEp8_QwtEqr-rm5ZdgQ_6ep3FLV2k0`,
        name: 'Shiva Neupane',
        position: 'Founder & CEO',
        fb: 'https://www.facebook.com',
        ln: 'https://www.linkedin.com',
      },

    ],
  },
  {
    title: 'Frontend Team',
    members: [
      {
        img: `https://scontent.fktm3-1.fna.fbcdn.net/v/t1.6435-9/64774524_2339870936272420_6358621969885167616_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=H-dICXaDuRkAX-f-BYQ&_nc_ht=scontent.fktm3-1.fna&oh=00_AT92T4h2H8sYDIa5C8ifcCcZmHSQfmgCgn-ACXYdZZDFcw&oe=622094D8`,
        name: 'Rajiv Dahal',
        position: 'React Developer',
        fb: 'https://www.facebook.com',
        ln: 'https://www.linkedin.com',
      },
      {
        img: `https://images.unsplash.com/photo-1643674818698-4ed3e27359d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60`,
        name: 'Nijan Adhikari',
        position: 'React Developer',
        fb: 'https://www.facebook.com',
        ln: 'https://www.linkedin.com',
      },
      {
        img: 'https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80',
        name: 'Rohit Singh',
        position: 'React Developer',
        fb: 'https://www.facebook.com',
        ln: 'https://www.linkedin.com',
      },
    ],
  },
  {
    title: 'Backend Team',
    members: [
      {
        name: 'Rajiv Dahal',
        position: 'React Developer',
        fb: 'https://www.facebook.com',
        ln: 'https://www.linkedin.com',
      },
      {
        name: 'Nijan Adhikari',
        position: 'React Developer',
        fb: 'https://www.facebook.com',
        ln: 'https://www.linkedin.com',
      },
    ],
  },
];
export const Vacancies = [
  {
    id: 1,
    title: 'Frontend Developer',
    requirements: ['Part Time', '1 Post Opening', '3-4 Years of Experience'],
  },
  {
    id: 2,
    title: 'Flutter Developer',
    requirements: ['Part Time', '1 Post Opening', '3-4 Years of Experience'],
  },
  {
    id: 3,
    title: 'Frontend Developer',
    requirements: ['Part Time', '1 Post Opening', '3-4 Years of Experience'],
  },
  {
    id: 4,
    title: 'Frontend Developer',
    requirements: ['Part Time', '1 Post Opening', '3-4 Years of Experience'],
  },
];

export const contactDetails = [
  {
    icon: <MdPhone />,
    title: 'Phone Number',
    data: ['+9779849495387', '+9779843873035'],
  },
  {
    icon: <MdEmail />,
    title: 'For General Enquiry & Information',
    data: ['info@growtech.com.np'],
  },
  {
    icon: <MdPinDrop />,
    title: 'Office Location',
    data: ['Babarmahal, Kathmandu, Nepal'],
  },
  {
    icon: <MdEmail />,
    title: 'To Join Our Team',
    data: ['career@growtech.com.np'],
  },
];
