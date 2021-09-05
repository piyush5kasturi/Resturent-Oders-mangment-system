import React from "react";
import { useState } from "react";
import classes from "./MealItem.module.css";
const MealItem = (props) => {
  const [color, setColor] = useState(false);
  const colorChange = () => {
    setColor(true);
  };
  return (
    <>
      <tr className={color ? classes.td : classes.td1}>
        <td>{props.name}</td>
        <td>{props.street}</td>
        <td>{props.postalcode}</td>
        <td>{props.city}</td>
        <td>{props.ItemName}</td>
        <td>{props.Quentity}</td>
        <td>
          <center>
            <button className={classes.button} onClick={colorChange}>
              Order Completed
            </button>
          </center>
        </td>
      </tr>
    </>

    // <l1 className={classes.meal}>
    //   <div>
    //     <h3>{props.name}</h3>
    //     <div className={classes.description}>{props.street}</div>
    //     <div className={classes.description}>{props.postalcode}</div>
    //     <div className={classes.price}>{props.city}</div>
    //   </div>

    // </l1>
  );
};
export default MealItem;
