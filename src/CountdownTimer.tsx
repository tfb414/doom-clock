import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";
import { CountdownTimeDelta } from "react-countdown/dist/utils";
import "./CountdownTimer.css";
import timeIsRunningOutImage from './images/doom-nightmare-your-time-is-running-out.png';
import doomNightmare0 from './images/doomNightmare0.png';
import doomNightmare1 from './images/doomNightmare1.png';
import doomNightmare2 from './images/doomNightmare2.png';
import doomNightmare3 from './images/doomNightmare3.png';
import doomNightmare4 from './images/doomNightmare4.png';
import doomNightmare5 from './images/doomNightmare5.png';
import doomNightmare6 from './images/doomNightmare6.png';
import doomNightmare7 from './images/doomNightmare7.png';
import doomNightmare8 from './images/doomNightmare8.png';
import doomNightmare9 from './images/doomNightmare9.png';
import doomNightmared from './images/doom-nightmare-d.png';
import doomNightmareh from './images/doom-nightmare-h.png';
import doomNightmarem from './images/doom-nightmare-m.png';
import doomNightmares from './images/doom-nightmare-s.png';

interface CountdownTimerProps {
  targetDate: Date | null;
  startDate?: Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({
  targetDate,
  startDate,
}) => {


  const imagePaths = {
    "0" : doomNightmare0,
      "1" : doomNightmare1,
      "2" : doomNightmare2,
      "3" : doomNightmare3,
      "4" : doomNightmare4,
      "5" : doomNightmare5,
      "6" : doomNightmare6,
      "7" : doomNightmare7,
      "8" : doomNightmare8,
      "9" : doomNightmare9,
}

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
      const day1Num = days.toString()[0]
      const day2Num = days.toString()[1]
      const hours1Num = hours.toString()[0]
      const hours2Num = hours.toString()[1]
      const minutes1Num = minutes.toString()[0]
      const minutes2Num = minutes.toString()[1]
      const seconds1Num = seconds.toString()[0]
      const seconds2Num = seconds.toString()[1]

      return (

          <div className="countdown-display">
            <div className="time-segment">
            {/*@ts-ignore*/}
            <img src={imagePaths[day1Num]} alt={"busted"}/>
            {/*@ts-ignore*/}
            {day2Num ? <img src={imagePaths[day2Num]} alt={"busted"}/> : ''}
            <img src={doomNightmared} alt={"busted"}/>

            </div>

            <div className="time-segment">
            {/*@ts-ignore*/}
            <img src={imagePaths[hours1Num]} alt={"busted"}/>
            {/*@ts-ignore*/}
            {hours2Num ? <img src={imagePaths[hours2Num]} alt={"busted"}/> : ''}
            <img src={doomNightmareh} alt={"busted"}/>
            </div>

            <div className="time-segment">
            {/*@ts-ignore*/}
            <img src={imagePaths[minutes1Num]} alt={"busted"}/>
            {/*@ts-ignore*/}
            {minutes2Num ? <img src={imagePaths[minutes2Num]} alt={"busted"}/> : ''}
            <img src={doomNightmarem} alt={"busted"}/>
            </div>

            <div className="time-segment">
            {/*@ts-ignore*/}
            <img src={imagePaths[seconds1Num]} alt={"busted"}/>
            {/*@ts-ignore*/}
            {seconds2Num ? <img src={imagePaths[seconds2Num]} alt={"busted"}/> : ''}
            <img src={doomNightmares} alt={"busted"}/>

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
