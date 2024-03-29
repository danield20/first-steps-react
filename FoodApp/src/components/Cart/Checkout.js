import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.length === 5;

const Checkout = (props) => {
    const [formInputValidity, setFormInputValidity] = useState({
        name: true,
        street: true,
        city: true,
        postalCode: true,
    });

    const nameInputReference = useRef();
    const streetInputReference = useRef();
    const postalInputReference = useRef();
    const cityInputReference = useRef();

    const confirmHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputReference.current.value;
        const enteredStreet = streetInputReference.current.value;
        const enteredPostal = postalInputReference.current.value;
        const enteredCity = cityInputReference.current.value;

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredStreetIsValid = !isEmpty(enteredStreet);
        const enteredPostalIsValid = isFiveChars(enteredPostal);
        const enteredCityIsValid = !isEmpty(enteredCity);

        setFormInputValidity({
            name: enteredNameIsValid,
            street: enteredStreetIsValid,
            city: enteredCityIsValid,
            postalCode: enteredPostalIsValid,
        });

        const formIsValid =
            enteredNameIsValid &&
            enteredStreetIsValid &&
            enteredPostalIsValid &&
            enteredCityIsValid;

        if (!formIsValid) {
            return;
        }

        //submit cart data
        props.onConfirm({
            name: enteredName,
            street: enteredStreet,
            city: enteredCity,
            postal: enteredPostal,
        });
    };

    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div
                className={`${classes.control} ${
                    formInputValidity.name ? "" : classes.invalid
                }`}
            >
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" ref={nameInputReference} />
                {!formInputValidity.name && <p>Please enter a valid name!</p>}
            </div>
            <div
                className={`${classes.control} ${
                    formInputValidity.street ? "" : classes.invalid
                }`}
            >
                <label htmlFor="street">Street</label>
                <input type="text" id="street" ref={streetInputReference} />
                {!formInputValidity.street && (
                    <p>Please enter a valid street!</p>
                )}
            </div>
            <div
                className={`${classes.control} ${
                    formInputValidity.postalCode ? "" : classes.invalid
                }`}
            >
                <label htmlFor="postal">Postal Code</label>
                <input type="text" id="postal" ref={postalInputReference} />
                {!formInputValidity.postalCode && (
                    <p>Please enter a valid postal!</p>
                )}
            </div>
            <div
                className={`${classes.control} ${
                    formInputValidity.city ? "" : classes.invalid
                }`}
            >
                <label htmlFor="city">City</label>
                <input type="text" id="city" ref={cityInputReference} />
                {!formInputValidity.city && <p>Please enter a valid city!</p>}
            </div>
            <div className={classes.actions}>
                <button type="button" onClick={props.onCancel}>
                    Cancel
                </button>
                <button className={classes.submit}>Confirm</button>
            </div>
        </form>
    );
};

export default Checkout;
