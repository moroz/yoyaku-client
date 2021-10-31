import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../pages/Home";
import NewSlot from "../pages/slots/NewSlot";

export default function Routes() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/slots/new" exact component={NewSlot} />
    </Router>
  );
}
