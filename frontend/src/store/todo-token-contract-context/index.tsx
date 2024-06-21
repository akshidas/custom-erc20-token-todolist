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

export const todoTokenContext = createContext<null | Contract>(null);
export const useTodoToken = () => useContext(todoTokenContext);

const CONTRACT_ID = "0xFb5322855b7950EB3e476BE0bd4b1D32B108fC15";

const TodoTokenProvider: FunctionComponent<{ children: ReactNode }> = ({
    children,
}) => {
    const [todoTokenContract, setTodoTokenContract] = useState<null | Contract>(
        null
    );

    useEffect(() => {
        connectToContract(CONTRACT_ID, abi)
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
