import React from "react";
import { Route, Switch } from "react-router-dom";
import VerifyPage from "./pages/Verify.js";
import UploadPage from "./pages/Upload.js";
import AdminPage from "./pages/Admin.js";
import HomePage from "./pages/Home.js";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/AdminPanel">
          <AdminPage />
        </Route>
        <Route path="/Verify">
          <VerifyPage />
        </Route>
        <Route path="/Upload">
          <UploadPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
