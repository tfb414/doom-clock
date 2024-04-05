import React, {useEffect, useState} from "react";
import "./DoomHud.css";
import DoomFace from "./DoomFace"; // Import your CSS file

const DoomHud = ({ secondsRemaining}: { secondsRemaining: number | null}) => {  // Receive secondsRemaining prop
  const time = 300;

    // Retrieve or generate values, store in state
    const [pto, setPto] = useState(() => {
        const storedValue = localStorage.getItem('pto');
        return storedValue ? storedValue : generateRandomNumber(15, 120);
    });

    const [mentalHealth, setMentalHealth] = useState(() => {
        const storedValue = localStorage.getItem('mentalHealth');
        return storedValue ? storedValue : generateRandomNumber(15, 45);
    });

    // Update local storage whenever the values change
    useEffect(() => {
        localStorage.setItem('pto', pto);
        localStorage.setItem('mentalHealth', mentalHealth);
    }, [pto, mentalHealth]);

    const twelveWeeksInSeconds = 60 * 60 * 24 * 7 * 12;
    const percentageOfTimeRemaining = secondsRemaining
        ? (secondsRemaining / twelveWeeksInSeconds) * 100
        : 100;

  return (
    <div className="doom-container">
        <div className="doom-box PTO">
            <span></span>
          <span>{pto}</span>
          <span className="hud-label">PTO Hours</span>
        </div>
        <div className="doom-box mental-health">
            <span></span>
          <span>{mentalHealth}%</span>
            <span className="hud-label">Mental Health</span>
        </div>
        <div className="doom-box time">
            <span></span>
          <span>{percentageOfTimeRemaining.toFixed(0)}%</span> {/* Display time value here */}
            <span className="hud-label">Time Remaining</span>
        </div>
        <div className="doom-box doom-face">
            <DoomFace percentage={percentageOfTimeRemaining} />
        </div>
        {/*<div className="doom-box">*/}
        {/*    <span>test</span>*/}
        {/*</div>*/}
    </div>
  );
};

function generateRandomNumber(min: number, max: number): string {
    return (Math.floor(Math.random() * (max - min + 1)) + min).toString()
}

export default DoomHud;
