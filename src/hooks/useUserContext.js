
import { useContext } from "react";
import { UserContext } from "../context/userContext";

export const useUserContext = () => { 
    const context = useContext(UserContext)

    if (!context) {
        throw Error(
            "useWorkoutsContext must be used within a WorkoutsContextProvider"
        )
    }
    return context
}