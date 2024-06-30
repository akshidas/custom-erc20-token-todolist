import { Box, Button } from "@mui/material";
import { FunctionComponent } from "react";
import useGetTaskLength from "./hooks/use-get-task-length";

const GetTaskLength: FunctionComponent = () => {
    const { getTaskLength, taskLength } = useGetTaskLength();

    return (
        <Box>
            <Button onClick={getTaskLength}>get Length: {taskLength}</Button>
        </Box>
    );
};

export default GetTaskLength;
