import { Inject, Injectable } from '@nestjs/common';
import { Client } from 'pg';

@Injectable()
export class AppService {
  constructor(@Inject('PG') private client: Client) {}
  async getUsers() {
    // const query = {
    //   text: 'INSERT INTO users(name, email) VALUES($1, $2)',
    //   values: ['brianc', 'brian.m.carlson@gmail.com'],
    // }
    // async/await
    try {
      const res = await this.client.query('SELECT * FROM users');
      console.log(res.rows[0]);
      return res.rows;
      // { name: 'brianc', email: 'brian.m.carlson@gmail.com' }
    } catch (err) {
      console.log(err.stack);
    }
  }
}
