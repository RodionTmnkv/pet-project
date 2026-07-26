const BASE_PATH = process.env.NODE_ENV === 'production' ? '/pet-project' : '';

export function assetPath(path: string): string {
    return `${BASE_PATH}${path}`;
}
