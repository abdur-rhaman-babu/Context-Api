import { useContext } from "react";
import { UserContext } from "./UseContext/UserContext";
const Component5 = () => {
const user = useContext(UserContext)
console.log(user);
    return (
        <div>
            
        </div>
    );
};

export default Component5;