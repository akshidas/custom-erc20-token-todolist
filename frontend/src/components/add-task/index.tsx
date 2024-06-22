import { Box, Button, Stack, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { FunctionComponent } from "react";
import { FormProvider, useForm } from "react-hook-form";

const AddTask: FunctionComponent = () => {
    const methods = useForm<Task>({
        defaultValues: {
            task: "",
            endTime: "",
        },
    });

    const { handleSubmit, register } = methods;
    const onSubmit = async (inputData: Task) => {
        console.log(inputData);
    };

    return (
        <Box>
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Stack>
                        <TextField label="Add Task" {...register("task")} />
                        <DatePicker
                            renderInput={(params) => (
                                <TextField {...params} fullWidth />
                            )}
                            label="Controlled picker"
                        />
                        <Button type="submit">add task</Button>
                    </Stack>
                </form>
            </FormProvider>
        </Box>
    );
};

export default AddTask;
