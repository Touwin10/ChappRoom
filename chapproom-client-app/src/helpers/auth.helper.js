
import { LocationHelper } from './location.helper';

export function getConnectedUser() {
    const user = LocationHelper.currentUser;
    if (!user) {
        return null;
    }

    if (user && user.username && user.accessToken) {
        return user;
    }

    return null;
}

export function getConnectedUsername() {
    const user = LocationHelper.currentUser;
    if (!user) {
        return "";
    }

    return user.username;
}

export function isConnected() {
    const user = LocationHelper.currentUser;
    if (!user) {
        return false;
    }

    return true;
}