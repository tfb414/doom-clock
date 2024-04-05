import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";
import { CountdownTimeDelta } from "react-countdown/dist/utils";
import "./CountdownTimer.css";
import timeIsRunningOutImage from './images/doom-nightmare-your-time-is-running-out.png';
import CharacterImage from "./CharacterImage";


interface CountdownTimerProps {
  targetDate: Date | null;
  startDate?: Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({
  targetDate,
  startDate,
}) => {




  const [currentTime, setCurrentTime] = useState(Date.now());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: CountdownTimeDelta) => {


    if (completed) {
      return <span>Countdown Complete!</span>;
    } else if (!targetDate) {
      return <span>Please select a start date</span>;
    } else {

      return (

          <div className="countdown-display">
            <div className="time-segment">
                <CharacterImage character={days.toString()[0]}/>
            {days.toString()[1] ? <CharacterImage character={days.toString()[1]}/> : ''}
                <CharacterImage character={'d'}/>

            </div>

            <div className="time-segment">
                <CharacterImage character={hours.toString()[0]}/>
            {hours.toString()[1] ? <CharacterImage character={hours.toString()[1]}/>: ''}
                <CharacterImage character={'h'}/>
            </div>

            <div className="time-segment">
                <CharacterImage character={minutes.toString()[0]}/>
            {minutes.toString()[1] ? <CharacterImage character={minutes.toString()[1]}/> : ''}
                <CharacterImage character={'m'}/>
            </div>

            <div className="time-segment">
                <CharacterImage character={seconds.toString()[0]}/>
            {seconds.toString()[1] ? <CharacterImage character={seconds.toString()[1]}/> : ''}
                <CharacterImage character={'s'}/>
            </div>
          </div>
      );
    }
  };

  return (
    <div>
      <p>
      <img className="no-time" src={timeIsRunningOutImage}/> {" "} {targetDate && <Countdown date={targetDate} renderer={renderer} />}
      </p>
    </div>
  );
};


export default CountdownTimer;
