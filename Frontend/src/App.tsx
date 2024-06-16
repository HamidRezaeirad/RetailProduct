import React, { Suspense, lazy } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Navbar, Spinner } from "./components";

import "./App.css";

const Main = lazy(() => import("./containers/Main"));
const Detalis = lazy(() => import("./containers/Detalis"));
const NotFound = lazy(() => import("./containers/Notfound"));

/**
 *
 * @returns App react component
 */
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" Component={Main} />
            <Route path="/:id" Component={Detalis} />
            <Route path="/add-product" Component={NotFound} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
