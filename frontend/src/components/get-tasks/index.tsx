import { Box, Button, Checkbox, Stack, Typography } from "@mui/material";
import { FunctionComponent, useEffect, useState } from "react";
import { useTodoList } from "store/todo-contract-context";

type Task = {
  id: number;
  content: string;
  completed: boolean;
  startTime: number;
  endTime: number;
};

const GetTasks: FunctionComponent<{}> = () => {
  const [myTaskCount, setMyTaskCount] = useState(0);
  const todoListContract = useTodoList();
  const [tasks, setTasks] = useState<Task[]>([]);
  const getTaskLenght = async () => {
    try {
      const status = await todoListContract?.getTaskLength();
      setMyTaskCount(parseInt(status));
    } catch (err) {
      console.log(err);
    }
  };

  const getTask = async () => {
    const temp :Task[]= [];
    if (myTaskCount > 0) {
      for (let i = 0; i < myTaskCount; i++) {
        const task = await todoListContract?.getTask(i);
        temp.push({
          id: task[0].toString(),
          content: task[1],
          completed: task[2],
          startTime: parseInt(task[3]) * 1000,
          endTime: parseInt(task[4]) * 1000,
        });
      }
    }
    setTasks(temp);
  };
  useEffect(() => {
    getTask();
  }, [myTaskCount]);

  console.log(tasks);
  return (
    <Box>
      <Typography variant="body1">My Tasks: {myTaskCount}</Typography>
      {tasks.map(({ id, content, completed }) => {
        return (
          <Stack direction="row" key={id} alignItems="center">
            <Typography>{content}</Typography>
            <Checkbox checked={completed} />
          </Stack>
        );
      })}
      <Button onClick={getTaskLenght}>get tasks</Button>
    </Box>
  );
};

export default GetTasks;
