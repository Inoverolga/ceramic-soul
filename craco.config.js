module.exports = {
    webpack: {
        configure: (webpackConfig) => {
            // 1. Правило для изображений
            webpackConfig.module.rules.push({
                test: /\.(jpe?g|png|gif|svg|webp)$/i,
                type: "asset/resource",
                generator: {
                    filename: "static/media/[name].[hash][ext]",
                    publicPath: "/",
                },
                use: [
                    {
                        loader: "image-webpack-loader",
                        options: {
                            mozjpeg: { quality: 80 },
                            optipng: { enabled: true },
                            webp: { quality: 85 },
                        },
                    },
                ],
            });

            // 2. Правило для шрифтов (оставляем без изменений)
            webpackConfig.module.rules.push({
                test: /\.(woff|woff2|eot|ttf)$/,
                type: "asset/resource",
                generator: {
                    filename: "static/fonts/[name].[hash][ext]",
                },
            });

            return webpackConfig;
        },
    },
};
