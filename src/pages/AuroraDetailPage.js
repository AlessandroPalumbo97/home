import React from 'react';

import Hero from '../components/Hero';
import Content from '../components/Content';

function AuroraDetailPage(props) {
    return (
        <div>
           <Hero title={props.title} /> 

           <Content>
               Aurora
           </Content>
        </div>
    );
}

export default AuroraDetailPage;