import IWorkerService from "../Interfaces/IWorkerService";
import IUnitOfWork from "../../../DAL/UnityOfWork/IUnitOfWork";
import { SecurityContext } from "../../../CLL/Security/SecurityContext";
import { User } from "../../../CLL/Security/Identitty/User";
import { Admin } from "../../../DAL/Entities/Admin";
import { Worker } from "../../../DAL/Entities/Worker";

export default class WorkerService implements IWorkerService{
    _user!: User;
    _worker!: Worker
    constructor(private iUnitOfWork: IUnitOfWork, private securityContext: SecurityContext){
    }
    GetWorkerAdmin(id: number): Admin | null | undefined{
        try{
            this._user = this.securityContext.getUser();
            let currentAdmin = null;
            if(this._user.userType == 'Admin'){
                this.iUnitOfWork.WorkerRepo.GetById(id).then(
                    (response) => {
                        response.Admins.map((Admin) => {
                            if(Admin.isCurrent){
                                currentAdmin = Admin;
                            }
                        });
                    },
                    (err) => {
                        throw Error('Can\'t find user');
                    }
                );
            }else {
                throw Error('User type have no rights');
            }
            return currentAdmin;
        }
        catch(error){
           console.error(error); 
        }
    }
    get Worker(){
        return this._worker;
    }
}