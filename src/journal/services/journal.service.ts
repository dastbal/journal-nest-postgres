import { Inject, Injectable } from '@nestjs/common';
import { Client } from 'pg';
@Injectable()
export class JournalService {
  constructor(@Inject('PG') private client: Client) {}
  async getjournalsById(journalId) {
    // async/await
    try {
      const query = `SELECT * FROM journals  WHERE userid = ${journalId}`;
      const res = await this.client.query(query);
      //   console.log(res.rows);
      return res.rows;
      // { name: 'brianc', email: 'brian.m.carlson@gmail.com' }
    } catch (err) {
      console.log(err.stack);
    }
  }
  async createJournal(payload) {
    const query = {
      text: 'INSERT INTO journals(title, content, userid) VALUES($1, $2,$3)',
      values: [payload.title, payload.content, payload.userid],
    };
    try {
      const res = await this.client.query(query);
      console.log(res);
      return res.rows;
      // { name: 'brianc', email: 'brian.m.carlson@gmail.com' }
    } catch (err) {
      console.log(err.stack);
    }
  }
  async updateJournal(journalId, payload) {
    console.log(payload);
    const query = `UPDATE journals SET content ='${payload.content}' WHERE id = ${journalId};`;
    try {
      const res = await this.client.query(query);
      console.log(res.command);
      return res;
    } catch (err) {
      console.log(err.stack);
    }
  }
  async deleteJournal(journalId) {
    const query = `DELETE FROM journals WHERE id= ${journalId};`;
    try {
      const res = await this.client.query(query);
      console.log(res);
      return res.rows;
    } catch (err) {
      console.log(err.stack);
    }
  }
}
