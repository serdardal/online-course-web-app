import React from "react";
import { connect } from "react-redux";
import { CourseList } from "../GeneralComponents/CourseList/courseList";
import { CartPageItemFooter } from "./Components/CartPageItemFooter/cartPageItemFooter";
import { deleteFromCart } from "../../store/Actions/userActions";

function CartPage(props) {
  function handleCartButton(course) {
    props.deleteFromCart(course);
  }

  return (
    <CourseList courses={props.userCart}>
      <CartPageItemFooter handle={handleCartButton}></CartPageItemFooter>
    </CourseList>
  );
}

const mapStateToProps = state => {
  return {
    userCart: state.userReducer.cart,
    currentUser: state.userReducer.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteFromCart: course => dispatch(deleteFromCart(course))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
