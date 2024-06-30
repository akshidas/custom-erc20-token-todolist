import { useState } from "react";
import { useTodoList } from "store/todo-contract-context";
type UseGetTaskLength = {
    taskLength: string;
    getTaskLength: () => void;
};
const useGetTaskLength = (): UseGetTaskLength => {
    const todoListContract = useTodoList();
    const [taskLength, setTaskLength] = useState("0");

    const getTaskLength = async () => {
        if (!todoListContract) return;
        try {
            const length = await todoListContract.getTaskLength();
            setTaskLength(length.toString());
        } catch (error) {
            console.error(error);
        }
    };
    return { taskLength, getTaskLength };
};

export default useGetTaskLength;
