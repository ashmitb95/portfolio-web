import { useEffect, useState, useRef } from "react";

export default function test() {
  const [adjHover, setAjdHover] = useState(true);
  const adjHoverRef = useRef(adjHover);
  adjHoverRef.current = adjHover;
  const [currentAdj, setCurrentAdj] = useState(0);
  const [adjList, setAdj] = useState([
    "Overeater",
    "Amateur Photography",
    "Problem Solver",
    "Fullstack Dev",
    "Guitarist",
    "Foodie",
  ]);

  useEffect(() => {
    if (!adjHoverRef.current) {
      const next = (currentAdj + 1) % adjList.length;
      const id = setTimeout(() => setCurrentAdj(next), 2000);
      return () => clearTimeout(id);
    }
  }, [currentAdj, adjHover]);

  return (
    <div className="App">
      <button
        onClick={() =>
          setCurrentAdj((c) => (c >= adjList.length - 1 ? 0 : c + 1))
        }
      >
        + {currentAdj}
      </button>
      <h1>React Typescript Basic's Course</h1>
      <h2>Get ready to learn fast</h2>
      <h3
        className="flip-animate"
        onMouseEnter={() => setAjdHover(true)}
        onMouseLeave={() => setAjdHover(false)}
      >
        I am a
        <span className={`adjective-list-container`}>
          <ul
            className={`adjective-list ${adjHover && "adjective-list-hover"}`}
          >
            {adjList.map((adj, aIndex) => (
              <li
                key={aIndex}
                data-hover={
                  adjHover
                    ? adj
                    : aIndex >= adjList.length - 1
                    ? `${adjList[0]}`
                    : `${adjList[aIndex + 1]}`
                }
                className={`adjective ${!adjHover && "notFlipped"} ${
                  !adjHover && aIndex === currentAdj && "flipped"
                } `}
              >
                {adj}
              </li>
            ))}
          </ul>
        </span>
      </h3>
    </div>
  );
}
