# Discord QR Code Bot

## Introduction
The Discord QR Code Bot is a simple Discord bot that generates QR codes based on user input. It allows users to generate QR codes directly in Discord without needing to visit external websites.

## Features
- Generate QR codes from text input

## Requirements
- Nest.js
- Discord Bot Token
- Google API Key (optional, if using a third-party service to generate QR codes)

## Installation
1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/yourusername/discord-qr-code-bot.git

2. Navigate to the project directory:
  cd discord-qrcode-bot

3. Install dependencies:
  npm install discord.js axios

4. Set up environment variables:
    1. Create a .env file in the root directory.
    2. Add your Discord bot token to the .env file:
        DISCORD_TOKEN=your_discord_bot_token_here

5. Usage
    1. Invite the bot to your Discord server using the OAuth2 URL generated in the Discord Developer Portal.
    2. Start the bot application:
        npm run start:dev
    3. In your Discord server, use the command to generate a QR code:
        /generateQR <data>

Credits
Discord.js - Discord API library for Node.js
Google Charts API - Google's API for generating QR code

