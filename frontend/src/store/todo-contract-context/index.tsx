import { TODO_CONTRACT_ADDRESS } from "config";
import { Contract } from "ethers";
import {
    FunctionComponent,
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";
import connectToContract from "utils/connect-to-contract";
import abi from "./abi.json";

export const todoContractContext = createContext<null | Contract>(null);
export const useTodoList = () => useContext(todoContractContext);

const TodoProvider: FunctionComponent<{ children: ReactNode }> = ({
    children,
}) => {
    const [todoContract, setTodoContract] = useState<null | Contract>(null);

    useEffect(() => {
        connectToContract(TODO_CONTRACT_ADDRESS, abi)
            .then(async (todoContract) => {
                setTodoContract(todoContract);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <todoContractContext.Provider value={todoContract}>
            {children}
        </todoContractContext.Provider>
    );
};
export default TodoProvider;
