import { useState, useEffect } from "react";

export default function CircularProgressBar(props) {
    const { color } = props;
    const [progressVal, setProgressVal] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgressVal((prevProgressVal) => {
                return (prevProgressVal + 5)
            });
        }, 10);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full h-full flex items-center justify-center">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
                <circle
                    r="40"
                    cx={50}
                    cy={50}
                    fill="transparent"
                    stroke={color}
                    strokeWidth={5}
                    strokeDasharray={360}
                    strokeDashoffset={progressVal}
                />
            </svg>
        </div>
    );
};
