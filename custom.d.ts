// custom.d.ts
import * as faker from 'faker';

declare module 'faker' {
  interface FakerStatic {
    name: {
      findName(): string;
    };
    internet: {
      email(): string;
    };
    address: {
      country(): string;
    };
    date: {
      past(years: number): Date;
    };
    random: {
      uuid(): string; // Add the uuid function here
      number(options: { min: number; max: number }): number;
    };
  }
  const faker: FakerStatic;
  export default faker;
}
