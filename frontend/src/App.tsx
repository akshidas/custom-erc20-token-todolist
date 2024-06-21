import { Card, Container, Typography } from "@mui/material";
import ConnectUser from "components/connect-user";
import GetAddress from "components/get-address";
import TodoProvider from "store/todo-contract-context";

const App = () => {
    return (
        <TodoProvider>
            <Typography variant="h1">Todo List</Typography>
            <Container>
                <Card>
                    <GetAddress />
                    <ConnectUser />
                </Card>
            </Container>
        </TodoProvider>
    );
};

export default App;
