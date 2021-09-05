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
      let item = [];
      for (const key in responseData) {
        for (let i = 0; i < responseData[key].orderedItems.length; i++) {
          item.push({ itemcol: responseData[key].orderedItems[i].name});
        }
        loadedMeals.push({
          id: key,
          name: responseData[key].user.name,
          street: responseData[key].user.street,
          postalcode: responseData[key].user.postalCode,
          city: responseData[key].user.city,
          ItemName: item.itemcol,
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
            <th>Street</th>
            <th>PostalCode</th>
            <th>City</th>
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
