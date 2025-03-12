import { Link } from "react-router-dom";
import React from "react";

export function Home() {
    return (
        <div>
            <h1 className="wordart radial" style={{ top: "10%", left: "10%", width: "80%", height: "80%" }}>
                <span className="text">Emma English Makes Websites?</span>
            </h1>

            <Link to="/dvd-logo" className="polka-dot" style={{ width: "90px", height: "90px", top: "15%", left: "20%" }}>
                <span className="dot-text">DVD Logo</span>
            </Link>
            <Link to="/draggable-photos" className="polka-dot" style={{ width: "110px", height: "110px", top: "45%", left: "70%" }}>
                <span className="dot-text">Draggable Photos</span>
            </Link>
            <Link to="/poetry-pages/p1" className="polka-dot" style={{ width: "85px", height: "85px", top: "70%", left: "25%" }}>
                <span className="dot-text">Jo Anne</span>
            </Link>
            <Link to="/poetry-pages/p2" className="polka-dot" style={{ width: "80px", height: "80px", top: "30%", left: "55%" }}>
                <span className="dot-text">LOSER</span>
            </Link>
            <Link to="/poetry-pages/p3" className="polka-dot" style={{ width: "95px", height: "95px", top: "60%", left: "80%" }}>
                <span className="dot-text">the truth</span>
            </Link>
            <Link to="/blog" className="polka-dot" style={{ width: "100px", height: "100px", top: "10%", left: "40%" }}>
                <span className="dot-text">blog</span>
            </Link>
            
            <div id="background-dots"></div>
            <script src="/poka-dots/pokadot.js"></script>
        </div>
    );
}
