import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header/Header";

import Contecxt from "./component/Context/Contecxt";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./component/Footer.js/Footer";

import Home from "./component/Home/Home";
import ServicesDetais from "./component/Services/ServicesDetais";
import Login from "./component/Registar/Login"
import PrivetRouter from "./component/PrivetRouter/PrivetRouter";
import NotFound from "./component/NotFound/NotFound"
import Blogs from "./component/Blogs/Blogs";
import BlogsDetails from "./component/Blogs/BlogsDetails";
import Contactus from "./component/ContactUS/Contactus";
function App() {
  return (
    <div className="App">
      <Contecxt>
        <BrowserRouter>
          <Header></Header>

          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivetRouter path="/services/:id">
              <ServicesDetais></ServicesDetais>
            </PrivetRouter>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivetRouter exact path="/blogs">
              <Blogs></Blogs>
            </PrivetRouter>
            <PrivetRouter path="/blogs/:id">
              <BlogsDetails></BlogsDetails>
            </PrivetRouter>
            <PrivetRouter path="/contact">
              <Contactus></Contactus>
            </PrivetRouter>



            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>

          <Footer></Footer>
        </BrowserRouter>
      </Contecxt>
    </div>
  );
}

export default App;
