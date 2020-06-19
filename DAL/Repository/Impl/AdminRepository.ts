import IAdminRepository from '../Interfaces/IAdminRepository';
import { Admin } from '../../Entities/Admin';
const AdminModel = require('../../Models/AdminModel');

export default class AdminRepository implements IAdminRepository{
    constructor(){}
    public async GetAll(): Promise<Admin[]>{
        const Admins = await AdminModel.find({});
        return Admins;
    }
    public async Add(value: Admin): Promise<void> {
        await AdminModel.create(value);
    }
    public async Remove(id: number): Promise<void> {
        await AdminModel.findByIdAndDelete(id);
    }
    public async GetById(id: number): Promise<Admin> {
        const Admin = await AdminModel.findById(id);
        return Admin;
    }
}