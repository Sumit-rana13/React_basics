import conf from "../conf/conf";
import { Client, Account, ID, Databases } from "appwrite";

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);

    }

    async createPost({title, slug, content, featureImage, status, userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featureImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log("Appwrite servie :: createPost :: error" ,error);
        }
    }

    async updatePost(slug,  {title, content, featureImage, status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                cong.appwriteDatabaseId,
                slug,
                {
                    title,
                    content,
                    featureImage,
                    status
                }
            )
        } catch (error) {
            console.log("Appwrite servie :: deletePost :: error" ,error);
        }

    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true;
        } catch (error) {
            console.log("Appwrite servie ::deletePost :: error" ,error);
            return false;
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite servie :: getPost :: error" ,error);
            return false;
        }
    }

    async getPosts(queries){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                [
                    queries.equal("status",["active"])
                ]
            )
            
        } catch (error) {
            console.log("Appwrite servie :: getPosts :: error" ,error);
            return false
        }
    }


    //file upload services
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
                
        } catch (error) {
            console.log("Appwrite servie :: uploadFile :: error" ,error);
            return false;
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true;
        } catch (error) {
            console.log("Appwrite servie :: deleteFile :: error" ,error);
            return false;
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}

const service = new Service()
export default service;