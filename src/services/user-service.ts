import { HttpClientFactory } from "../clients/http-client-factory";
import { EmailInput } from "../models/user/email-input";
import { LoginInput } from "../models/user/login-input";
import { RefreshTokenInput } from "../models/user/refresh-token-input";
import { SignupInput } from "../models/user/signup-input";
import { TokensOutput } from "../models/user/tokens-output";
import { UpdateNameInput } from "../models/user/update-name-input";
import { UpdatePersonalInfoInput } from "../models/user/update-personal-info-input";

export interface IUserService {
    checkEmailAvailability: (input: EmailInput) => Promise<boolean>;
    signup: (input: SignupInput) => Promise<TokensOutput>;
    login: (input: LoginInput) => Promise<TokensOutput>;
    updatePersonalInfo: (input: UpdatePersonalInfoInput) => Promise<void>;
    updateName: (input: UpdateNameInput) => Promise<void>;
    refresh: (input: RefreshTokenInput) => Promise<TokensOutput>;
    logout: (input: RefreshTokenInput) => Promise<void>;
}

export class UserService implements IUserService {
    private httpClientFactory: HttpClientFactory;

    constructor(clientFactory: HttpClientFactory) {
        this.httpClientFactory = clientFactory;
    }

    async checkEmailAvailability(input: EmailInput) {
        const client = this.httpClientFactory.create();
        const response = await client.post("/Users/CheckEmailAvailability" ,input);
        const data = await response.json();

        return data as boolean;
    }

    async signup(input: SignupInput) {
        const client = this.httpClientFactory.create();
        const response = await client.post("/Users/Signup" ,input);
        const data = await response.json();

        return data as TokensOutput;
    }

    async updatePersonalInfo(input: UpdatePersonalInfoInput) {
        const client = this.httpClientFactory.create({ authorize: true });
        await client.patch("/Users/UserUpdatePersonalInfo", input);
    }

    async updateName(input: UpdateNameInput) {
        const client = this.httpClientFactory.create({ authorize: true });
        await client.patch("/Users/UserUpdateName", input);
    }

    async login(input: LoginInput) {
        const client = this.httpClientFactory.create();
        const response = await client.post("/Users/Login" ,input);
        const data = await response.json();

        return data as TokensOutput;
    }

    async refresh(input: RefreshTokenInput) {
        const client = this.httpClientFactory.create();
        const response = await client.post("/Users/Refresh" ,input);
        const data = await response.json();

        return data as TokensOutput;
    }

    async logout(input: RefreshTokenInput) {
        const client = this.httpClientFactory.create();
        await client.post("/Users/Logout" ,input);
    }
}
