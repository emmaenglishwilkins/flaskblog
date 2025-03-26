import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { createBackgroundDots } from "../components/pokadot.js";

export function Home() {
    const [positions, setPositions] = useState({});

    useEffect(() => {
        createBackgroundDots(50);
        
        // cleanup 
        return () => {
            const container = document.getElementById("background-dots");
            if (container) {
                container.innerHTML = '';
            }
        };
    }, []);

    // Fixed positions for polka dots with pixel values
    const polkaDots = [
        { path: "/blog", text: "blog", size: 85, x: 100, y: 50 }, // 1
        { path: "/dvd", text: "DVD Logo", size: 65, x: -350, y: 30 }, // 2
        { path: "/poetry-pages/p2", text: "LOSER", size: 75, x: 100, y: 525 }, // 3
        { path: "/poetry-pages/p3", text: "the truth", size: 90, x: -150, y: 400 }, // 4 
        { path: "/draggable-photos", text: "Draggable Photos", size: 100, x: -100, y: 200 }, // 5
        { path: "/poetry-pages/p1", text: "Jo Anne", size: 80, x: 450, y: 250 }, // 6
        { path: "/poetry", text: "Poetry", size: 100, x: 500, y: 100 }, // 7
        { path: "/room", text: "Room", size: 100, x: 500, y: 100 } // 8
    ];

    return (
        <div style={{ position: 'relative', minHeight: '100vh' }}>
            <div id="background-dots" style={{ 
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                pointerEvents: 'none',
                backgroundColor: 'transparent' 
            }}></div>
            <h1 className="wordart radial" style={{ 
                position: 'absolute',
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "80%",
                textAlign: "center"
            }}>
                <span className="text">Emma English Makes Websites?</span>
            </h1>

            {polkaDots.map((dot, index) => (
                <Link
                    key={index}
                    to={dot.path}
                    className="polka-dot"
                    style={{
                        width: `${dot.size}px`,
                        height: `${dot.size}px`,
                        position: 'absolute',
                        left: `${dot.x - dot.size / 2}px`,
                        top: `${dot.y - dot.size / 2}px`
                    }}
                >
                    <span className="dot-text">{dot.text}</span>
                </Link>
            ))}
        </div>
    );
}
