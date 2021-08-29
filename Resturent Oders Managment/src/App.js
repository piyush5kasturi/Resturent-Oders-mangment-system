import React from "react";
import AuthForm from "./components/Auth/AuthForm";
import Main from "./components/Main";
import Layout from "./components/Layout/Layout";
import { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import AuthContext from "./store/auth-context";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Switch>
      <Route exact path="/">
        <Main />
      </Route>
      <Layout> 
      <Switch>
        <Route path="/login">
          <AuthForm />
        </Route>
        {authCtx.isLoggedIn && (
          <Route path="/home" exact>
            <HomePage />
          </Route>
        )}
        {!authCtx.isLoggedIn && (
          <Route path="/auth">
            <AuthPage />
          </Route>
        )}
        {authCtx.isLoggedIn && (
          <Route path="/profile">
            <UserProfile />
          </Route>
        )}
        <Route path="*">
          <Redirect to="/login" />
        </Route>
        </Switch>
      </Layout>
    </Switch>
  );
}

export default App;
