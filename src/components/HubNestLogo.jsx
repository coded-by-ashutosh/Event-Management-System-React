// HubNestLogo.jsx
import React from "react";

const HubNestLogo = ({ width = "280", height = "64", className = "" }) => {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 420 100"
            role="img"
            aria-labelledby="hubnestLogoTitle"
        >
            <title id="hubnestLogoTitle">HubNest logo</title>

            {/* Icon (left) */}
            <g transform="translate(10,8) scale(1.4)">
                <circle cx="32" cy="32" r="30" fill="#0d6efd" />
                <g
                    fill="none"
                    stroke="#ffffff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    opacity="0.85"
                >
                    <path d="M12 38c8-7 20-9 32-5" />
                    <path d="M14 44c9-6 18-6 36-2" />
                    <path d="M16 30c8-3 18-4 32 0" />
                </g>
                <g transform="translate(18,18)">
                    <rect x="0" y="0" width="28" height="22" rx="4" ry="4" fill="#ffffff" />
                    <rect x="0" y="0" width="28" height="5" rx="4" ry="4" fill="#e9eefb" />
                    <circle cx="7" cy="3" r="1.2" fill="#0d6efd" />
                    <circle cx="21" cy="3" r="1.2" fill="#0d6efd" />
                    <path
                        d="M18 12 l3 5 -5 -3 -5 3 3 -5 -3 -5 5 3 5 -3z"
                        fill="#ffc107"
                        transform="scale(0.6) translate(6,6)"
                    />
                </g>
            </g>

            {/* Wordmark */}
            <g transform="translate(120,58)">
                <text
                    x="0"
                    y="-8"
                    fontFamily="Montserrat, Poppins, Arial, sans-serif"
                    fontWeight="700"
                    fontSize="34"
                    fill="#0d6efd"
                >
                    Hub
                </text>
                <text
                    x="66"
                    y="-8"
                    fontFamily="Montserrat, Poppins, Arial, sans-serif"
                    fontWeight="700"
                    fontSize="34"
                    fill="#ffc107"
                >
                    Nest
                </text>
            </g>
        </svg>
    );
};

export default HubNestLogo;
