import { HttpClientFactory } from "../clients/http-client-factory";
export interface IStorageService {
    upload: (file: File) => Promise<string>;
}
export default class StorageService implements IStorageService {
    private clientFactory;
    constructor(clientFactory: HttpClientFactory);
    upload(file: File): Promise<string>;
}
