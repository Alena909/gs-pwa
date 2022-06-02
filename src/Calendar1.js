import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import { useEffect, useRef } from "react";
import Lottie from "lottie-web";
import cat from "../public/images/animations/lf30_editor_r2ia1abk.json";

// import './App.css';

const Calendar1 = () => {
  const [date, setDate] = useState(new Date());

  const container = useRef();

  useEffect(() => {
    const instance = Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: cat,
    });
    // Return clean up function here
    return () => instance.destroy();
  }, []);

  return (
    <div className="calendar-box">
      <h1 className="text-center">React Calendar</h1>
      <div className="calendar-container">
        <Calendar onChange={setDate} value={date} />
      </div>
      <div className="animation container" ref={container}></div>
    </div>
  );
};

export default Calendar1;
