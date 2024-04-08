import React, { useState } from "react";
import CountdownTimer from "./CountdownTimer";
import "./App.css";
import DoomHud from "./DoomHud";
import initialImage from './images/doom-bigupper-enter-your-bench-start-date.png';
import doomLogo from './images/Doom_logo-min.png'

const App = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [targetDate, setTargetDate] = useState<Date | null>(null);
  const [timeLeftInSeconds, setTimeLeftInSeconds] = useState<number | null>(null);


  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    const selectedDateString = event.target.value;

    // I hate this, but this was the path of least resistance I'll re-visit when this project matters /s
    const year = parseInt(selectedDateString.substring(0, 4));
    const month = parseInt(selectedDateString.substring(5, 7)) - 1;
    const day = parseInt(selectedDateString.substring(8, 10));

    const selectedDate = new Date(year, month, day);

    const newTargetDate = new Date(selectedDate);
    newTargetDate.setDate(newTargetDate.getDate() + 12 * 7); // Add 12 weeks

    setSelectedDate(selectedDate);
    setTargetDate(newTargetDate);

    setTimeLeftInSeconds(getSecondsLeftUntilFiring(newTargetDate));
  };

  return (
    <body>
      <div className="image-container">
        <img src={doomLogo} className="logo" alt="doom logo" />
        <div className="countdown-container">
          <img src={initialImage} alt="game over" />
          <input
            type="date"
            className="doom-input"
            onChange={handleDateChange}
          />
          {selectedDate && (
            <CountdownTimer targetDate={targetDate} startDate={selectedDate} />
          )}
        </div>
      </div>
      <div className="doom-bar">
        <DoomHud secondsRemaining={timeLeftInSeconds} />
      </div>
    </body>
  );
};

function getSecondsLeftUntilFiring(endDate: Date): number {
  const today = new Date();
  return (endDate.getTime() / 1000) - (today.getTime() / 1000);
}


export default App;
