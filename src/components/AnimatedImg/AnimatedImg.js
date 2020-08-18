import React, {useState, useEffect} from "react";
import StyledAnimatedImg from "./AnimatedImg.css";
import cloud from "assets/cloud1.png";
import sun from "assets/sun.png";

const images = [
    {
        path: cloud,
        ratioX: 0.36,
        ratioY: 0.34
    },
    {
        path: cloud,
        ratioX: 0.2,
        ratioY: 0.23
    },
    {
        path: cloud,
        ratioX: 0.26,
        ratioY: 0.34
    },
    {
        path: cloud,
        ratioX: 0.1,
        ratioY: 0.11
    },
    {
        path: cloud,
        ratioX: 0.13,
        ratioY: 0.53
    },
    {
        path: cloud,
        ratioX: 0.23,
        ratioY: 0.41
    },
    {
        path: sun,
        ratioX: 0.07,
        ratioY: 0.3
    }
];

const AnimatedImg = () => {

    const [posX, setPosX] = useState(0);
    const [posY, setPosY] = useState(0);

    const setNewPosition = (event) => {
        const {clientX, clientY} = event;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        setPosX(clientX - centerX);
        setPosY(clientY - centerY);
    }

    useEffect(() => {
        document.addEventListener('mousemove', event => setNewPosition(event));
        return () => {
            document.removeEventListener('mousemove', event => setNewPosition(event));
        }
    }, [])

    return (
        images.map((image, index) => <StyledAnimatedImg key={index}
            style={{
                transform: `translate(${posX * -image.ratioX}px, ${posY * -image.ratioY}px)`
            }}
            type={image.path === cloud ? 'cloud' : 'sun'}
            src={image.path}
            alt=""
        />)
    )
}


export default AnimatedImg;