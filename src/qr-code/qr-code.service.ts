import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class QRCodeService {
  async generateQRCode(text: string) {
    const queryParams = new URLSearchParams({
      cht: 'qr',
      chs: '200x200',
      chl: `${text}`,
      choe: 'UTF-8',
    });
    const url = 'https://chart.googleapis.com/chart?' + queryParams;
    const response = await axios.get(url, { responseType: 'arraybuffer' });
    const base64String = Buffer.from(response.data, 'binary').toString(
      'base64',
    );
    return base64String;
  }
}
