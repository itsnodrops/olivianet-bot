// Olivia Network Bot Configuration

const CONFIG = {
    messagesPerAgent: 5,  // Number of messages to send per agent session
    delayBetweenMessages: [5, 10],  // Random delay between messages (seconds)
    delayBetweenAgents: [5, 10],  // Random delay between agent sessions (seconds)
    delayBetweenAccounts: [10, 20],  // Random delay between accounts (seconds)
    maxRetries: 3  // Max retries on errors
};

export default CONFIG;
