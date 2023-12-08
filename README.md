This is a basic message board web application that allows users to send messages and view them in a message board format. Messages are displayed in individual boxes with timestamps.

# Usage
Type your message in the input box.  
Click the "Send" button or press Enter to send the message.  
View your messages displayed on the message board below.  

# Files
index.html: The main HTML file containing the structure of the web page. <br>
style.css: The CSS file containing styles for the web page.  
script.js: The JavaScript file providing functionality for sending and displaying messages.  

# Explanation of Components
The HTML code represents a simple web page for a message board application. The page includes a container that encapsulates two main sections: an input container and a message board container. The input container contains an input field for users to enter messages and a "Send" button to submit their messages. When the "Send" button is pressed, the sendMessage() function is called. The HTML file links to the stylesheet for styling, and references the JavaScript file to handle the functionality of sending and displaying messages.   

The sendMessage() function in the provided JavaScript code serves handles user input in the message board. After the user clicks the Send button or presses Enter in the input box, the function retrieves the message, checks if it exceeds a 128-character limit, and ensures it is not empty or solely whitespace. If these conditions are met, the function proceeds to generate a timestamp, creates a new message box with the message and timestamp, and appends it to the top of the message board. This ensures that the most recent messages are at the top. Additionally, the function clears the input box after successfully sending a message.  

# Requirements
The user can type a message into the input box and post it to the message board by clicking on the send button or by presising Enter. If the message is empty, it will not post to the board and if it is over 128 characters the page will give an alert saying that the message is too long.  <br>

Messages on the message board show up from most to least recent. New messages are inserted at the top of the message flow.  <br>

I was not able to fulfill the requirement that users on different computers can post to the same board and view each other’s messages. If I were to have implemented this requirement, I would've hooked up a database to my program to keep track of all the input made to the board across multiple devices. I attempted this, but was not able to figure out how to properly hook up the database without many errors.   

# How To Start the Application
Paste this into your browser: https://c4c-message-board.replitnu.repl.co/
