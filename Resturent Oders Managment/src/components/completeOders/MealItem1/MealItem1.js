import React, { useEffect } from "react";
import { useState } from "react";
import classes from "./MealItem1.module.css";
const MealItem = (props) => {
  const [color, setColor] = useState(false);
  const [status, setStatus] = useState(true);

  useEffect(() => {
    const colorCheck = async () => {
      const response = await fetch(
        "https://react-http-45b45-default-rtdb.firebaseio.com/flag.json"
      );
      if (!response.ok) {
        throw new Error("something went wrong");
      }
      const responseData = await response.json();
      for (const key in responseData) {
        if (
          (responseData[key].key === props.id) &
          (responseData[key].flag === 1)
        ) {
          setColor(true);
          setStatus(false);
        }
      }
    };

    colorCheck().catch((error) => {
      alert(error);
    });
  }, []);

  const colorChange = async () => {
    await fetch(
      "https://react-http-45b45-default-rtdb.firebaseio.com/flag.json",
      {
        method: "POST",
        body: JSON.stringify({
          key: props.id,
          flag: 1,
        }),
      }
    );
    setColor(true);
  };

  return (
    <>
      {!status && (
        <tr className={color ? classes.td : classes.td1}>
          <td>{props.name}</td>
          <td>{props.street}</td>
          <td>{props.postalcode}</td>
          <td>{props.city}</td>
          <td>{props.ItemName}</td>
          <td>{props.Quentity}</td>
        </tr>
      )}
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
