import React, { useEffect, useState } from 'react';
import ReactDOM from "react-dom/client";
// react library for routing
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// plugins styles from node_modules
import "react-notification-alert/dist/animate.css";
import "react-perfect-scrollbar/dist/css/styles.css";
import "sweetalert2/dist/sweetalert2.min.css";
import "select2/dist/css/select2.min.css";
import "quill/dist/quill.core.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
// plugins styles downloaded
import "assets/vendor/nucleo/css/nucleo.css";
// core styles
import "assets/scss/argon-dashboard-pro-react.scss?v1.2.1";

import AdminLayout from "layouts/Admin.js";
import IndexView from "views/Index.js";

import Loader from 'views/main/helpers/Loader';
// import ImageLoader from 'views/main/helpers/ImageLoader';
// import LoaderHorizontal from 'views/main/helpers/LoaderHorizontalCenter';

import { useAuthentication } from './utils/auth';

const App = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const authenticated = useAuthentication();

  useEffect(() => {
    console.log("i am here");
    const checkAuthentication = async () => {
      try {
        const auth = await authenticated;
        setIsAuthenticated(auth);
      } catch (error) {
        console.error('Error during authentication:', error);
        setIsAuthenticated(false);
      }
    };
    checkAuthentication();
  }, []);

  if (isAuthenticated === null) {
    // Authentication check is still in progress, you might show a loading spinner or message
    return <Loader />;
  }

  console.log("i am out", isAuthenticated);
  // return <LoaderHorizontal />;
  return (
    <BrowserRouter>
      <Routes>
        {isAuthenticated === true ? (
          <>
            <Route path="/admin/*" element={<AdminLayout />} />
            <Route
              path="/"
              element={<Navigate to="/admin/dashboard" replace={true} />}
            />
          </>
        ) : (
          <Route path="/*" element={<Navigate to="/" replace={true} />} />
        )}
        <Route path="/" element={<IndexView />} />
        <Route path="*" element={<AdminLayout />} />
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);