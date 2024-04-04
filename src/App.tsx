import React, { useState } from 'react';
import CountdownTimer from './CountdownTimer';
import './App.css';

const App = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [targetDate, setTargetDate] = useState<Date | null>(null);

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
    };

    // Create 3 boxes so that the date picker follows the same style
    // create the hud at the bottom with the stuff from the input
    // Programatically change the face with how much bentime you have left



    return (
      <body>
        <div className="image-container">
          <img src={"./DoomClockBg.jpg"} alt="howdy" />
          <div className="countdown-container">
            <h1>Doom Clock</h1>
            <p>Your countdown begins</p>
            <input type="date" className="doom-input" onChange={handleDateChange} />
            {selectedDate && (
              <CountdownTimer
                targetDate={targetDate}
                startDate={selectedDate}
              />
            )}
          </div>
        </div>
      </body>
    );
};

export default App;
