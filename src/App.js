import './App.css';
import SideNavBar from './components/Navbar/SideNavBar';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <div>
    <div class="container-fluid" id="main">
     <div class="row row-offcanvas row-offcanvas-left">
       <SideNavBar/>
      <Dashboard/>
    
 </div>
</div>  
</div>  
  );
}

export default App;
