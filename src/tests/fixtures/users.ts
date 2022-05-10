import faker from "@faker-js/faker";

export function generateFakeUser() {
  return {
    _id: faker.database.mongodbObjectId(),
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    birthDate: faker.date.betweens("1980-01-01T00:00:00.000Z", "2000-01-01T00:00:00.000Z")[0],
    avatar: faker.image.avatar(),
  };
}
