mport React from "react";
import "./styles.css";
import UserList from "./comp/UserList";
import BestFriendsList from "./comp/BestFriendsList";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="users">
          <UserList />
        </div>
        <div className="best_friends">
          <BestFriendsList />
        </div>
      </div>
    );
  }
}
export default App;
