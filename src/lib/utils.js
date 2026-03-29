
export function cn(...args) {
    return args.flatMap(arg => {
        if (Array.isArray(arg)) {
            return cn(...arg);
        } else if (typeof arg === 'object' && arg !== null) {
            return Object.keys(arg).filter(key => arg[key]);
        }
        return arg;
    }).filter(Boolean).join(' ');
}