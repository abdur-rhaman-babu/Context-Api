import { useContext } from "react";
import { UsersContext } from "../Components/Context/UsersContext";

export const useUserContext = () => {
    return useContext(UsersContext)
};

export default useUserContext;