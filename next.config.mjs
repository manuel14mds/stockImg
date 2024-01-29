/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'leonardo-cdn.b-cdn.net',
                port:'',
                pathname:'/**'
            }
        ]
    }
};

export default nextConfig;
