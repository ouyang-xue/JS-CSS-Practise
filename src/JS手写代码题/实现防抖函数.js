const _debounce = (func, wait) => {
    let timer;

    return () => {
        clearTimeout(timer);
        timer = setTimeout(func, wait);
    };
};
