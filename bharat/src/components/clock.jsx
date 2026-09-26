import { useState } from "react";
import { useEffect } from "react";
  let Clock = () =>{
    const [time, setTime] = useState(new Date());
    useEffect (() => {
      console.log("Interval has been setUp.");
      const intervalId = setInterval(() => {
        setTime(new Date());
      },1000);
      return () => {
        clearInterval(intervalId);
        console.log("Cancelled the inteval");
      }
    },[]);
  return (
    <p>This is the current time : {time.toLocaleDateString()} - {time.toLocaleTimeString()}</p>
  );
}
export default Clock;