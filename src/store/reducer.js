import Me from '../assets/images/me.jpg';

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
  }
  
}

const reducer = (state = initialState, action) => {
  return state;
}

export default reducer;