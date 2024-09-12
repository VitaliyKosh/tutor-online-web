export interface AuthTokenService {
    getAccessToken: () => string | null;
    getRefreshToken: () => string | null;
    getSessionId: () => string | null;
}
