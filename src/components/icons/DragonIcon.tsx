import React, { CSSProperties } from 'react';

const DragonIcon = (style: CSSProperties) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            spacing="preserve"
            version="1.1"
            style={{
                ...style,
                maxWidth: '50px',
                fill: 'white',
                shapeRendering: 'geometricPrecision',
                textRendering: 'geometricPrecision',
                imageRendering: '-webkit-optimize-contrast',
            }}
            viewBox="0 0 847 1058.75"
            x="0px"
            y="0px"
            fillRule="evenodd"
            clipRule="evenodd"
        >
            <defs></defs>
            <g>
                <path
                    className="fil0"
                    d="M629 102c0,0 186,265 -96,332 -196,47 -267,-147 -120,-214 0,0 -37,28 -41,87 0,0 27,-61 73,-64 0,0 -35,24 -37,57 0,0 35,-30 89,0 0,0 38,15 31,71 0,0 22,-24 51,-21 29,2 23,-30 23,-30 0,0 -49,31 -41,1 0,0 -25,18 -57,-61 0,0 39,32 61,26l5 16 27 -10 -1 17 38 -21c0,0 -99,-40 -61,-60 0,0 20,-12 -63,-55 0,0 2,-22 -26,-53l9 44 -53 -69 20 57 -89 -84 57 86c-213,-15 -266,340 20,427 -254,70 -432,-292 -153,-465 -371,126 -145,888 383,557 0,0 -203,109 -315,24 0,0 245,83 398,-177 0,0 94,-148 -34,-330 0,0 103,274 -88,333 0,0 216,-182 -10,-421zm-99 134l-12 -21 25 14 4 12 -17 -5z"
                />
            </g>
        </svg>
    );
};

export default DragonIcon;
