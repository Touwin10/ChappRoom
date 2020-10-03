


export class LocationHelper {

    static set currentUser(user) {
        localStorage.setItem('user', JSON.stringify(user));
    }

    static get currentUser() {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user) {
            return null;
        }
        if (user && user.username && user.accessToken) {
            return user;
        }
        return null;
    }

    static set selectedUserInbox(user) {
        localStorage.setItem('selectedUserInbox', JSON.stringify(user));
    }

    static get selectedUserInbox() {
        return JSON.parse(localStorage.getItem('selectedUserInbox'));
    }

    static removeUserInbox() {
        localStorage.removeItem('selectedUserInbox');
    }

    static removeUser() {
        localStorage.removeItem('user');

    }


}