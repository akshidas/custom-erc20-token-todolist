import { Card, Container, Stack, Typography } from "@mui/material";
import ConnectUser from "components/connect-user";
import GetAddress from "components/get-address";
import GetTaskLength from "components/get-task-length";
import TodoProvider from "store/todo-contract-context";

const App = () => {
    return (
        <TodoProvider>
            <Typography variant="h1">Todo List</Typography>
            <Container>
                <Card>
                    <Stack>
                        <GetAddress />
                        <ConnectUser />
                        <GetTaskLength />
                    </Stack>
                </Card>
            </Container>
        </TodoProvider>
    );
};

export default App;
