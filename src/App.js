import TopNav from './layout/TopNav';
import Dashboard from './views/Dashboard';
import Settings from './views/Settings';
import Sidebar from "./layout/Sidebar";

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="vh-100">
        <TopNav/>
        <div className="d-flex vh-100">
          <Sidebar />
          <div>
            <Routes>
              <Route path="/" element={<Dashboard/>}/>
              <Route path="/settings" element={<Settings/>}/>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
