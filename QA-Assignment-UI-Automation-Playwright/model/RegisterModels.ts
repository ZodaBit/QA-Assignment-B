import { faker } from '@faker-js/faker';

export default class RegisterUser {
	private firstName: string;
	private lastName: string;
	private email: string;
	private password: string;
    private gender: 'M' | 'F';

	constructor() {
		this.firstName = faker.person.firstName();
		this.lastName = faker.person.lastName();
		this.email = faker.internet.email();
		this.password = this.generateStrongPassword();  
       this.gender = faker.helpers.arrayElement(['M', 'F']);
	}

	// Single method to return all user data
  getUserData() {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
      gender: this.gender,
    };
  }

  
private generateStrongPassword(): string {
  const upper = faker.string.alpha({ length: 1, casing: 'upper' });
  const lower = faker.string.alpha({ length: 2, casing: 'lower' });
  const num = faker.number.int({ min: 100, max: 999 }).toString();
  const specialChars = '@#$%^&*';
  const special = faker.helpers.arrayElement(specialChars.split(''));

  const password = [upper, lower, num, special].sort(() => Math.random() - 0.5).join('');
  return password;
}

}
