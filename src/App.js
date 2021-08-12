import logo from './logo.svg';
import './App.css';
import Nav from './components/nav.js';
import Home from './components/homepage.js';
import SignUp from './components/signup';
import SearchPage from './components/search';
import UserRegisteration from './components/register_user';
import BusinessRegisteration from './components/register_business';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Register from './components/register';
import Footer from './components/footer';

function App() {

  return (

      <Router>
            <div className='main-container'>
            
              
              <Switch>
                
                
                {/* Home page Router */}
                <Route exact path='/'>
                    <Nav />  
                    <Home />
                    <Footer />  
                </Route>

                {/* Sign Up page Router */}
                
    
                <Route exact path='/sign-up'>     
                    <Nav />           
                    <SignUp />  
                    <Footer />  
                </Route>

                {/* Search page Router */}
                <Route path='/search'>
                    <SearchPage />  
                </Route>

                {/* user registeration page Router */}
                  
                    
                <Route path='/sign-up/register-user'>
                    <UserRegisteration />  
                </Route>

                {/* Business registeration page Router */}
                
                <Route path='/sign-up/register-business'> 
                    <BusinessRegisteration />  
                </Route>
              </Switch>
              
            </div>
      </Router>
      
  )
}

export default App;
