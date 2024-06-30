import { useState } from "react";
import { useTodoList } from "store/todo-contract-context";

type UseConnectUser = {
    connectionStatus: ConnectionStatus;
    connectUser: () => void;
};

const useConnectUser = (): UseConnectUser => {
    const todoListContract = useTodoList();
    const [connectionStatus, setConnectionStatus] =
        useState<ConnectionStatus>("NOT_CONNECTED");

    const connectUser = async () => {
        setConnectionStatus("CONNECTING");
        try {
            if (todoListContract) {
                const isConnected = await todoListContract.isUserConnected();
                if (isConnected) {
                    setConnectionStatus("CONNECTED");
                    return;
                }
                const connectingUser = await todoListContract.connectUser();
                await connectingUser.wait()   ; 
                setConnectionStatus("CONNECTED");
            }
        } catch (err) {
            console.error(err);
            setConnectionStatus("FAILED");
        }
    };

    return { connectionStatus, connectUser };
};
export default useConnectUser;
