import { Grid } from "@mui/material";
import React, { useState, ReactNode } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
type Props = {
  children?: ReactNode;
  onEnter: () => any;
  onExit: () => any;
  className: string;
};
const Counter = () => {
  const [counterOn, setCounterOn] = useState<boolean>(false);
  const TriggerCounter = ScrollTrigger as unknown as React.FC<Props>;
  return (
    <React.Fragment>
      <Grid className="w-full p-5 flex items-center justify-center bg-gray-800">
      <TriggerCounter
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
        className="w-full"
      >
          <Grid container className="w-full flex items-center justify-between">
            <Grid
              item
              xs={6}
              md={3}
              className="counter_item_global mb-3 p-2 flex flex-col items-center justify-center bg-pink-800 text-slate-50 border-b-4 border-indigo-500"
            >
              
              <p className="mt-2 text-slate-400">Total Users</p>
              <h3>
                {counterOn && (
                  <CountUp start={0} end={100} duration={2} delay={0} />
                )}
                +
              </h3>
            </Grid>
            <Grid
              item
              xs={6}
              md={3}
              className="counter_item_global mb-3 p-2 flex flex-col items-center justify-center bg-pink-800 text-slate-50 border-b-4 border-indigo-500"
            >
              
              <p className="mt-2 text-slate-400">Total Customers</p>
              <h3>
                {counterOn && (
                  <CountUp start={0} end={100} duration={2} delay={0} />
                )}
                +
              </h3>
            </Grid>
            <Grid
              item
              xs={6}
              md={3}
              className="counter_item_global mb-3 p-2 flex flex-col items-center justify-center bg-pink-800 text-slate-50 border-b-4 border-indigo-500"
            >
              
              <p className="mt-2 text-slate-400">Total Clients</p>
              <h3>
                {counterOn && (
                  <CountUp start={0} end={100} duration={2} delay={0} />
                )}
                +
              </h3>
            </Grid>
            <Grid
              item
              xs={6}
              md={3}
              className="counter_item_global mb-3 p-2 flex flex-col items-center justify-center bg-pink-800 text-slate-50 border-b-4 border-indigo-500"
            >
              
              <p className="mt-2 text-slate-400">Total Awards</p>
              <h3>
                {counterOn && (
                  <CountUp start={0} end={100} duration={2} delay={0} />
                )}
                +
              </h3>
            </Grid>
            
          </Grid>
      </TriggerCounter>
        </Grid>
    </React.Fragment>
  );
};

export default Counter;
