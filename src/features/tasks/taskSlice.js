import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [
      {
        createdOn: "15/07/2024",
        task: "Get Groceries from the market.",
        status: "Pending",
      },
      {
        createdOn: "15/07/2024",
        task: "Go to gym.",
        status: "Completed",
      },
      {
        createdOn: "15/07/2024",
        task: "Get my room cleaned.",
        status: "Completed",
      },
      {
        createdOn: "16/07/2024",
        task: "Go to the park.",
        status: "Completed",
      },
      {
        createdOn: "16/07/2024",
        task: "Get my room cleaned.",
        status: "Pending",
      },
    ],
  },
  reducers: {
    toggleTaskStatus: (state, action) => {
      const { index } = action.payload; 
      const task = state.tasks[index];

      if (task) {
        task.status = task.status === "Completed" ? "Pending" : "Completed";
      }
    },
  },
});

export const { toggleTaskStatus } = taskSlice.actions;

export default taskSlice.reducer;
