// Sample JSON data for transactions
const transactionsData = {
    "transactions": [
      {
        "id": "trans001",
        "newValue": 500,
        "positiveValue": 300,
        "negativeValue": 200,
        "receivedAmount": 700,
        "debitedAmount": 400,
        "limitValue": 1000,
        "isApproachingLimit": false
      },
      {
        "id": "trans002",
        "newValue": 950,
        "positiveValue": 500,
        "negativeValue": 450,
        "receivedAmount": 600,
        "debitedAmount": 200,
        "limitValue": 1000,
        "isApproachingLimit": true
      }
    ]
  };
  
  // Function to update the isApproachingLimit property
  function updateApproachingLimit(data, thresholdPercentage = 10) {
    data.transactions.forEach(transaction => {
      const threshold = transaction.limitValue * (thresholdPercentage / 100);
      transaction.isApproachingLimit = (transaction.newValue >= transaction.limitValue - threshold);
    });
  }
  
  // Call the function to update the JSON data
  updateApproachingLimit(transactionsData);
  
  // Output the updated JSON data
  console.log("Updated Transactions Data:");
  console.log(JSON.stringify(transactionsData, null, 2));
  
  // Sample JSON data for motivational messages
  const messagesData = {
    "motivationalMessages": [
      "Believe in yourself and all that you are.",
      "Your limitation—it's only your imagination.",
      "Push yourself, because no one else is going to do it for you.",
      "Sometimes later becomes never. Do it now.",
      "Great things never come from comfort zones.",
      "Dream it. Wish it. Do it.",
      "Success doesn’t just find you. You have to go out and get it.",
      "The harder you work for something, the greater you’ll feel when you achieve it.",
      "Dream bigger. Do bigger.",
      "Don’t stop when you’re tired. Stop when you’re done."
    ]
  };
  
  // Function to get a random motivational message
  function getRandomMotivationalMessage(data) {
    const messages = data.motivationalMessages;
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
  }
  
  // Display the random motivational message
  console.log("Random Motivational Message:");
  console.log(getRandomMotivationalMessage(messagesData));
  