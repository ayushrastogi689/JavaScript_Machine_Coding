import React, { useState, useEffect } from "react";
import "./App.css";

function InfiniteScroll() {
  const [countDiv, setCountDiv] = useState(50);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [countDiv]);

  const onScroll = () => {
    if (
      window.innerHeight + window.scrollY >=
      window.document.body.offsetHeight - 20
    ) {
      setCountDiv(countDiv + 50);
    }
  };

  const element = [];
  for (let i = 1; i <= countDiv; i++) {
    element.push(
      <div className="element" key={i}>
        {i}
      </div>
    );
  }

  return (
    <div className="app">
      <h2>Infinite Scroll from IS.js</h2>
      {element}
    </div>
  );
}

export default InfiniteScroll;
