import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint( conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);

    }

    async createAccount({email, password, name}){
       try {
        const userAccount = await this.account.create(ID.unique(),  email, password, name);
        if (userAccount) {
            //call another function
            return this.login({email, password}) && alert("Congratulation , Your Account is created Sucessfully");
           
        } else {
            return userAccount;
        }
       } catch (error) {
        console.log("Appwrite servie :: createAccount :: error" ,error);
       }
    }

    async login({email, password}){
        try {
           return await this.account.createEmailPasswordSession(email, password) && alert("logged In");
           
        } catch (error) {
            console.log("Appwrite servie :: login :: error" ,error);
        }

    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        return null;
    }

    async logout(){
        try {
            return await this.account.deleteSessions()
        } catch (error) {
            console.log("Appwrite servie :: logout :: error" , error);
        }
    }
}

const authService = new AuthService();

export default authService