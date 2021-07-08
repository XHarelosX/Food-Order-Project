import React, { useEffect, useState } from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import useFatchdata from "../Hooks/use-fatchCallToDB";

// const DUMMY_MEALS = [
//   {
//     id: "m1",
//     name: "Sushi",
//     description: "Finest fish and veggies",
//     price: 22.99,
//   },
//   {
//     id: "m2",
//     name: "Schnitzel",
//     description: "A german specialty!",
//     price: 16.5,
//   },
//   {
//     id: "m3",
//     name: "Barbecue Burger",
//     description: "American, raw, meaty",
//     price: 12.99,
//   },
//   {
//     id: "m4",
//     name: "Green Bowl",
//     description: "Healthy...and green...",
//     price: 18.99,
//   },
// ];

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);

  const { isLoading, error, sendRequest: getMealRequest } = useFatchdata();

  useEffect(() => {
    const transformMeals = (mealsObject) => {
      const loadedMeals = [];
      for (const mealId in mealsObject) {
        loadedMeals.push({
          id: mealId,
          description: mealsObject[mealId].description,
          name: mealsObject[mealId].name,
          price: Number(mealsObject[mealId].price),
        });
      }
      setMeals(loadedMeals);
    };
    getMealRequest(
      {
        url: "https://harel-react-course-fifebase-default-rtdb.europe-west1.firebasedatabase.app/Meals.json",
      },
      transformMeals
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const mealsFound = () => {
    if (isLoading) {
      return <p>Loading...</p>;
    }
    if (error) {
      return <p>Falied to get meals...</p>;
    }
    const mealList = meals.map((meal) => (
      <MealItem
        id={meal.id}
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    ));
    return mealList;
  };

  const mealListFound = mealsFound();

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealListFound}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
