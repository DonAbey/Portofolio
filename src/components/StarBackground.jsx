import { useEffect, useState } from "react";

export const StarBackground = () => {
    //id, size, x, y, opacity, animatiion duration
    const [stars, setStars] = useState([]);
    //id, size, x, y, delay, animatiion duration
    const [meteors, setMeteors] = useState([])

    useEffect(() => {   //calling generate stars only once
        generateStars();
        generateMeteors();

        //to resize the number of stars according the screen/window size
        const handleResize = () => {
            generateStars();
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);


    },[]);

    const generateStars = () => {
        const numberOfStars = Math.floor(
            (window.innerWidth * window.innerHeight) / 10000
        );

        const newStars = [];

        for (let i = 0; i < numberOfStars; i++){
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1, //generate stars with size 1 and 4 pixels {Math.random() * (max - min) + min}
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2,
            })
        }

        setStars(newStars);
    }

    const generateMeteors = () => {
        const numberOfMeteors = 2;
        const newMeteors =[]

        for (let i = 0; i < numberOfMeteors; i++){
            newMeteors.push({
                id: i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100,
                y: Math.random() * 50,
                delay: Math.random() * 15,
                animationDuration: Math.random() * 3 + 3,
            })
        }
        setMeteors(newMeteors);
    }


    
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

            {meteors.map((metoer) => (
                <div
                    key={metoer.id}
                    className="meteor animate-meteor"
                    style={{
                        width: metoer.size * 30 + "px",
                        height: metoer.size * 2 + "px",
                        left: metoer.x + "%",
                        top: metoer.y + "%",
                        delay: metoer.delay,
                        animationDuration: metoer.animationDuration + "s",
                    }}
                />
            ))}
        </div>
    );

}