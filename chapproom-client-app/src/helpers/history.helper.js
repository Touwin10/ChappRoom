

export const history = {
    push: (url) => {
        window.location.href = url;
    },
    reload: () => {
        window.location.reload();
    }
};