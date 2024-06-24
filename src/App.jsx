import Router from "./Routes/Route";
import "./App.css"
import store from "./Redux/Reducer/store";
import { Provider } from "react-redux";
const App = () => {
  return (
    <>
      <Provider store={store}>
        <div>
          <Router />
        </div>
      </Provider>

    </>
  );
}

export default App;