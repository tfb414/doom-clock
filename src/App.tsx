import React, { useState } from 'react';
import CountdownTimer from './CountdownTimer';

const App = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [targetDate, setTargetDate] = useState<Date | null>(null); // Add targetDate to state

    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedDate = new Date(event.target.value);
        const newTargetDate = new Date(selectedDate);
        newTargetDate.setDate(newTargetDate.getDate() + 12 * 7); // Add 12 weeks

        setSelectedDate(selectedDate);
        setTargetDate(newTargetDate); // Update the targetDate state
    };

    return (
        <div>
            <h1>Countdown Timer</h1>
            <input type="date" onChange={handleDateChange} />
            {selectedDate && <CountdownTimer targetDate={targetDate} startDate={selectedDate} />}
        </div>
    );
};

export default App;
