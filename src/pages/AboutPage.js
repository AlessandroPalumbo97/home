import React from 'react';

import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {
    return (
        <div>
           <Hero title={props.title} subTitle={props.subTitle} /> 

           <Content>
               <p>My name is Alessandro Palumbo, but people use to call me just Alex or "P"</p>

               <p>Need a bit more time to fill this page sorry 😅</p>
           </Content>
        </div>
    );
}

export default AboutPage;