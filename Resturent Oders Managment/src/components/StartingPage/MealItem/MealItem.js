import React from "react";
import classes from "./MealItem.module.css";
const MealItem = (props) => {
  return (
    <>
      <tr>
        <td>{props.name}</td>
        <td>{props.street}</td>
        <td>{props.postalcode}</td>
        <td>{props.city}</td>
        <td>{props.ItemName}</td>
        <td>{props.Quentity}</td>
        <td>
        <center>
          <select name="orders" id="status">
            <option value="Received">Received</option>
            <option value="InProgress">In Progress</option>
            <option value="Complete">Complete</option>
            <option value="Shipped">Shipped</option>
          </select>
          </center>
        </td>
        <td>
          <center>
            <button>Submit</button>
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
