import classes from './StartingPageContent1.module.css';
import React from "react";
import AvailableMeals from './AvailableMeals1';
const StartingPageContent = () => {
  return (
    
    
    <React.Fragment>
    <section className={classes.starting}>
      <h1>Complete Orders List</h1>
    </section>
      <AvailableMeals />
    </React.Fragment>
   
  );
};

export default StartingPageContent;







