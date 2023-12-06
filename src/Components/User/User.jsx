/* eslint-disable react/prop-types */
import useUserContext from "../../Hook/useUserContext";

const User = ({user}) => {
    const {users,setUsers}=useUserContext()
   const {id,name,username} = user;

// delete card
  const deleteCard = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };
    return (
        <article className="singleCard">
            <h3>ID:{id}</h3>
            <p>Name: {name}</p>
            <p>Username: {username}</p>
            <button onClick={()=>deleteCard(id)}>Delete</button>
        </article>
    );
};

export default User;