import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
    output: 'export',
    basePath: process.env.NODE_ENV === 'production' ? '/pet-project' : '',
    images: {
        unoptimized: true,
    },
    sassOptions: {
        includePaths: [path.join(process.cwd(), 'src', 'styles')],
    },
};

export default nextConfig;
