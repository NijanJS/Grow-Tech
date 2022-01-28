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
      header: 'Devloping a website means creating a user journey end to end.',
      body: 'You need solid planning, a touch of storytelling and a taste of inspiration. From pencil sketches to whiteboard sessions, we think about your project from every angle and every marketing platform.',
      img: Web,
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
    },
    bg: '#FBFBFB',
  },
  {
    id: 3,
    title: 'Hosting',
    content: {
      header: 'Hosting is a crucial step in digital products.',
      body: 'We help you to choose and find a perfect host for your product. A good host lead to increase the efficency of the website.',
      img: Hosting,
    },
    bg: '#E6FAF0',
  },
  {
    id: 4,
    title: 'Enterprise Application Development',
    content: {
      header: 'Devloping a website means creating a user journey end to end.',
      body: 'You need solid planning, a touch of storytelling and a taste of inspiration. From pencil sketches to whiteboard sessions, we think about your project from every angle and every marketing platform.',
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
        "Digi Medical Sewa is an emerging healthcare service established to provide world-class quality health care to the citizen of Nepal without compromising quality from the comfort of your home. We provide preventive, promotive, and curative services to maintain quality of life with an entirely new concept of hassle-free, convenient, and high-quality healthcare services at patient's doorsteps.",
      second:
        " The idea of providing effective medical services that fulfill the community's needs of affordable yet quality healthcare solutions is Digi Medical's sole concern. We are professionals at work; we uphold human values.",
    },
  },
  {
    id: 2,
    img: Gyapu,
    name: 'Gyapu Trading',
    description: {
      first:
        " Gyapu Trading is a B2B ecommerce website. It is specailly developed to solve the problem of business of buying goods in abundants and in a easy ways.rative services to maintain quality of life with an entirely new concept of hassle-free, convenient, and high-quality healthcare services at patient's doorsteps.",
      second:
        "The idea of providing effective medical services that fulfill the community's needs of affordable yet quality healthcare solutions is Digi Medical's sole concern. We are professionals at work; we uphold human values.",
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
