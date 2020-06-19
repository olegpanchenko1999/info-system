import IWorkerRepository from '../Repository/Interfaces/IWorkerRepository';
import IAdminRepository from '../Repository/Interfaces/IAdminRepository';

export default interface IUnitOfWork {
    WorkerRepo: IWorkerRepository;
    AdminRepo: IAdminRepository;
}