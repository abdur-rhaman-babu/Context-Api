/* eslint-disable react/prop-types */
import User from "./User";
import useUserContext from "../../Hook/useUserContext";
import NewUser from "./NewUser";

const Users = () => {
    const {users}=useUserContext()
    console.log(users);
    return (
        <section className="mainContent">
            {
                users && users.map((user)=><User key={user.id} user = {user}/>)
            }
             <NewUser />
        </section>
    );
};

export default Users;