import React from 'react';

import Hero from '../components/Hero';
import Carousel from '../components/Carousel';

class HomePage extends React.Component {

    componentDidMount() {
        this.props.logoStyle("hot");
    }

    render() {
        return (
            <div>
                <Hero title={this.props.title} subTitle={this.props.subTitle} text={this.props.text} /> 
                <Carousel />   
            </div>
        );
    }
}

export default HomePage;