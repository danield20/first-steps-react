import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
    const nameInput = useInput((value) => value.trim() !== "");
    const emailInput = useInput((value) => value.trim().includes("@"));

    const nameInputIsInvalid = nameInput.hasError;
    const emailInputIsInvalid = emailInput.hasError;
    let formIsValid = nameInput.isValid && emailInput.isValid;

    const formSubmissionHandler = (event) => {
        event.preventDefault();

        if (!formIsValid) return;

        nameInput.reset();
        emailInput.reset();
    };

    const nameInputClasses = nameInputIsInvalid
        ? "form-control invalid"
        : "form-control";

    const emailInputClasses = emailInputIsInvalid
        ? "form-control invalid"
        : "form-control";

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor="name">Your Name</label>
                <input
                    type="text"
                    id="name"
                    value={nameInput.value}
                    onChange={nameInput.valueChangedHandler}
                    onBlur={nameInput.inputBlurHandler}
                />
                {nameInputIsInvalid && (
                    <p className="error-text">Name is not valid</p>
                )}
            </div>
            <div className={emailInputClasses}>
                <label htmlFor="email">Your email</label>
                <input
                    type="email"
                    id="email"
                    value={emailInput.value}
                    onChange={emailInput.valueChangedHandler}
                    onBlur={emailInput.inputBlurHandler}
                />
                {emailInputIsInvalid && (
                    <p className="error-text">Email is not valid</p>
                )}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
