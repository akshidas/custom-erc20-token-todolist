import { Typography } from "@mui/material";
import GetAddress from "components/get-address";
import TodoProvider from "store/todo-contract-context";

const App = () => {
    return (
        <TodoProvider>
            <Typography variant="h1">Todo List</Typography>
            <GetAddress />
        </TodoProvider>
    );
};

export default App;
