import TopNav from './layout/TopNav';
import Dashboard from './views/Dashboard';
import Settings from './views/Settings';
import Sidebar from "./layout/Sidebar";

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from "./views/Login";
import Checklists from "./views/lists/Checklists";
import ChecklistForm from "./views/lists/ChecklistForm";
import ChecklistDetails from "./views/lists/ChecklistDetails";

function App() {

  const isLoginEnabled = false // use authentication hook here

  if(isLoginEnabled) {
    return (
      <Login />
    )
  }

  return (
    <Router>
      <div className="vh-100">
        <TopNav/>
        <div className="d-flex main-container">
          <Sidebar />
          <div className="w-100-pct">
            <Routes>
              <Route path="/" element={<Dashboard/>}/>
              <Route path="/todo" element={<Checklists/>}/>
              <Route path="/new-checklist" element={<ChecklistForm title="New" />}/>
              <Route path="/edit-checklist/:id" element={<ChecklistForm title="Edit" />}/>
              <Route path="/checklist/:id" element={<ChecklistDetails />}/>
              <Route path="/settings" element={<Settings/>}/>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
