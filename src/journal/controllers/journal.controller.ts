import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { JournalService } from '../services/journal.service';

@Controller('journal')
export class JournalController {
  constructor(private readonly journalService: JournalService) {}

  @Get(':journalId')
  async getJournals(@Param('journalId') journalId) {
    return this.journalService.getjournalsById(journalId);
  }
  @Post('')
  async createJournal(@Body() payload) {
    return this.journalService.createJournal(payload);
  }
  @Put(':journalId')
  async updateJournal(@Param('journalId') journalId, @Body() payload) {
    return this.journalService.updateJournal(journalId, payload);
  }
  @Delete(':journalId')
  async deleteJournal(@Param('journalId') journalId) {
    return this.journalService.deleteJournal(journalId);
  }
}
