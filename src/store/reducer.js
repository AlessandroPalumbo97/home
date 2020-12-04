import Me from '../assets/images/me.jpg';
import * as Constants from '../Constants'

import nervousCard from '../assets/images/cards/nervousCardx2.png';
import nervousLink from '../assets/compressed/nervous_fighter.zip';

import auroraCard from '../assets/images/cards/auroraCardx2.png';

import printCard from '../assets/images/cards/printCardx2.png';

const initialState = {
  main: {
    title: 'Alessandro Palumbo',
    currentRoute: "/",
    headerLinks: [
      { title: 'Home', path: '/' },
      { title: 'About', path: '/about' },
      { title: 'Salvinification', path: '/salvinification' },
      { title: '3D print', path: '/3Dprint' },
      { title: 'Aurora', path: '/aurora' },
    ],
    home: {
      title: 'Alessandro Palumbo',
      subtitle: 'Welcome to my crazy place 🤪',
      text: 'Check out my projects below, contact me, or just have fun playing Salvinification',
    },
    about: {
      title: 'Hi there!',
      subtitle: 'Nice to "meet" you 😁',
      photo: Me
    },
    salvinification: {
      title: 'Salvinification 2.0',
      subTitle: 'Have fun changing our favourite superhero\'s dresses',
    },
    print: {
      title: 'Inspiration turned into reality',
      subTitle: '3D print allows you to dream, project and realize your most insane fantasy',
    },
    aurora: {
      title: 'Aurora',
      subTitle: 'Aurora is a robotic dog, thought and originated from scratch',
    },
  }, 
  slot: { 
    slot: Constants.dresses[0],
    face: Constants.faces[0],
    name: "",
    rolling: false,
    lastBodyOption: null,
    lastFaceOption: null,
      pageWidth: window.innerWidth,
  }, 
  carousel: {
    items: [
      {
        id: 0,
        title: 'Nervous Fighter!',
        subTitle: 'My BETA version of a stickman fighter',
        imgSrc: nervousCard,
        link: nervousLink,
        selected: false,
        downloadable: true
      },
      {
        id: 1,
        title: 'Aurora',
        subTitle: '3D printed robot dog!',
        imgSrc: auroraCard,
        link: '/aurora',
        selected: false,
        downloadable: false
      },
      {
        id: 2,
        title: 'Printed is better',
        subTitle: '3D print is amazing, check it out!',
        imgSrc: printCard,
        link: '/3Dprint',
        selected: false,
        downloadable: false
      },
    ]
  }
}

const reducer = (state = initialState, action) => {
  if (action.type === "PAGE_CHANGED") {
    return {
      ...state.main,
      currentRoute: "/salvinification"
      
    }
  }
  return state;
}

export default reducer;