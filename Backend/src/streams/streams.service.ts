import { Injectable } from '@nestjs/common';
import { createReadStream, ReadStream } from 'fs';
import { join } from 'path';

@Injectable()
export class StreamsService {
  /**
   * Covnert stream to string
   *
   */
  private streamToString = async (stream: ReadStream): Promise<string> => {
    const chunks = [];
    for await (const chunk of stream) {
      chunks.push(Buffer.from(chunk));
    }
    return Buffer.concat(chunks).toString('utf-8');
  };

  /**
   * Reading a json file
   *
   * @param path string
   */
  initMockData = async (path: string): Promise<string> => {
    const readStream: ReadStream = createReadStream(join(process.cwd(), path));
    return await this.streamToString(readStream);
  };
}
