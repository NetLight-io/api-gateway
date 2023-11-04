import { Injectable } from '@nestjs/common';
const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client("422212317987-orha436vt0c86nl2s9g1p5n80vb6b4ae.apps.googleusercontent.com")
import fetch from "node-fetch";
@Injectable()
export class AuthService {
  constructor() {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = {
        name: "admin",
        password: "123asd"
    }
  }

}