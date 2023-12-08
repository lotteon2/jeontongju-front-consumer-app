import APIService from '../../libs/core/api/APIService';
import {SignInParams, SignInResponse} from './AuthenticationAPIService.types';

const BASE_URL = 'https://jeontongju-dev.shop';

class AuthenticationAPIService extends APIService {
  constructor() {
    super();
    this.setBaseUrl(BASE_URL);
  }

  async signIn(params: SignInParams) {
    const {data} = await this.post<SignInResponse>(
      '/authentication-service/api/sign-in',
      {...params, memberRole: 'ROLE_CONSUMER'},
    );
    return data;
  }
}

export const authApi: AuthenticationAPIService =
  AuthenticationAPIService.shared();
