import 'loaders.css/src/animations/line-scale.scss';
import React, { lazy, Suspense } from "react";
import Loader from 'react-loaders';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ThemeProvider from "./theme";
import Layout from './layouts/Layout'


const Home = lazy(() => import("./pages/Home"));


function App() {
  return (
    <ThemeProvider>
      <Router>
        <Suspense
          fallback={
            <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
              <Loader type="line-scale" color="#0070C0" active />
            </div>
          }
        >
          <Routes>
            {/* <Route path="/*" element={<Error1 />} /> */}
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
            </Route>

          </Routes>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;
