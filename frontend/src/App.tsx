import { Card, Container, Stack, Typography } from "@mui/material";
import AddTask from "components/add-task";
import ConnectUser from "components/connect-user";
import GetAddress from "components/get-address";
import GetTaskLength from "components/get-task-length";
import TodoProvider from "store/todo-contract-context";
import TodoTokenProvider from "store/todo-token-contract-context";

const App = () => {
    return (
        <TodoTokenProvider>
            <TodoProvider>
                <Typography variant="h1">Todo List</Typography>
                <Container>
                    <Card>
                        <Stack>
                            <GetAddress />
                            <ConnectUser />
                            <GetTaskLength />
                            <AddTask />
                        </Stack>
                    </Card>
                </Container>
            </TodoProvider>
        </TodoTokenProvider>
    );
};

export default App;
