/* eslint-disable react-hooks/immutability */
import { SignalZero } from "lucide-react";
import { useEffect, useState } from "react";

export const StarBackground = () => {
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);

    useEffect(() => {
        generateStars();
        generateMeteors();

        const handleResize = () => {
            generateStars();
            generateMeteors();
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const generateStars = () => {
        const numberOfStars = Math.floor(
            (window.innerWidth * window.innerHeight) / 10000
        );

        const newStars = [];

        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2,
            });
        }

        setStars(newStars);
    };

    const generateMeteors = () => {
        const lanes = [
            { min: 0, max: 15 },     
            { min: 25, max: 40 },    
            { min: 50, max: 65 },    
            { min: 75, max: 85 },
        ];

        lanes.sort(() => Math.random() - 0.5); 

        const newMeteors = lanes.map((lane, i) => {
        const x = lane.min + Math.random() * (lane.max - lane.min);

        return {
            id: i,
            size: Math.random() * 2 + 1,
            x,
            y: Math.random() * 20,
            delay: Math.random() * 15,
            animationDuration: Math.random() * 3 + 3,
            };
        });

        setMeteors(newMeteors);
    };


    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {stars.map((star) => (
                <div 
                    key={star.id} 
                    className="star animate-pulse-subtle" 
                    style={{
                        width: star.size + "px",
                        height: star.size + "px",
                        left: star.x + "%",
                        top: star.y + "%",
                        opacity: star.opacity,
                        animationDuration: star.animationDuration + "s",
                    }}
                />
            ))}

            {meteors.map((meteor) => (
                <div 
                    key={meteor.id} 
                    className="meteor animate-meteor" 
                    style={{
                        width: `clamp(60px, ${meteor.size * 4}vw, 140px)`,
                        height: `clamp(2px, ${meteor.size * 0.25}vw, 4px)`,
                        left: meteor.x + "%",
                        top: meteor.y + "%",
                        animationDelay: meteor.delay,
                        animationDuration: meteor.animationDuration + "s",
                    }}
                />
            ))}
        </div>
    );
};