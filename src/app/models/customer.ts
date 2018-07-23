export class Customer {
  constructor(
    public customerId: number,
    public firstName: string,
    public lastName: string,
    public mobileNumber: string,
    public emailAddress: string,
    public password: string,
    public middleName?: string
  ) {
  }
}
