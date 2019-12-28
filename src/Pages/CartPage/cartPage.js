import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../../store/Actions/userActions";
import {CourseList} from '../GeneralComponents/CourseList/courseList'

function CartPage(props) {
  return <CourseList courses={props.userCart}></CourseList>;
}

const mapStateToProps = state => {
  return {
    userCart: state.userReducer.cart,
    currentUser: state.userReducer.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: course => dispatch(addToCart(course))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
