import React from 'react';

import ModalVideo from 'react-modal-video';
import '../../node_modules/react-modal-video/scss/modal-video.scss';
const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wowjs') : null

class Banner extends React.Component {

    state = {
        isOpen: false
    };

    openModal = () => {
        this.setState({isOpen: true})
    };

    componentDidMount(){ 
        new WOW.WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 20,
            mobile:       true,
            live:         true,
        }).init();
    }

    render() {
        return (
            <React.Fragment>
            <div className="main-banner saas-home">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="row h-100 justify-content-center align-items-center">
                                <div className="col-lg-6 col-md-12">
                                    <div className="saas-image">
                                        
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-12">
                                    <div className="hero-content pl-4">
                                   
                                        <h1>Comparez et économisez en toute simplicité</h1>
                                      <br /> 
                                      
                                      
                                            <a  className="btn btn-primary" style={{width:"50vh", fontWeight:700}}>Assurance emprunteur</a>
                                       
                                        <br />
                                        <br />
                                        
                                            <a  className="btn btn-primary" style={{width:"50vh"}}>Prêt immobilier</a>
                                       
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                

                <div className="bg-gray shape-1"></div>
                <div className="shape1">
                    
                </div>
                <div className="shape2">
                    
                </div>
                <div className="shape3">
                    
                </div>
                <div className="shape4 rotateme">
                    
                </div>
            </div>

            <ModalVideo 
                channel='youtube' 
                isOpen={this.state.isOpen} 
                videoId='szuchBiLrEM' 
                onClose={() => this.setState({isOpen: false})} 
            />
            </React.Fragment>
        );
    }
}

export default Banner;
