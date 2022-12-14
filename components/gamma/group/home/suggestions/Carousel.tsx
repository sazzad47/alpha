import React, { useState, useEffect, TouchEvent } from "react";
import { Grid } from "@mui/material";

interface Props {
  children?: React.ReactNode;
  show: number;
}

const Carousel = ({ children, show }: Props) => {
  const [touchPosition, setTouchPosition] = useState<any | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState((children as React.ReactNode[]).length);

  useEffect(() => {
    setLength((children as React.ReactNode[]).length);
  }, [children]);

  const next = () => {
    if (currentIndex < (length - show)) {
      setCurrentIndex(prevState => prevState + 1)
  }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };
  
  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      next();
    }

    if (diff < -5) {
      prev();
    }

    setTouchPosition(null);
  };
  return (
    <Grid className="carousel-container">
      <Grid className="carousel-wrapper">
        {currentIndex > 0 && (
          <button onClick={prev} className="left-arrow focus:outline-none bg-bgButton dark:bg-bgButtonDark hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover text-textLight dark:text-textDark">
            &lt;
          </button>
        )}
        <Grid
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          className="carousel-content-wrapper"
        >
          <Grid
            className={`carousel-content show-${show}`}
            style={{ transform: `translateX(-${currentIndex * (100 / show)}%)` }}
          >
            {children}
          </Grid>
        </Grid>
        {currentIndex < (length - show) && (
          <button onClick={next} className="right-arrow focus:outline-none bg-bgButton dark:bg-bgButtonDark hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover text-textLight dark:text-textDark">
            &gt;
          </button>
        )}
      </Grid>
    </Grid>
  );
};

export default Carousel;
