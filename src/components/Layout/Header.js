import React, { Fragment } from "react";
import MealsImg from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals Project</h1>
        <HeaderCartButton onClick={ props.onShowCart}/>
      </header>
      <div className={classes["main-image"]}>
        <img src={MealsImg} alt="A table full of delicious food" />
      </div>
    </Fragment>
  );
};

export default Header;