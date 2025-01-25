import React, { useEffect, useState } from 'react';

const Counter = ({ value, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value, 10);
    if (start === end) return;

    const increment = end / (duration / 10);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.round(start));
      }
    }, 10);

    return () => clearInterval(timer);
  }, [value, duration]);

  return (
    <div>
      {count}
    </div>
  );
};

export default Counter;