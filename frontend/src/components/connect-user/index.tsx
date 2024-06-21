import { Box, Button } from "@mui/material";
import { FunctionComponent, useMemo } from "react";
import useConnectUser from "./hooks/use-connect-user";
import getLabel from "./utils/get-label";

const ConnectUser: FunctionComponent<{}> = () => {
    const { connectUser, connectionStatus } = useConnectUser();

    const buttonState: ButtonState = useMemo(
        () => getLabel(connectionStatus),
        [connectionStatus]
    );

    return (
        <Box>
            <Button color={buttonState.color} onClick={connectUser}>
                {buttonState.label}
            </Button>
        </Box>
    );
};

export default ConnectUser;
