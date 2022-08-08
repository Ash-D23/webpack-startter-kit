import _ from "lodash";
import "./App.css";
import Logo from "./logo.svg";

const App = () => {

	return <>
        <h2 className="heading"> {_.join(["Welcome,", "Everyone"], " ")} </h2>
        <h2 className="sub-heading">Webpack Starter Kit with React & Typescript</h2>
        <div className="image--container">
            <img src={Logo} />
        </div>
    </>
};

export default App;