import Component3 from "./Component3";
import { useContext } from "react";
import { UserContext } from "./UserContext";
const Component2 = () => {
    const user = useContext(UserContext)
    return (
        <div>
            <h1>{user.Id}</h1>
            <Component3/>
        </div>
    );
};

export default Component2;