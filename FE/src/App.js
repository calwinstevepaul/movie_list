import './App.css';
import Layout from './layout/Layout';
import { Link, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
