import UserProvider from "../Context/UsersContext";
import "./User.css";
import Users from "./Users";
const UserHome = () => {
  return (
    <UserProvider>
      <div>
        <Users />
      </div>
    </UserProvider>
  );
};

export default UserHome;
