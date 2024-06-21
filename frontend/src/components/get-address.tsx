import { Button, Typography } from "@mui/material";
import { useState } from "react";
import { useTodoList } from "store/todo-contract-context";

const GetAddress = () => {
    const todoListContract = useTodoList();

    const [address, setAddress] = useState<string>("");
    const viewAddress = async () => {
        const address = await todoListContract?.getAddress();
        if (address) {
            setAddress(address);
        }
    };
    return (
        <div>
            <Button onClick={viewAddress}>view address</Button>
            <Typography variant="h5">Contract Address: {address}</Typography>
        </div>
    );
};

export default GetAddress;
