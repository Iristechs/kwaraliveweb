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
import BusinessProfile from './components/businessProfiles/businessProfile';
import CompleteBusinessRegistration from './components/complete_business_reg';

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
                       
                    <SignUp />  
                </Route>

                {/* Search page Router */}
                <Route exact path='/search'>
                    <SearchPage />  
                </Route>

                {/* user registeration page Router */}
                  
                    
                <Route exact path='/sign-up/register-user'>
                    <UserRegisteration />  
                </Route>

                {/* Business registeration page Router */}
                
                <Route exact path='/sign-up/register-business'> 
                    <BusinessRegisteration />  
                </Route>

                <Route exact path='/sign-up/register-business/complete-registration' component={(props)=><CompleteBusinessRegistration {...props}/>  }/> 
                    
                <Route path='/business-profile/:id'> 
                    <BusinessProfile />  
                </Route>
              </Switch>
              
            </div>
      </Router>
      
  )
}

export default App;
