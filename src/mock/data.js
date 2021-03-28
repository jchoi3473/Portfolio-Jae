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
    info:
      'Save Your APP(SYPP) aims to help reduce the burden in the recruiting process. Recruiting is one of the biggest aspects of college and students gets stressed during their recruiting processes. They spend many hours organizing their application processes but it is always hard to keep track of them. Based on the needs of students, we came up with a platform that will organize all recruiting-related processes and information.',
    info2:
      'Based on the needs of the users, SYPP implements helpful components such as monthly/weekly calendar, process tracker, note/contacts/checklist/event/conversation-note tracker and add/edit of such components. I am developing the frontend part of the SYPP web application and created all relevant components. The web application is based on ReactJS and I am utilizing Redux to keep track of states. I used REST API to manage the HTTP request when retrieving information and sending edited data to the server. I am also planning to implement the WebSocket API to dynamically transfer the data among different the platform from different environments.',
    url: 'https://jchoi3473.github.io/SYPP_Web_personal/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Chrome_extension_main.jpg',
    img2: 'Chrome_extension_main2.jpg',
    title: 'Save Your App(SYPP) Chrome-Extension',
    info:
      'SYPP has a chrome extension that provides a better user experience of the platform. The chrome extension part of the SYPP aims to reduce the complexity of managing the application process. When a person applies from job recruiting websites and wants to keep track of the application process, one needs to change website tabs or desktop screens and manage relevant information. With help of the SYPP chrome extension feature, users can perform the same tasks without leaving the browser or relocating the tab. Users can manage(add/edit/delete) their application processes and their notes on the application. SYPP helps users to not lose their focus while recruiting for their jobs',
    info2:
      'I worked on the frontend part of the chrome extension. Similar to the web application, I utilized ReactJS, Redux, REST API, and WebSocket API to build the extension. I took components from the web application and modified them to work on the chrome extension. I customized manifest.json to satisfy the chrome extension requirements.',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'blayhome.jpg',
    img2: 'blayImage.jpg',
    title: 'Blay',
    info:
      'Blay aims to encourage people in initiating start-ups by providing a platform where one can share ideas and recruit members who share similar visions. Our goal is to make a service where people can freely come and share their side-project ideas. Many people experienced their side-project getting terminated after some members lost their interest in the project and stop doing their tasks. Also, there are moments when people join the project only to fulfill their needs, including experiences to build their resume, etc. Blay provides a place to share ideas where people can thoroughly discuss ideas and formulate a group consisting of only passionate people for those ideas. It is currently an open project for everyone to join. ',
    info2:
      'As a frontend developer at Blay, I am in charge of creating components for its web platform. I am working on its log-in functions and its main page. I am mainly using typescript and ReactJS.',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'PersonalWebsite.JPG',
    img2: 'PersonalWebsite2.JPG',
    title: 'JaeHoChoi.github.io',
    info:
      'I created my personal portfolio website. In addition to function as my portfolio, this website serves as my personal playground where I can implement features I learned from the experience. This website is created using ReactJS.',
    info2:
      'This is a website template based on the work of "jacobo-martinez" from githum. I liked the simpleness of his design but wanted to implement for features. I modified the design, the theme and the format. I changed actions of buttons and components.',
    url: '',
    repo: '', // if no repo, the button will not show up
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
