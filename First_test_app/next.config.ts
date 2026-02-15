import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Ускоряет сборку: Next не сканирует лишние папки из-за нескольких lockfile
  outputFileTracingRoot: path.join(__dirname),
  webpack: (config) => {
    // Эта настройка убирает ошибку с мобильной библиотекой
    config.resolve.fallback = {
      fs: false,
      net: false,
      tls: false,
    };
    // Заглушка для React Native пакета, который тянет @metamask/sdk (в вебе не используется)
    config.resolve.alias = {
      ...config.resolve.alias,
      "@react-native-async-storage/async-storage": path.resolve(
        __dirname,
        "async-storage-stub.js"
      ),
    };
    
    // Игнорируем лишние библиотеки для веба
    config.externals.push("pino-pretty", "lokijs", "encoding");
    
    return config;
  },
};

export default nextConfig;