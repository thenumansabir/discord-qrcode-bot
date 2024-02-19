import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DiscordBotService } from './discord-bot/discord-bot.service';
import { QRCodeService } from './qr-code/qr-code.service';

@Module({
  imports: [ConfigModule.forRoot()],
  providers: [DiscordBotService, QRCodeService],
})
export class AppModule {}
