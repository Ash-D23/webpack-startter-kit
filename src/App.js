import _ from "lodash";
import "./App.css";
import Logo from "./logo.svg";

const App = () => {
	return <>
        <h2> Hwllo World </h2>
        <img src={Logo} />
        <p> Build apps with plain JS but with modern tooling  </p>
    </>
};

export default App;