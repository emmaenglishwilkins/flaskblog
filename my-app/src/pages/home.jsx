import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { createBackgroundDots } from "../components/pokadot.js";

export function Home() {
    const [positions, setPositions] = useState({});

    useEffect(() => {
        console.log("Home component mounted");
        createBackgroundDots(50);
        
        return () => {
            const container = document.getElementById("background-dots");
            if (container) {
                container.innerHTML = '';
            }
        };
    }, []);

    const handleDragStart = (e, id) => {
        const style = window.getComputedStyle(e.target);
        e.dataTransfer.setData('text/plain', id);
        
        // Create a transparent drag image
        const dragImage = e.target.cloneNode(true);
        dragImage.style.opacity = '0.5';
        document.body.appendChild(dragImage);
        e.dataTransfer.setDragImage(dragImage, e.target.offsetWidth / 2, e.target.offsetHeight / 2);
        setTimeout(() => document.body.removeChild(dragImage), 0);
    };

    const handleDrag = (e, id) => {
        if (!e.clientX || !e.clientY) return; // Ignore invalid events

        // Calculate position as percentages
        const container = document.querySelector('[id="background-dots"]');
        const rect = container.getBoundingClientRect();
        
        const left = ((e.clientX - rect.left) / rect.width) * 100;
        const top = ((e.clientY - rect.top) / rect.height) * 100;
        
        // Update positions
        setPositions(prev => ({
            ...prev,
            [id]: { left: `${left.toFixed(2)}%`, top: `${top.toFixed(2)}%` }
        }));
        
        // Log the position
        console.log(`Dot "${id}" position:`, {
            left: `${left.toFixed(2)}%`,
            top: `${top.toFixed(2)}%`
        });
    };

    const handleDragEnd = (e, id) => {
        // Final position logging
        if (positions[id]) {
            console.log(`Final position for "${id}":`, positions[id]);
        }
    };

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

            <Link to="/blog" 
                className="polka-dot" 
                style={{ 
                    width: "85px",
                    height: "85px",
                    left: '5%',
                    top: '15%'
                }}
            >
                <span className="dot-text">blog</span>
            </Link>

            <Link to="/dvd-logo" 
                className="polka-dot" 
                style={{ 
                    width: "95px",
                    height: "95px",
                    right: '8%',
                    top: '25%'
                }}
            >
                <span className="dot-text">DVD Logo</span>
            </Link>

            <Link to="/poetry-pages/p2" 
                className="polka-dot" 
                style={{ 
                    width: "75px",
                    height: "75px",
                    left: '12%',
                    bottom: '25%'
                }}
            >
                <span className="dot-text">LOSER</span>
            </Link>

            <Link to="/poetry-pages/p3" 
                className="polka-dot" 
                style={{ 
                    width: "90px",
                    height: "90px",
                    right: '15%',
                    top: '60%'
                }}
            >
                <span className="dot-text">the truth</span>
            </Link>

            <Link to="/draggable-photos" 
                className="polka-dot" 
                style={{ 
                    width: "100px",
                    height: "100px",
                    right: '25%',
                    bottom: '15%'
                }}
            >
                <span className="dot-text">Draggable Photos</span>
            </Link>

            <Link to="/poetry-pages/p1" 
                className="polka-dot" 
                style={{ 
                    width: "80px",
                    height: "80px",
                    left: '20%',
                    bottom: '10%'
                }}
            >
                <span className="dot-text">Jo Anne</span>
            </Link>

        </div>
    );
}
