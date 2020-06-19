import { Admin } from "./Admin";
export class Worker {
  constructor(
    public workerId: number,
    public firstName: string,
    public lastName: string,
    public posts: Admin[]
  ) {}
}
