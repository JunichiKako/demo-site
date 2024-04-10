/** @type {import('next').NextConfig} */
const nextConfig = {
    // 静的サイトはこれでビルドする
    output: "export",
    // これでNextのImageタグの最適化を無効にする。
    images: {
        unoptimized: true,
    }
};

export default nextConfig;
