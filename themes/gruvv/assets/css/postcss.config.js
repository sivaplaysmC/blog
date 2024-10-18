const themeDir = __dirname + "/../../";

module.exports = {
    plugins: [
        require("postcss-import")({
            path: [themeDir],
        }),
        require("tailwindcss")(themeDir + "assets/css/tailwind.config.cjs"),
        require("autoprefixer")({
            path: [themeDir],
        }),
    ],
};
