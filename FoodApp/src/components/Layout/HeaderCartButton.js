import CartIcon from "../Cart/CartIcon";

import CartContext from "../../store/card-context";
import classes from "./HeaderCartButton.module.css";
import { useContext, useEffect, useState } from "react";

const HeaderCartButton = (props) => {
    const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false);
    const cartCtx = useContext(CartContext);
    const numberOfCartItems = cartCtx.items.reduce(
        (prev, item) => prev + item.amount,
        0
    );

    const btnClasses = `${classes.button} ${
        buttonIsHighlighted ? classes.bump : ""
    }`;
    useEffect(() => {
        if (cartCtx.items.length === 0) return;
        setButtonIsHighlighted(true);
        const timer = setTimeout(() => {
            setButtonIsHighlighted(false);
        }, 300);
        return () => {
            clearTimeout(timer);
        };
    }, [cartCtx.items]);
    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    );
};

export default HeaderCartButton;
