# Messaging Web Application

Welcome to the Web Messaging application. This application is built majorly using Bootstrap, Javascript, React and Node.js. This is the front end section of the README.md file.

## Setup

1. **Install XAMPP:**
   - Download and install XAMPP from the [official website](https://www.apachefriends.org/index.html).
   
2. **Start APACHE & MYSQL:**
   - Open the XAMPP control panel.
   - Start the APACHE & MYSQL services.

3. **Verify Apache and MySQL:**   
   - Open your web browser and go to [http://localhost](http://localhost).
   - Access [http://localhost/phpmyadmin](http://localhost/phpmyadmin) to verify MYSQL is running.

4. **Install Visual Studio Code:**
   - Download and install Visual Studio Code.

5. **Install Laragon:**
   - Download and install Laragon from the [official website](https://laragon.org/download/).
   - Laragon comes with phpMyAdmin for managing the relational database.



## Running the Application

1. **Clone the Repository:**
   - Clone this repository to your local machine using `git clone https://github.com/martin888maina/your-repository.git`.

2. **Navigate to the Project Directory:**
   - Open the cloned repository in Visual Studio Code.

3. **Install Dependencies:**
   - Open a terminal in Visual Studio Code.
   - Run `npm install` to install all the required dependencies.

4. **Start the Development Server:**
   - Run `npm start` to start the development server.

5. **Access the Application:**
   - Once the development server is running, open your web browser and go to [http://localhost:3000](http://localhost:3000) to access the application.


## Pages

1. **LandingPage.js:**
   - LandingPage acts as the Landing page for the application.
   - It contains links to the Registration and Login Forms.

2. **LoginForm.js:**
   - Login form allows access to the system.
   - Access is controlled based on roles. 
   - Admin users are directed to the admin dashboard.
   - Normal Users are directed to the user dashboard.
   - How to Use: Enter the Email & Password credentials and click to log in.
  
3. **Logout.js:**
   - Logout page logs out the user from the system.
   - On successful operation the user is logged out and directed to the Landing page.
   - How to Use: Click on the log out button.

4. **MessageDashboard.js:**
   - MessageDashboard page allows the agents to respond to the incoming messages from customers.
   - The messages are presented in a streamlined fashion
   - Multiple agents can log in and respond to incoming messages.

5. **MessageForm.js:**
   - MessageForm page submits new messages from users.
   - How to Use: Type your message and click "Send" to Broadcast.

6. **Navbar.js:**
   - Navbar page allows for navigation through the application.
   - How to Use: Click on "Register" to create an account.
   - Click on "Login" to access your account, and "Logout" to log out.

7. **RegisterForm.js:**
   - RegisterForm page allows for registration of new users into the system.
   - How to use: Enter the Email address, enter the password and confirm the password.

8. **UserDashboard.js:**
   - UserDashboard page allows the users to write up question sthat they want to ask.
   - The messages appear in the MessageDashboard page in real time.
   - Users can receive response in real time from agents.
   - How to use: Type in your message and click "Send Message" to send.

9. **DeleteData.js:**
   - CRUD operations on user data.
   - Deletion of user record.

10. **DetailData.js:**
   - CRUD operations on user data.
   - Displaying a single user record.

11. **UpdateData.js:**
    - CRUD operations on user data.
    - Updating a user record.

12. **DisplayData:**
    - CRUD operations on user data.
    - Displaying all user records.

## Dependencies

- **Node.js**: JavaScript runtime for building server-side applications.
- **React**: JavaScript library for building user interfaces.
- **Axios**: Promise-based HTTP client for the browser and Node.js.
- **Bootstrap**: Front-end framework for building responsive websites
- **React**: JavaScript library for building user interfaces.
- **React Bootstrap**: Bootstrap components built with React.
- **React Router DOM**: DOM bindings for React Router, enabling dynamic routing.
- **React Toastify**: Notification library for React applications.
- **Socket.IO Client**: WebSocket library for real-time event-based communication.   

 
## Known Issues

- Issue with implementing Forgot Password functionality using nodemailer:
  - Issue with reset link having undefined instead of the actual email address.
  - Status: Under investigation.

## License

This Messaging Application is open-sourced software licensed under the [MIT License](LICENSE).


## Acknowledgements

- I would like to acknowledge the developers and maintainers of the libraries and frameworks used in this project for their contributions.

