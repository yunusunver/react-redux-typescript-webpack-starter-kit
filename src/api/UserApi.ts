import { LoginModel } from '../models';
import * as ApiHelper from '../utils/ApiHelper';
import axios from 'axios';
import settings from '../models/Settings';
import { TokenResult } from '../models/ResultTypes';

export class UserApi {
    async login(model: LoginModel): Promise<TokenResult> {
        const url: string = settings.authBaseUrl;

        const headers = await ApiHelper.createHeaders();

        const body = { email: model.email, password: model.password };

        const response: TokenResult = await axios.post(url, body, {
            headers: headers,
        });

        return response;
    }
}
