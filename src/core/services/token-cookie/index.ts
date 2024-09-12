import { cookieRepository } from '@/core/repositories/cookie';
import { AuthTokenCookieService } from './service';

export const authTokenCookieService = new AuthTokenCookieService({ repository: cookieRepository });
