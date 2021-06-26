import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "../components/about";
import Data from "../components/data";
import Pricing from "../components/Pricing";
import NavBAR from "../components/navbar";
import Footer from "../components/footer";
import Register from "../containers/register";
import Login from "../containers/Login";
import FAQ from "../containers/FAQ";
import Features from "../components/features/features";
import Home from "./../components/home/home";
import Error from "../components/errors/error";
import Works from "./../components/how-works";
import ScrollToTop from "./scrollToTop";
import Profile from '../containers/profile/profile';
import Properties from "../containers/Properties";
import PropertyDetail from "../containers/Property-item";

const AppRouting = () => {
  return (
    <BrowserRouter>
      <NavBAR/>
      <ScrollToTop />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/data-accuracy" component={Data} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/how-it-works" component={Works} />
        <Route path="/features" component={Features} />
        <Route path="/faq" component={FAQ} />
        <Route path="/profile/:id" component={Profile} />
        <Route path="/property/:id" component={ PropertyDetail} />
        <Route exact path="/property" component={Properties} />
        <Route path="/home" component={Home} />
        <Route exact path="/" component={Home} />
        <Route path="**" component={Error} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouting;
