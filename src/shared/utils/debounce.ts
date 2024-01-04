let timer: NodeJS.Timeout;

export const setDebounce = (cb: () => void, delay: number = 450) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => cb(), delay);
};
