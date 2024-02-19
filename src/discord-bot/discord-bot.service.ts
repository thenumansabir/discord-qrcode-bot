import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Client, Message, GatewayIntentBits } from 'discord.js';
import { QRCodeService } from 'src/qr-code/qr-code.service';

@Injectable()
export class DiscordBotService {
  private client: Client;

  constructor(
    private configService: ConfigService,
    private qrCodeService: QRCodeService,
  ) {
    this.client = new Client({
      intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
      ],
    });
    this.setup();
  }

  private setup(): void {
    this.client.login(this.configService.get('DISCORD_TOKEN'));
    this.client.on('ready', () => {
      console.log('Bot is ready...');
    });

    this.client.on('messageCreate', async (message: Message) => {
      if (message.author.bot) return;
      else if (message.content.startsWith('/generateQR')) {
        console.log('Generating QR code');
        const text = message.content.replace('/generateQR ', '');
        const base64String = await this.qrCodeService.generateQRCode(text);
        const qrCode = Buffer.from(base64String, 'base64');

        message.channel.send({
          files: [
            {
              attachment: qrCode,
              name: 'qrCode.png',
            },
          ],
        });
      } else {
        message.reply('Please use **/generateQR <data>** command.');
      }
    });
    this.client.on('error', (error) => {
      console.error('Bot encountered an error:', error);
    });
  }
}
