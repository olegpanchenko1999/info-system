import { AdminDTO } from "./AdminDTO";
export class WorkerDTO {
  constructor(
    public workerId: number,
    public firstName: string,
    public lastName: string,
    public posts: AdminDTO[]
  ) {}
}
