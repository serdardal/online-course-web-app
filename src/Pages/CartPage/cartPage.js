import React from "react";
import { connect } from "react-redux";
import { CourseList } from "../GeneralComponents/CourseList/courseList";
import { CartPageItemFooter } from "./Components/CartPageItemFooter/cartPageItemFooter";
import { deleteFromCart, purchaseAll } from "../../store/Actions/userActions";
import { Button } from "react-bootstrap";

function CartPage(props) {
  function handleCartButton(course) {
    props.deleteFromCart(course);
  }

  function handlePurchaseButton() {
    props.purchaseAll();
  }

  return (
    <React.Fragment>
      {props.userCart.length !== 0 && (
        <Button onClick={() => handlePurchaseButton()}>Satın Al</Button>
      )}

      <CourseList courses={props.userCart}>
        <CartPageItemFooter handle={handleCartButton}></CartPageItemFooter>
      </CourseList>
    </React.Fragment>
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
    deleteFromCart: course => dispatch(deleteFromCart(course)),
    purchaseAll: () => dispatch(purchaseAll())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
