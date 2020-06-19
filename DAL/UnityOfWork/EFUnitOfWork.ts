import IUnitOfWork from "./IUnitOfWork";
import WorkerRepository from "../Repository/Impl/WorkerRepository";
import AdminRepository from "../Repository/Impl/AdminRepository";

module.exports = class EFUnitOfWork implements IUnitOfWork{
    WorkerRepo!: WorkerRepository;
    AdminRepo!: AdminRepository;
    constructor(workerRepo: WorkerRepository, AdminRepo: AdminRepository){
        if(!this.WorkerRepo){
            this.WorkerRepo = workerRepo;
        }
        if(!this.AdminRepo){
            this.AdminRepo = AdminRepo;
        }
    }
    get Workers(){
        if(!this.WorkerRepo){
            this.WorkerRepo = new WorkerRepository();
        }
        return this.WorkerRepo;
    }
    get Admins(){
        if(!this.AdminRepo){
            this.AdminRepo = new AdminRepository();
        }
        return this.AdminRepo;
    }
}