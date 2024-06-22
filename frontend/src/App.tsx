import { Card, Container, Stack, Typography } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import AddTask from "components/add-task";
import ConnectUser from "components/connect-user";
import GetAddress from "components/get-address";
import GetTaskLength from "components/get-task-length";
import TodoProvider from "store/todo-contract-context";
import TodoTokenProvider from "store/todo-token-contract-context";

const App = () => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
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
        </LocalizationProvider>
    );
};

export default App;
