import React, { useEffect, useRef, useState } from "react";
import { Grid, Tooltip, Button, IconButton } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Categories from "./Categories";


const terms = [
  { id: 1, name: "All" },
  { id: 2, name: "Typescript" },
  { id: 3, name: "Javascript" },
  { id: 4, name: "Python" },
  { id: 5, name: "Node" },
  { id: 6, name: "React" },
  { id: 7, name: "Next" },
  { id: 8, name: "MongoDB" },
  { id: 9, name: "Tailwind CSS" },
  { id: 10, name: "GraphQL" },
  { id: 11, name: "Apollo Client" },
  { id: 12, name: "Frontend" },
  { id: 13, name: "Backend" },
  { id: 14, name: "Database" },
];
const Topbar = () => {
  const [activeElement, setActiveElement] = useState<string>("All");

  const [showLeftArrow, setShowLeftArrow] = useState<boolean>(false);
  const [showRightArrow, setShowRightArrow] = useState<boolean>(false);
  const [render, setRender] = useState<boolean>(false)
  const searchSuggestionsContainer = useRef<any>();

  const moveLeft = () => {
    
    searchSuggestionsContainer.current.scrollLeft =
    searchSuggestionsContainer.current.scrollLeft + 300;
    setShowRightArrow(true);
    setRender(prevState => !prevState)
  };
  const moveRight = () => {
    searchSuggestionsContainer.current.scrollLeft =
    searchSuggestionsContainer.current.scrollLeft - 300;
    searchSuggestionsContainer.current.scrollLeft > 300
    ? setShowRightArrow(true)
    : setShowRightArrow(false);
    setShowLeftArrow(true)
    setRender(prevState => !prevState)
  };

  const handleActiveElement = (value: string) => {
    setActiveElement(value);
  };
 
  useEffect(() => {
    if (
      (searchSuggestionsContainer.current.scrollWidth >
      searchSuggestionsContainer.current.clientWidth) && !(
        searchSuggestionsContainer.current.scrollLeft + searchSuggestionsContainer.current.clientWidth  === searchSuggestionsContainer.current.scrollWidth
      )
    ) {
      setShowLeftArrow(true);
    } 
    
    if (searchSuggestionsContainer.current.scrollLeft + searchSuggestionsContainer.current.clientWidth  === searchSuggestionsContainer.current.scrollWidth) {
      setShowLeftArrow(false)
    }
  },[render]);
  return (
    <Grid className="w-full bg-[#eee] dark:bg-[#242526] flex fixed z-10 h-[4rem]">
    <Categories/>
    <Grid className="bg-[#eee] dark:bg-[#242526] w-[calc(100%-200px)] flex items-center justify-between">
      {showRightArrow && (
        <Grid className="flex justify-start">
          <IconButton
            onClick={moveRight}
            className="focus:outline-none text-textLight dark:text-textDark"
          >
            <KeyboardArrowLeftIcon />
          </IconButton>
        </Grid>
      )}

      <Grid
        ref={searchSuggestionsContainer}
        className="w-full scrollbar-hide overflow-x-auto scroll-smooth overflow-y-hidden whitespace-nowrap"
      >
        {terms.map((item) => (
          <Tooltip
            key={item.id}
            title={item.name}
            PopperProps={{
              modifiers: [
                {
                  name: "offset",
                  options: {
                    offset: [0, -10],
                  },
                },
              ],
            }}
          >
            <Button
              onClick={() => handleActiveElement(item.name)}
              className={`inline-block focus:outline-none ${
                activeElement === item.name ? "bg-bgLight dark:bg-bgDarkHover" : "bg-[#0be0e7]"
              } dark:bg-bgDark hover:bg-bgLight dark:hover:bg-bgDarkHover text-textLight dark:text-textDark rounded-3xl mx-[20px] capitalize`}
            >
              {item.name}
            </Button>
          </Tooltip>
        ))}
      </Grid>

      {showLeftArrow && (
        <Grid className="flex justify-end z-10">
          <IconButton
            onClick={moveLeft}
            className="focus:outline-none text-textLight dark:text-textDark"
          >
            <KeyboardArrowRightIcon />
          </IconButton>
        </Grid>
      )}
    </Grid>
    </Grid>
  );
};

export default Topbar;
