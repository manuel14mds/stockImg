/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'leonardo-cdn.b-cdn.net',
                port:'',
                pathname:'/**'
            },
            {
                protocol:'https',
                hostname:'picsum.photos',
                port:'',
                pathname:'/**'
            },
            {
                protocol:'https',
                hostname:'www.nus.agency',
                port:'',
                pathname:'/**'
            },
            {
                protocol:'https',
                hostname:'concepto.de',
                port:'',
                pathname:'/**'
            },
            {
                protocol:'https',
                hostname:'cdn.domestika.org',
                port:'',
                pathname:'/**'
            },
        ]
    }
};

export default nextConfig;
