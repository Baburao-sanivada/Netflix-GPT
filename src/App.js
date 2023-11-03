import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import AppStore from "./utils/AppStore";

function App() {
  return (
    <div>
      <Provider store={AppStore}>
        <Body />
      </Provider>
    </div>
  );
}

export default App;
