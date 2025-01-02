# Task Tracker

This task tracker web application serves as a simple yet effective project that combines React.js, Redux for state management, Bootstrap for responsive design, and simulated backend API calls to create a real-world-like task management system. The key challenges included managing the state of tasks efficiently, simulating a backend API, and ensuring data persistence. These challenges were addressed using state management solutions like Redux, Axios for API calls, and localStorage for persistence. The app also ensures a smooth and responsive experience for users across all devices.

## Deployed Link - 

## Prerequisites

- Node.js (version 14 or higher)
- NPM or Yarn for managing packages

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/aarmin9696/niramaya-soul-task-piyush-dwivedi.git
   cd niramaya-soul-task-piyush-dwivedi

2. Install dependencies:

   ```bash
   npm install

3. Running the Application:

   ```bash
   npm start

4. Build the Application:

   ```bash
   npm run build



## Features

- **Task List**: Displays all tasks fetched from the backend with their statuses and details.
- **Add Task**: Allows users to create new tasks by providing necessary details like title, description, and due date.
- **Edit Task**: Enables users to edit existing tasks.
- **Mark Task as Completed**: Provides an option to mark tasks as completed or pending.
- **Delete Task**: Allows users to delete tasks that are no longer needed.
- **Sorting Task**: Tasks can be sorted by status.
- **User Authentication**: Provides login functionality to secure access to task management.
- **Responsive Design**: The layout adjusts to different screen sizes for a seamless experience on both desktop and mobile devices.

## Structure

### Components
- Home: The main landing page of the Task Tracker app. It displays an overview of the tasks, including a list of tasks, options to add or manage tasks, and links to other sections like the login or user profile. It serves as the entry point for the user interface and includes the layout and structure for task management.
- TaskList: Displays all tasks and their details such as name and status. Tasks can be sorted, edited, or deleted.
- TaskItem: Represents an individual task. It includes the task's title, description, and a checkbox for marking the task as completed.
- AddTaskModal: A form component for adding/editing tasks.
- taskSlice.js: Manages the state of tasks using Redux Toolkit. It includes actions and reducers for fetching, adding, editing, deleting, and marking tasks as completed. It ensures the state is updated appropriately in the Redux store.
- api.js: Handles all API interactions for the app. It contains functions for making requests to the server (e.g., fetching tasks, adding new tasks, updating tasks, deleting tasks). It can manage API error handling and authentication headers.
- auth.js: Manages user authentication logic. It includes functions for logging in, logging out, and checking if the user is authenticated. It also manages authentication tokens and stores them in local storage or cookies for session management.
  
