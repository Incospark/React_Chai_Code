//** AuthService.js can be used in future fo all auth related operations

import config from "../config";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId)
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) { // call another method to create session after account creation

                return this.login({ email, password });
            } else {
                throw new Error("Failed to create account");
            } catch (error) {
                throw error;
            }

        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            await this.account.get();
        } catch (error) {
            console.error("Error fetching current user:", error);
        }
        return null;
    }

    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.error("Error logging out:", error);
        }
    }
}


const authService = new AuthService();

export default authService