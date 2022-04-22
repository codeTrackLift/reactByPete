import React from 'react';
import { Carousel } from 'react-bootstrap';

const carouselStyle = {
    zIndex: 1,
    margin: '2rem 0 1rem 0',
    width: '100vw',
    backgroundColor: 'rgb(50,50,50)'
}

export const CarouselGDPs = () => {
    return (
        <Carousel id="carouselGDPs" 
            className="carousel slide mb-4" 
            data-bs-ride="carousel" 
            controls={false} 
            indicators={false} 
            style={carouselStyle}>
            <Carousel.Item>
                <h3 className="px-5 text-gray textShadowBlack" style={{fontStyle:'italic'}}>
                    "Pharmaceutical experience drives my Good Documentation Practices (GDPs)."
                </h3>
                <figcaption className="blockquote-footer text-end mt-3 mx-5">
                    <cite title="Source Title" className="text-white" style={{opacity:0.6}}>quote<span style={{color:'#00857c'}}>By</span><span style={{color:'lime'}}>Pete</span></cite>
                </figcaption>
            </Carousel.Item>
            <Carousel.Item>
                <h3 className="px-5 text-gray textShadowBlack" style={{fontStyle:'italic'}}>
                    "Front-load effort, spend time to understand the problem before proposing a solution."
                </h3>
                <figcaption className="blockquote-footer text-end mt-3 mx-5">
                    <cite title="Source Title" className="text-white" style={{opacity:0.6}}>quote<span style={{color:'#00857c'}}>By</span><span style={{color:'lime'}}>Pete</span></cite>
                </figcaption>
            </Carousel.Item>
            <Carousel.Item>
                <h3 className="px-5 text-gray textShadowBlack" style={{fontStyle:'italic'}}>"Successful projects are planned before implementation, and tested before release."</h3>
                <figcaption className="blockquote-footer text-end mt-3 mx-5">
                    <cite title="Source Title" className="text-white" style={{opacity:0.6}}>quote<span style={{color:'#00857c'}}>By</span><span style={{color:'lime'}}>Pete</span></cite>
                </figcaption>
            </Carousel.Item>
        </Carousel>
    )
}