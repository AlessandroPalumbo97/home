import React from 'react';

import Hero from '../components/Hero';
import Content from '../components/Content';

class PrintPage extends React.Component {
    
    componentDidMount() {
        this.props.setRoute("/about");
    }    

    render() {
        return (
            <div>
               <Hero title={this.props.title} subTitle={this.props.subTitle} /> 
    
               <Content>
                   <p>BELLA RAGA QUA CI VA LA STAMPA 3D"</p>
               </Content>
            </div>
        );
    }
}

export default PrintPage;