import type { NextConfig } from 'next';
import path from 'path';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
    output: 'export',
    basePath: isProd ? '/pet-project' : '',
    assetPrefix: isProd ? '/pet-project' : '',
    images: {
        unoptimized: true,
    },
    sassOptions: {
        includePaths: [path.join(process.cwd(), 'src', 'styles')],
    },
};

export default nextConfig;
