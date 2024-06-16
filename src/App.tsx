import "./App.css";
import { Async } from "./pages/Async";
import { UncontrolledFormPage } from "./pages/UncotrolledFormPage";
import { Home } from "./pages/Home";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import { PushWorker } from "./pages/PushWorker";
import { useEffect } from "react";
import { PerformanceWorker } from "./pages/PerformanceWorker";
import { ControlledFormPage } from "./pages/ControlledFormPage";
import { FormInputs } from "./pages/FormInputs";
import { TypeVsInterface } from "./pages/TypeVsInterface";

function App() {
  useEffect(() => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          console.log("Notification permission granted.");
        } else {
          console.log("Notification permission denied.");
        }
      });
    }
  }, []);

  return (
    <Router>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/type-vs-interface">Type vs Interface</Link>
          </li>
          <li>
            <Link to="/form-inputs">Form Inputs</Link>
          </li>
          <li>
            <Link to="/controlled">Controlled Form</Link>
          </li>
          <li>
            <Link to="/uncontrolled">Uncontrolled Form</Link>
          </li>
          <li>
            <Link to="/async">Async</Link>
          </li>
          <li>
            <Link to="/push-worker">Push Worker</Link>
          </li>
          <li>
            <Link to="/performance-worker">Performance Worker</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/type-vs-interface" element={<TypeVsInterface />} />
        <Route path="/async" element={<Async />} />
        <Route path="/form-inputs" element={<FormInputs />} />
        <Route path="/uncontrolled" element={<UncontrolledFormPage />} />
        <Route path="/controlled" element={<ControlledFormPage />} />
        <Route path="/push-worker" element={<PushWorker />} />
        <Route path="/performance-worker" element={<PerformanceWorker />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
