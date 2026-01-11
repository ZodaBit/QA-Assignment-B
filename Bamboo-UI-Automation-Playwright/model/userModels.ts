import dotenv from "dotenv";

dotenv.config();

export default class User {
  private email: string;
  private password: string;

  constructor() {
    const requiredEnv = [
      "EMAIL",
      "PASSWORD",
    ];

    requiredEnv.forEach((key) => {
      if (!process.env[key]) {
        throw new Error(`Missing required env variable: ${key}`);
      }
    });

    this.email = process.env.EMAIL!;
    this.password = process.env.PASSWORD!;

  }

  getCredentials() {
    return { username: this.email, password: this.password };
  }
}
