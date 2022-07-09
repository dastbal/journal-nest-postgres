import { Module } from '@nestjs/common';
import { JournalService } from './services/journal.service';
import { JournalController } from './controllers/journal.controller';

@Module({
  providers: [JournalService],
  controllers: [JournalController],
})
export class JournalModule {}
