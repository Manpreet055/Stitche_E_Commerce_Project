import { faker } from '@faker-js/faker';
// or, if desiring a different locale
// import { fakerDE as faker } from '@faker-js/faker';

const randomName = faker.person.fullName(); // Rowan Nikolaus
const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz

let emailsArr = faker.helpers.uniqueArray(faker.internet.email, 10); // will generate 1000 unique email addresses
console.log(emailsArr);