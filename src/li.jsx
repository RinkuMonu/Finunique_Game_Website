import React, { useEffect, useState } from "react";

const TrafficLight = () => {
  const [count, setcount] = useState(10);

  function* countUpto(n) {
    for (let i = 10; i >= n; i--) {
      yield i;
    }
  }

  
  const gen = countUpto(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const next = gen.next();
      if (!next.done) {
        setcount(next.value);
        // console.log(next);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="flex flex-col items-center text-center justify-center min-h-screen bg-black text-white text-7xl">
        <h2
          className={`${
            count <= 3 && " text-red-700 "
          } flex justify-center items-center text-center ${
            count == 0 && "hidden"
          }`}
        >
          {count}
        </h2>
      </div>
    </>
  );
};

export default TrafficLight;
