import React, {useEffect, useState} from 'react';
import Countdown from 'react-countdown';
import {CountdownTimeDelta} from "react-countdown/dist/utils";

interface CountdownTimerProps {
    targetDate: Date | null;
    startDate?: Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate, startDate }) => {
    const [currentTime, setCurrentTime] = useState(Date.now());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(Date.now());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);


    const renderer = ({ days, hours, minutes, seconds, completed }: CountdownTimeDelta) => {
        if (completed) {
            return <span>Countdown Complete!</span>;
        } else if (!targetDate) {
            return <span>Please select a start date</span>;
        } else {
            return <span>{days}d {hours}h {minutes}m {seconds}s</span>;
        }
    };

    return (
        <div>
            {startDate && <p>Start Date: {startDate.toLocaleDateString()}</p>}
            {targetDate && <Countdown date={targetDate} renderer={renderer} />} {/* Conditional Rendering */}
        </div>
    );
};

export default CountdownTimer;