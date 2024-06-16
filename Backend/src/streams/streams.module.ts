import { Module } from '@nestjs/common';

import { StreamsService } from './streams.service';

@Module({
  providers: [StreamsService],
})
export class StreamsModule {}
