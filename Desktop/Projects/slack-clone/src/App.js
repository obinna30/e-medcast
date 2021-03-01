import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "./Chat";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Login from "./Login";
import Spinner from "react-spinkit"

function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <div className="appLoading">
        <div className="appLoading_content">
          <img
            src="https://png.pngtree.com/png-vector/20190115/ourmid/pngtree-vector-health-icon-png-image_319656.jpg"
            alt=""
          />
          <Spinner
            name="ball-spin-fade-loader"
            color="purple"
            fadein='none'
           />
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className="app_body">
              <Sidebar />

              <Switch>
                {/* <Route path="/room/:roomId">
                
              </Route> */}
                <Route exact path="/">
                  <Chat />
                </Route>
              </Switch>
            </div>
          </>
        )}
      </Router>

      {/* <Sidebar/> */}
      {/* <ChatScreen/> */}
    </div>
  );
}

export default App;
