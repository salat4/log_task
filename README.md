Description
This project is built with Next.js and TypeScript to display log data in real-time. The log data is fetched from an API and displayed with auto-scrolling functionality. Users can toggle auto-scrolling on or off.

Requirements
Node.js (version 18.17.0 or later)
npm (version 7 or later)
Setup
Clone the repository:

bash

git clone https://github.com/yourusername/log_task.git
cd log_task
Install dependencies:


npm install
Download the log file:

Download the build.log file from this link: [Download build.log](https://drive.google.com/file/d/1POWpaw3YUaUe6zziqmWYkJfg4vgq9Wnv/view?usp=sharing)

Place the log file:

Move the downloaded build.log file into the root directory of the project:


/log_task
├── build.log
├── components
├── pages
├── public
└── ...
Running the Project
Development mode:

Start the project in development mode:


npm run dev
Access the project at: http://localhost:3000

Production mode:

Build the project for production:


npm run build
Then start the production server:

npm start
Access the project at: http://localhost:3000

Features
Auto-scrolling: Automatically scrolls to the bottom as new log data arrives. Users can toggle this feature with a button.
Simple Interface: Logs are displayed in a clear, text-based format.
