import settings from '../models/Settings';
import { StorageHelper } from '../utils';

export async function createHeaders(): Promise<any> {
    const headers = <any>{};
    headers['X-react-redux-typescript-webpack-starter-kit'] = settings.projectName;
    headers['Content-Type'] = 'application/json; charset=utf-8';
    const tokenResult = await StorageHelper.tryGetTokenResult();
    if (tokenResult != null) {
        headers['Authorization'] = 'Bearer ' + tokenResult.access_token;
    }
    return headers;
}
