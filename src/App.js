import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import About from './component/About/About';

import Contact from './component/Contact/Contact';

import Footer from './component/Footer/Footer';
import Specialist from './component/Specialist/Specialist';
import Appoinment from './component/Appoinment/Appoinment';
import Login from './component/Login/Login';
import NotFound from './component/NotFound/NotFound';
import Doctors from './component/MoreInfo/Doctors/Doctors';
import AuthProvider from './Contexts/AuthProvider';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import Treatment from './Treatment/Treatment';
import Gallery from './component/Gallery/Gallery';
import AppoinmentForm from './component/AppoinmentForm/AppoinmentForm';

function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route exact path="/home">
              <Home></Home>
            </Route>

            <PrivateRoute exact path="/about">
              <About></About>
            </PrivateRoute>

            <Route path="/specialist">
              <Specialist></Specialist>
            </Route>

            <PrivateRoute path="/more/:doctorId">
              <Doctors></Doctors>
            </PrivateRoute>

            <PrivateRoute path="/treatment">
              <Treatment></Treatment>
            </PrivateRoute>

            <PrivateRoute path="/gallery">
              <Gallery></Gallery>
            </PrivateRoute>

            <Route path="/appoinment">
              <Appoinment></Appoinment>
            </Route>

            <PrivateRoute path="/appoinmentForm">
              <AppoinmentForm></AppoinmentForm>
            </PrivateRoute>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer> </Footer>
        </Router>
      </AuthProvider>

    </div >
  );
}

export default App;
