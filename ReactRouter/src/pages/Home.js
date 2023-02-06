import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();

    function navigateHandler() {
        navigate("/products");
    }

    return (
        <div>
            <h1>My Home Page</h1>
            <p>
                Go to <Link to="/products">products</Link>.
            </p>
            <p>
                <button onClick={navigateHandler}>Click me to navigate</button>
            </p>
        </div>
    );
};

export default HomePage;
