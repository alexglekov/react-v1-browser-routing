import './App.css';
import {BrowserRouter as Router, Navigate, Redirect, Route, Routes} from "react-router-dom";
import Ruspage from "./Components/Ruspage";
import Header from "./Components/Header";
import Engpage from "./Components/Engpage";
import Choose from "./Components/Choose";
import classes from "./Components/CSSModules/App.module.css"


function App() {
  return (

      <Router>
            <div className="App">
              <Header />
                <Routes>
                    <Route path="/" element={<Navigate to="/api/v1/language/change" />} />
                    <Route path="/api/v1/language/change" element={<Choose/>}/>
                  <Route path="/rus" element={<Ruspage/>}/>
                  <Route path="/eng" element={<Engpage/>}/>
                </Routes>
            </div>
      </Router>
  );
}

export default App;
