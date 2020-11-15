import React from 'react';

import Hero from '../components/Hero';
import Content from '../components/Content';


class AboutPage extends React.Component {
    
    componentDidMount() {
        this.props.setRoute("/about");
    }    

    render() {
        return (
            <div>
               <Hero title={this.props.title} subTitle={this.props.subTitle} photo={this.props.photo}/> 
    
               <Content>
                   <p>My name is Alessandro Palumbo, but people use to call me just Alex or "P"</p>

                   <p>Need a bit more time to fill this page sorry <span role="img" aria-label="embarassed emoji">😅</span></p>
               </Content>
            </div>
        );
    }
}

export default AboutPage;