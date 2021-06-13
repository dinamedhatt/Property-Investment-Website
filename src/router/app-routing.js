import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "../components/about";
import Data from "../components/data";
import Pricing from "../components/Pricing";
import NavBAR from "../components/navbar";
import Footer from "../components/footer";
import Register from "../containers/register";
import Login from "../containers/Login";
import Features from "../components/features";

const AppRouting = () => {
  return (
    <BrowserRouter>
      <NavBAR />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/data-accuracy" component={Data} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/features" component={Features} />
        {/* <Route exact path='/' component={Home} /> */}
        {/* <Route path='**' component={Error} /> */}
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouting;
