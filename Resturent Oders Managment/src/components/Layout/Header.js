import React from "react";

import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import { Link } from "react-router-dom";

const Header = (props) => {
 

  return (
    <React.Fragment>
      <header className={classes.header}>
      
      
        <Link to="/login">
          <div className={classes.logo}><h1>ReactMeals</h1></div>
        </Link>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food" />
      </div>
    </React.Fragment>
  );
};

export default Header;
