const BASE = import.meta.env.BASE_URL;
export const imgUrl = (path: string) => BASE + path.replace(/^\//, '');
