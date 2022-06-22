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
  FaTwitter,
} from 'react-icons/fa';

export const navlinks = [
  { title: 'About Us', path: '/about' },
  { title: 'Our Works', path: '/works' },
  { title: 'Services', path: '/services' },
  { title: 'Careers', path: '/careers' },
];

export const services = [
  {
    id: 1,
    title: 'Website Design & Development',
    content: {
      header: 'Make people aware of the services and/or products you are offering.',
      body: 'Building a website enables you to get in touch with your customers and prospects. Communicate with your visitors effectively, interact with your audience, improve connectivity,  prove your reliability, show your products/ services and/or your experience, expertise, and all in the same place.',
      img: Web,
    },
    bg: '#F6F9FC',
  },
  {
    id: 2,
    title: 'Mobile App Design & Development',
    content: {
      header: 'Reach Global Audience, Access from Different Platforms',
      body: 'Mobile apps allow users to have easy, functional access to information, products, services and processes that they need in real-time and are optimised for hands-on interactions. It allows you to enhance the experience of customers by creating a more personal experience.',
      img: Mobile,
    },
    bg: '#FBFBFB',
  },
  {
    id: 3,
    title: 'Hosting',
    content: {
      header: 'Make your site visible, Keep it running.',
      body: 'Web hosting allows you to host a website and make it available for everyone on the internet. We help you to choose and find a perfect host for your product.',
      img: Hosting,
    },
    bg: '#E6FAF0',
  },
  {
    id: 4,
    title: 'Enterprise Application Development',
    content: {
      header: 'Build Loyalty, Increase your Accessibility and Reinforce your Brand.',
      body: 'Applications help businesses reach a vast target audience and promote building an efficient app marketing strategy. It promotes brand recognition, encourages brand loyalty- , increases sell-through, socially integrates and gives you quick access to your top customer data.',
      img: Enterprise,
    },
    bg: '#FDE7E0',
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
    name: 'Degimedical Sewa',
    description: {
      first:
        "Digi Medical Sewa is an emerging healthcare service established to provide world-class quality health care to the citizens of Nepal without compromising quality from the comfort of your home. We provide preventive, promotive, and curative services to maintain quality of life with an entirely new concept of stress-free, convenient, and high-quality healthcare services at patient's doorsteps.",
      second:
        " The idea of providing effective medical services that fulfil the community's needs of affordable yet quality healthcare solutions is Digi Medical's sole concern. We are professionals at work; we uphold human values.",
    },
  },
  {
    id: 2,
    img: Gyapu,
    name: 'Gyapu Trading',
    description: {
      first:
        " Gyapu Trading is a B2B ecommerce website. It is specailly developed to solve the problem of business of buying goods in abundance and in an easy ways. We maintain the high quality of life in a very hassle-free and convenient healthcare services at customer's threshold.",
      second:
        "The end view of delivering quality trading of services and products that satisfy the business’s needs of high quality yet personalised and engaging results is Gyapu Trading. We are distinguished; we uphold our customers' values. ",
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
    For us at Gyanpu Trading, working with Grow Tech has been the best decision for our online business. Their full-service offer is professional, fast, reliable and absolutely unrivalled in terms of value, quality, support and performance.
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
    From day one, the people of Grow Tech have delivered all possible outcomes as demanded. I must say that all the developers, designers and management are dedicated and it became a part of my beautiful corporate journey.
    `,
  },
  {
    id:3,
    client: {
      name: 'Jasmine XYZ',
      title: 'Vice President',
      company: 'Prabhu Capital',
    },
    img: client1,
    testimonial: `
    We greatly appreciate Grow Tech’s dedication and creativity in re-branding Prabhu Captial’s new Local IPO image and service. The vibe, level of inquiry, feedback, and commitment at our presentation and our newly designed website at the recent market was very positive.
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
  { title: 'About Us', path: '/about-us' },
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
