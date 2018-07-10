export class Customer {
  constructor(
    public customerId: number,
    public firstName: string,
    public middleName: string,
    public lastName: string,
    public phoneNumber: string,
    public emailAddress: string,
    public password: string,
  ) {
  }
}
