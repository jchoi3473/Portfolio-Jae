import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Jae Ho Choi | Developer', // e.g: 'Name | Developer'
  lang: 'en, kr', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: ' ',
  name: 'JAE HO CHOI',
  subtitle: 'C.S B.S. / Software Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Sypp_desktop.jpg',
    img2: 'Sypp_calendar.jpg',
    title: 'Save Your App(SYPP) Desktop',
    info: '',
    info2: '',
    url: 'https://jchoi3473.github.io/SYPP_Web_personal/',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Chrome_extension_main.jpg',
    img2: 'Chrome_extension_main2.jpg',
    title: 'Save Your App(SYPP)       Chrome-Extension',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'blayhome.jpg',
    img2: 'blayImage.jpg',
    title: 'Blay',
    info:
      'I am currently working in front-end development team in Blay, a start-up initiative platform. Blay aims to encourage people in initiating start-ups by providing a platform where one can share ideas and recruit members who share similar visions. It is currently an open project for everyone to join. ',
    info2:
      'As a frontend developer at Blay, I am in charge of creating components for its web platform. I am working on its log-in functions and its main page. I am mainly using typescript and ReactJS.',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
