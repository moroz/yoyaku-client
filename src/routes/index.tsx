import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../pages/Home";
import Form from "../pages/Form";

export default function Routes() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/form" exact component={Form} />
    </Router>
  );
}
