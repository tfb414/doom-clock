import React, {useEffect, useState} from 'react';
import Countdown from 'react-countdown';
import {CountdownTimeDelta} from "react-countdown/dist/utils";
import './CountdownTimer.css';

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
            {startDate && <p>Bench Start: {startDate.toLocaleDateString()}</p>}
            Bench End: {targetDate && <Countdown date={targetDate} renderer={renderer} />}
        </div>
    );
};

export default CountdownTimer;
