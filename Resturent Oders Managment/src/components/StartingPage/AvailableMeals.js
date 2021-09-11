import React from "react";
import classes from "./AvailableMeal.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import { useEffect, useState } from "react";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      // setIsLoading(true);
      const response = await fetch(
        "https://react-http-45b45-default-rtdb.firebaseio.com/orders.json"
      );

      if (!response.ok) {
        throw new Error("something went wrong");
      }
      const responseData = await response.json();
      const loadedMeals = [];

      // for (let i = 0; i < responseData.orderedItems.length; i++) {
      //   item.push({ itemcol: responseData.orderedItems[i].name });
      //   console.log(item);
      // }
      // let items;
      
      // items = responseData['-MiqEFUYRxRgx6oUuUiz'].orderedItems.length;
      // console.log(items)

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].user.name,
          street: responseData[key].user.street,
          postalcode: responseData[key].user.postalCode,
          city: responseData[key].user.city,
          ItemName: responseData[key].orderedItems[0].name,
          Quentity: responseData[key].orderedItems[0].amount,
        });
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.mealsLoading}>
        <p>Loading....</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.mealsError}>
        <p>{httpError}</p>
      </section>
    );
  }

  const melasList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      street={meal.street}
      postalcode={meal.postalcode}
      city={meal.city}
      ItemName={meal.ItemName}
      Quentity={meal.Quentity}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <table>
          <tr>
            <th>Name</th>
            <th>Class</th>
            <th>Roll Number</th>
            <th>Phone Number</th>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Status</th>
          </tr>
          {melasList}
        </table>
      </Card>
    </section>
  );
};

export default AvailableMeals;
