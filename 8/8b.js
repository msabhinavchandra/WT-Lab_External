function registerUser(username) {
  return new Promise((resolve, reject) => {
    // Simulating API call with a timeout
    setTimeout(() => {
      // Simulate successful registration with 80% probability
      if (Math.random() < 0.8) {
        console.log(`User ${username} registered successfully.`);
        resolve(username);
      } else {
        reject(`Failed to register user ${username}.`);
      }
    }, 1000);
  });
}
// Simulate an API call to send a confirmation email
function sendConfirmationEmail(username) {
  return new Promise((resolve, reject) => {
    // Simulating API call with a timeout
    setTimeout(() => {
      // Simulate successful email sending with 90% probability
      if (Math.random() < 0.9) {
        console.log(`Confirmation email sent to ${username}.`);
        resolve(`Email sent to ${username}`);
      } else {
        reject(`Failed to send email to ${username}.`);
      }
    }, 500);
  });
}
// Register a user and send confirmation email
function registerAndSendEmail(username) {
  return registerUser(username)
    .then(sendConfirmationEmail)
    .catch((error) => {
      console.error(error);
    });
} // Register multiple users concurrently
function registerMultipleUsers(usernames) {
  const promises = usernames.map((username) => {
    return registerAndSendEmail(username)
      .then(() => {
        console.log(`Process completed for ${username}`);
      })
      .catch((error) => {
        console.error(`Error in process for ${username}: ${error}`);
      });
  });
  return Promise.all(promises)
    .then(() => {
      console.log("All users processed.");
    })
    .catch((error) => {
      console.error("Error in processing users:", error);
    });
}
const users = ["user1", "user2", "user3", "user4"];
registerMultipleUsers(users);
