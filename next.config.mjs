/** @type {import('next').NextConfig} */
import path from "path";

const nextConfig = {
    output: 'export',
    sassOptions: {
        includePaths: [path.join(new URL(import.meta.url).pathname, '..', 'styles')],
    },
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
