import { Admin } from "../../../DAL/Entities/Admin";

export default interface IWorkerService{
    GetWorkerAdminById: (id: number) => Admin | null | undefined;
}