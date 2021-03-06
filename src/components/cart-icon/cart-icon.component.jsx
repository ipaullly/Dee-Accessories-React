import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { AiOutlineShopping } from 'react-icons/ai';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <div className="icon"><AiOutlineShopping /></div>
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(
  null,
  mapDispatchToProps
)(CartIcon);