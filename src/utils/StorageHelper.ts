import { TokenModel } from '../models';

const TOKEN_RESULT = 'TOKEN_RESULT';

export class StorageHelper {
    static setTokenResult(tokenModel: TokenModel) {
        localStorage.setItem(TOKEN_RESULT, JSON.stringify(tokenModel));
    }

    static onSignOut() {
        localStorage.removeItem(TOKEN_RESULT);
    }

    static tryGetTokenResult(): Promise<TokenModel | null> {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await localStorage.getItem(TOKEN_RESULT);
                if (res !== null) {
                    resolve(<TokenModel>JSON.parse(res));
                } else {
                    resolve(null);
                }
            } catch (err) {
                reject(err);
            }
        });
    }
}
