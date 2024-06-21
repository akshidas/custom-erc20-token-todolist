import { Contract } from "ethers";
import {
    FunctionComponent,
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";
import connectToContract from "./connect-to-contract";

declare global {
    interface Window {
        ethereum?: any;
    }
}

export const todoTokenContext = createContext<null | Contract>(null);
export const useTodoToken = () => useContext(todoTokenContext);

const TodoTokenProvider: FunctionComponent<{ children: ReactNode }> = ({
    children,
}) => {
    const [todoTokenContract, setTodoTokenContract] = useState<null | Contract>(
        null
    );

    useEffect(() => {
        connectToContract()
            .then(async (todoTokenContract) => {
                setTodoTokenContract(todoTokenContract);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <todoTokenContext.Provider value={todoTokenContract}>
            {children}
        </todoTokenContext.Provider>
    );
};
export default TodoTokenProvider;
