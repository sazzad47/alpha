import React from "react";
import { Grid, Typography } from "@mui/material";

const infos = {
  Country: "Bangladesh",
  "Post code": 5300,
  Height: 5.6 + '"',
  Weight: 60 + " kg",
  Gender: "Male",
  "Marital Status": "Single",
  "Blood group": "O+",
  "Educational qualification": "BSc",
  Hobby: "Reading",
  "Future plan": "I want to explore the whole world.",
};
const Info = () => {
  return (
    <Grid container className="w-full">
      {Object.entries(infos).map(([k, v], i) => (
        <Grid key={i} item xs={12}>
          <Grid className="w-[100%] flex justify-between px-5 py-3">
            <Grid className="w-[50%] flex justify-start">
              <Typography className="p-0"> {k} </Typography>
            </Grid>
            <Grid className="w-[50%] flex justify-start">
              <Typography className="p-0"> {v} </Typography>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default Info;
