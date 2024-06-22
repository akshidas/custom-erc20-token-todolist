import { useTodoList } from "store/todo-contract-context";
import { useTodoToken } from "store/todo-token-contract-context";

const useAddTask = () => {
    const tokenContract = useTodoToken();
    const todoListContract = useTodoList();

    const addTask = async () => {
        try {
            const todoListAddress = await todoListContract?.getAddress();
            const status = await tokenContract?.approve(todoListAddress, 10);
            await status.wait();

            var date = new Date("07/14/2024 16:00:00"); // some mock date

            await todoListContract?.addTask(
                "This is my first Task",
                date.getTime() / 1000
            );
        } catch (err) {
            console.log(err);
        }
    };
    return addTask;
};

export default useAddTask;
