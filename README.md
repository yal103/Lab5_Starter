# Lab 5 - Starter

### Contributors: Yangyang Liu

### Pt 3. Unit Testing with Jest

1. Would you use a unit test to test the "message" feature of a messaging application? Why or why not? For this question, assume the "message" feature allows a user to write and send a message to another user.

> I would **not** rely solely on unit tests to test the "message" feature of a messaging application because they are designed to test and debug on a small scale, like individual functions or components. The "message" feature requires multiple components and how they interact with each other, like the frontend, networks, and databases (backend). This situation is better suited for integration tests.

2. Would you use a unit test to test the "max message length" feature of a messaging application? Why or why not? For this question, assume the "max message length" feature prevents the user from typing more than 80 characters.

> I **would** use a unit test to test the "max message length" feature of a messaging application because it is simple and isolated from other components in the application. We can easily write test cases to check if the function correctly limits the message length to 80 characters. We don't need to worry about how this feature interacts with other components in the application, so unit tests are perfect for this situation.
