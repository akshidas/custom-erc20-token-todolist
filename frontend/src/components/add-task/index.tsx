import { Box, Button, Stack, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TODO_CONTRACT_ADDRESS, TODO_TOKEN_CONTRACT_ADDRESS } from "config";
import dayjs from "dayjs";
import moment from "moment";
import { FunctionComponent } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useTodoList } from "store/todo-contract-context";
import { useTodoToken } from "store/todo-token-contract-context";

const AddTask: FunctionComponent = () => {
  const methods = useForm<Task>({
    defaultValues: {
      task: "",
      endTime: "",
    },
  });

  const { handleSubmit, register, setValue } = methods;
  const todoList = useTodoList();
  const todoToken = useTodoToken();
  const onSubmit = async (inputData: Task) => {
    try {
      const tokenApprove = await todoToken?.approve(TODO_CONTRACT_ADDRESS, 10);
      await tokenApprove.wait();

      const addTask = await todoList?.addTask(
        inputData.task,
        inputData.endTime,
      );

      const taskAdded = await addTask.wait();
      console.log(taskAdded);

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack>
            <TextField label="Add Task" {...register("task")} />
            <DatePicker
              onChange={(e) => {
                const date = moment(dayjs(e).format("MM/DD/YYYY"));
                const dateInUTC = moment.utc(date).toISOString();
                const UTCDateInSeconds = new Date(dateInUTC).getTime() / 1000;
                setValue("endTime", UTCDateInSeconds);
              }}
              renderInput={(params: any) => <TextField {...params} fullWidth />}
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
