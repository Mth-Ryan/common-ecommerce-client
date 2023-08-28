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
export declare class UserService implements IUserService {
    private httpClientFactory;
    constructor(clientFactory: HttpClientFactory);
    checkEmailAvailability(input: EmailInput): Promise<boolean>;
    signup(input: SignupInput): Promise<TokensOutput>;
    updatePersonalInfo(input: UpdatePersonalInfoInput): Promise<void>;
    updateName(input: UpdateNameInput): Promise<void>;
    login(input: LoginInput): Promise<TokensOutput>;
    refresh(input: RefreshTokenInput): Promise<TokensOutput>;
    logout(input: RefreshTokenInput): Promise<void>;
}
