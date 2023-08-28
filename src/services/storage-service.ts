import { HttpClientFactory } from "../clients/http-client-factory";

export interface IStorageService {
    upload: (file: File) => Promise<string>;
}

export default class StorageService implements IStorageService {
    private clientFactory: HttpClientFactory;

    constructor(clientFactory: HttpClientFactory) {
        this.clientFactory = clientFactory;
    }

    public async upload(file: File) {
        const client = this.clientFactory.create({ authorize: true });
        const response = await client.filePost("/Storage/Upload", file);

        return await response.text();
    }
}
