


export class Utils {
    static validateEmail(email) {
        const regExp = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
        if (regExp.test(email)) {
            return true;
        }
        return false;
    }

    static converToBase64 = (file, includePrefix = false) => {
        let reader = new FileReader();
        return new Promise((resolve, reject) => {
            reader.readAsDataURL(file);
            reader.onload = (e) => {
                const base64 = e.target.result;
                if (includePrefix) {
                    resolve(base64);
                } else {
                    const result = base64.split(',')[1];
                    resolve(result);
                }
            };
            reader.onerror = (error) => {
                reject(error);
            };
        });
    }
}
