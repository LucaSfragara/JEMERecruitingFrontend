import './App.css';
import ApplicationPage from './Containers/ApplicationPage/ApplicationPage'
import AssociateAvailabilityPage from './Containers/AssociateAvailabilityPage/AssociateAvailabilityPage'
import {Route, NavLink, Routes, BrowserRouter, Navigate} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = "/apply" element = {<ApplicationPage/>}/>
          <Route path = "/associateAvailability" element = {<AssociateAvailabilityPage/>}/>
          <Route path = "*" element = {<Navigate to="/apply"/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
