import { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./App.css";

export default function App() {
  const [number, setNumber] = useState(0);
  const [divStyles, setDivStyles] = useState({});
  const sectionRef = useRef();

    //! The async code with useEffect
    
  //   useEffect(() => {
  //     const randomVal = Math.floor(Math.random() * 500);

  //     for (let i = 0; i <= 10_000_000; i++) {
  //       if (i === 10_000_000) {
  //         setDivStyles({ paddingTop: `${randomVal}px` });
  //       }
  //     }
  //   }, [number]);

    //* The sync code with useEffect
    
  useLayoutEffect(() => {
    const randomVal = Math.floor(Math.random() * 500);

    for (let i = 0; i <= 10_000_000; i++) {
      if (i === 10_000_000) {
        setDivStyles({ paddingTop: `${randomVal}px` });
      }
    }
  }, [number]);

  return (
    <main className="app">
      <section ref={sectionRef} style={divStyles}>
        <p>{number}</p>
        <button
          type="button"
          onClick={() => setNumber((prevNum) => prevNum + 1)}
        >
          +
        </button>
        <button
          type="button"
          onClick={() => setNumber((prevNum) => prevNum + 1)}
        >
          -
        </button>
      </section>
    </main>
  );
}
