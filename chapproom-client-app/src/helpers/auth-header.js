
import { LocationHelper } from './location.helper';

export function authHeader() {
    const user = LocationHelper.currentUser;
    if (user && user.accessToken) {
        return { Authorization: 'Bearer ' + user.accessToken };
    } else {
        return {};
    }
}
