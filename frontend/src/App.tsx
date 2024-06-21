import { Button, Typography } from "@mui/material";
import TodoProvider from "store/todo-contract-context";

const App = () => {
    return (
        <TodoProvider>
            <Typography variant="h1">Todo List</Typography>
            <Button>Connect</Button>
        </TodoProvider>
    );
};

export default App;
