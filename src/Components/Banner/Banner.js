import React, { useState, useEffect } from 'react';
import styles from './Banner.module.css'
import Carousel from 'react-bootstrap/Carousel'


function Banner() {

    return (
        <div>
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1577100078279-b3445eae827c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block  w-100"
                    src="https://images.unsplash.com/photo-1572274408891-758281498b72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block  w-100"
                    src="https://images.unsplash.com/photo-1645454270984-12081eff324f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
        </div>
    )


}

export { Banner };