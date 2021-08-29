import classes from './StartingPageContent.module.css';
import React from "react";
import AvailableMeals from '../StartingPage/AvailableMeals';
const StartingPageContent = () => {
  return (
    
    
    <React.Fragment>
    <section className={classes.starting}>
      <h1>Welcome on Board!</h1>
    </section>
      <AvailableMeals />
    </React.Fragment>
   
  );
};

export default StartingPageContent;







