# Olivia Network Bot

Automated bot for interacting with AI agents on the Olivia Network marketplace with support for multi-account, proxy rotation, and concurrent processing.

> ⚠️**WARNING**⚠️ \
> **Code Obfuscation Notice**: This script will be obfuscated to prevent unauthorized code redistribution. The full source code will be shared publicly after the event ends.

## 📑 Table of Contents

- [Features](#-features)
- [Requirements](#-requirements)
- [Quick Start](#-quick-start)
- [How It Works](#-how-it-works)
- [Configuration](#️-configuration)
- [Special Agent Support](#-special-agent-support)
- [Data Storage](#-data-storage)
- [Troubleshooting](#️-troubleshooting)
- [Utility Scripts](#-utility-scripts)
- [Notes](#-notes)

## ✨ Features

- 🔐 **Twitter Authentication** - Secure authentication with Olivia Network
- 🤖 **AI Agent Chat** - Discover and interact with marketplace AI agents  
- 💳 **Credit Tracking** - Monitor marketplace credits
- ✅ **Auto Tasks** - Automatically claim and complete available tasks
- 👥 **Multi-Account** - Process multiple accounts with unique fingerprints
- 🚀 **Concurrent Processing** - Run multiple accounts simultaneously based on proxy count
- 🔄 **Proxy Support** - HTTP, HTTPS, SOCKS4, and SOCKS5 proxies with automatic rotation
- 🎭 **Unique User Agents** - Each account gets a persistent, unique browser fingerprint
- 📝 **Conversation Management** - Customizable chat messages with special agent support
- ⏱️ **Human-like Behavior** - Randomized delays and natural interaction patterns
- 📊 **CLI Dashboard** - Real-time monitoring of all account activities

## 📋 Requirements

- **Node.js** (v16 or higher)
- **npm** (Node Package Manager)
- **Olivia Network Operator Account** - Required to use the bot. [**CLICK HERE**](https://operator.olivianetwork.com?ref=#OPQIXPN7) to register.
- **Twitter Accounts** - Twitter accounts connected to Olivia Network
- **Account Credentials** - Special credentials required (see Quick Start)
- **Proxies** (Optional but recommended) - For concurrent processing and IP rotation

## 🚀 Quick Start

### 1. Get Account Credentials

**IMPORTANT**: Step to get account credentials is only available through our Telegram channel.  
**[![Telegram](https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/14px-Telegram_logo.svg.png)](https://t.me/NoDrops) [NoDrops Telegram Channel](https://t.me/NoDrops)** \
**[![Telegram](https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/14px-Telegram_logo.svg.png)](https://t.me/NoDropsChat) [NoDrops Telegram Group](https://t.me/NoDropsChat)**

Without valid credentials, the bot cannot authenticate with Olivia Network.

### 2. Clone or Download the Repository

**Option A: Clone with Git**
```bash
git clone https://github.com/itsnodrops/olivianet-bot.git
cd olivianet-bot
```

**Option B: Download ZIP**
1. Download the repository as a ZIP file
2. Extract the ZIP file
3. Navigate to the extracted folder:
   - **Windows**: `cd path\to\olivianet-bot`
   - **macOS/Linux**: `cd path/to/olivianet-bot`

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Accounts

Edit `accounts.txt` with your account credentials (one per line):
```json
{"twitter_id":"your_twitter_id_1","handle":"username1","auth_id":"your_auth_token_1"}
{"twitter_id":"your_twitter_id_2","handle":"username2","auth_id":"your_auth_token_2"}
```

### 5. Add Proxies (Optional)

Edit `proxies.txt` to add your proxies (one per line):
```
http://user:pass@proxy1.com:8080
socks5://user:pass@proxy2.com:1080
socks4://proxy3.com:1080
```

**Supported formats:**
- HTTP: `http://user:pass@host:port` or `http://host:port`
- HTTPS: `https://user:pass@host:port` or `https://host:port`
- SOCKS5: `socks5://user:pass@host:port` or `socks5://host:port`
- SOCKS4: `socks4://user:pass@host:port` or `socks4://host:port`

### 6. Customize Messages (Optional)

Edit `message.txt` to customize chat messages (one per line):
```
Hello!
How are you?
Tell me more about yourself
What can you help me with?
```

### 7. Run the Bot

```bash
npm start
```

## 📊 How It Works

### Processing Flow

1. **Authentication** - Logs in with Twitter credentials or reuses valid tokens
2. **Task Processing** - Automatically claims and completes available tasks
3. **Credit Check** - Verifies marketplace credits are available
4. **Agent Discovery** - Fetches available AI agents from marketplace
5. **Chat Session** - Interacts with random agents using custom messages
6. **Monitoring** - Tracks credits, points, and message counts in real-time

### Concurrent Processing

The bot processes multiple accounts simultaneously based on proxy count:
- **3 proxies** → 3 accounts run at the same time
- **5 proxies** → 5 accounts run at the same time
- **No proxies** → 1 account at a time

### User Agent & Proxy Management

- Each account gets a **unique user agent** automatically
- User agents are **saved persistently** in `data.json`
- Proxies are **assigned round-robin** to accounts
- Both ensure accounts have **unique fingerprints**

## ⚙️ Configuration

Edit `config.js` to customize bot behavior:

```javascript
const CONFIG = {
  messagesPerAgent: 5,              // Messages to send per agent
  delayBetweenMessages: [5, 10],    // Random delay between messages (seconds)
  delayBetweenAgents: [5, 10],      // Delay between agent sessions (seconds)
  delayBetweenAccounts: [10, 20],   // Delay between account batches (seconds)
  maxRetries: 3                     // Max retries on errors
};
```

## 🎮 Special Agent Support

**Tic Tac Toe Agent** (`db55aece-8c18-4715-877f-337e43d78040`):
- Automatically uses valid game moves: A1, A2, A3, B1, B2, B3, C1, C2, C3
- Ignores regular messages from `message.txt`

## 💾 Data Storage

Account data is stored in `src/utils/data.json`:
```json
{
  "username1": {
    "access_token": "...",
    "refresh_token": "...",
    "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)...",
    "last_login": "2024-11-28T10:30:00.000Z",
    "points": 100,
    "operator_id": "...",
    "user_id": "...",
    "completed_tasks": ["task_id_1", "task_id_2"]
  }
}
```

## 🛠️ Troubleshooting

| Issue | Solution |
|-------|----------|
| No accounts loaded | Check `accounts.txt` format - each line must be valid JSON |
| Proxy connection failed | Verify proxy format includes protocol (http://, socks5://, etc.) |
| User agents not saving | Check file permissions on `src/utils/data.json` |
| All accounts use same user agent | Delete `src/utils/data.json` and restart bot |
| SOCKS proxy not working | Ensure `socks-proxy-agent` is installed: `npm install` |
| Authentication failed | Verify credentials from Telegram channel are correct |
| Config not loading | Check `config.js` syntax - bot will use defaults if invalid |

## 🧰 Utility Scripts

Manage bot data and logs easily with these npm scripts:

```bash
# Clear all log files
npm run reset-log

# Clear data.json (reset account data)
npm run reset-data

# View log process
npm run watch-log

# Validate accounts.txt and proxies.txt data
npm run check-config
```

## 📝 Notes

- Each chat message consumes **1 marketplace credit**
- **5 free marketplace credits** per day (resets at midnight UTC)
- Access tokens expire after **24 hours**
- Concurrency is based on **proxy count**
- Proxies are assigned **round-robin** to accounts
- Bot automatically handles **token refresh** and **task completion**

## 🤝 Contribution

Feel free to open pull requests, report bugs, or suggest features. Contributions are always welcome!

## 🛡️ Disclaimer

This tool is for educational and testing purposes only on the [Olivia Network](https://operator.olivianetwork.com?ref=#OPQIXPN7). Use at your own risk. The authors are not responsible for any consequences resulting from the use of this software.

## 📄 License

This project is licensed under the [MIT © 2025](https://github.com/itsnodrops/olivianet-bot/blob/main/LICENSE).
