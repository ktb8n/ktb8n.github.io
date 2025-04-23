import React, { useRef } from "react";
import overlay from "./assets/dev/IBMFrame.png";
import "./DevCard.css"; 

export default function DevCard({ project, onClick, tooltip }) {
    const imgRef = useRef(null);





    return (
        <div
            className='dev-card'
            onClick={() => onClick(project)}
            style={{
                position: "relative",
                aspectRatio: "4 / 3",
                width: "100%",
                maxWidth: "220px",
                overflow: "hidden",
            }}
        >
            <div className='tooltip'>{tooltip}</div>
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <img
                    ref={imgRef}
                    src={project.image}
                    alt={project.title}
                    className='thumbnail'
                    style={{
                        objectFit: "contain",
                        zIndex: 1,
                        display: "block",
                    }}
                />
            </div>
            <img
                src={overlay}
                alt='Frame Overlay'
                className='frame-overlay'
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    transformOrigin: "center",
                    pointerEvents: "none",
                    zIndex: 2,
                }}
            />
        </div>
    );
}
