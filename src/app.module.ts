import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { JournalService } from './journal/services/journal.service';
import { JournalModule } from './journal/journal.module';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [JournalModule, DatabaseModule, UsersModule],
  controllers: [AppController],
  providers: [AppService, JournalService],
  exports: [],
})
export class AppModule {}
