import React, { useState } from "react";
import { useRef } from "react";
import { pageData } from "../data";
import Title from "../components/Title";
import Image from "../components/Image";
import "../styles/Home.css";


const Home2 = () => {
  const ref = useRef(null);

  const [rotationPosition, setRotation] = useState(
    new Array(pageData.length).fill(0)
  );
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleSetRotation = (itemIndex) => {
    const newRotation =
      Math.random() * 7 * (Math.round(Math.random()) ? 1 : -1);

    const tempState = [...rotationPosition];
    tempState[itemIndex] = newRotation;
    setRotation(tempState);
    setActiveIndex(itemIndex);
  };

  return (
    <>
      <div className="main-container" id="main-container">
        <div className="title-container" ref={ref}>
          {pageData.map(({ title }, index) => (
            <Title
              key={title}
              title={title}
              index={index}
              setRotation={handleSetRotation}
              setIndex={setActiveIndex}
            />
          ))}
        </div>
        <div className="image-container">
          {pageData.map(({ url }, index) => (
            <Image
              key={url}
              url={url}
              active={activeIndex === index}
              rotationPosition={rotationPosition[index]}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default Home2;