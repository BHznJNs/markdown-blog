import terser from "@rollup/plugin-terser"
import dynamicImportVars from "@rollup/plugin-dynamic-import-vars"
import copy from "rollup-plugin-copy"
import postcss from "rollup-plugin-postcss"
import cssImport from "postcss-import"
import autoprefixer from "autoprefixer"
import cssnanoPlugin from "cssnano"

export default {
    input: "src/index.js",
    output: {
        dir: "dist/",
        format: "es",
        sourcemap: "hidden",
        sourcemapFileNames: "sourcemaps/[name].map",
        entryFileNames: "index.min.js",
        chunkFileNames: "chunks/[name].min.js",
    },
    plugins: [
        terser(),
        copy({
            targets: [{
                src: "src/libs/katex/fonts/*",
                dest: "dist/fonts/",
            }],
        }),
        postcss({
            include: [
                "src/styles/*.css",
                "src/libs/highlight-es/*.css"
            ],
            extract: "style.min.css",
            plugins: [
                cssImport(),
                autoprefixer(),
                cssnanoPlugin(),
            ],
        }),
        postcss({
            include: "src/libs/katex/*.css",
            extract: "katex.min.css",
            plugins: [cssnanoPlugin()],
        }),
        dynamicImportVars(),

        { // customized plugin
            name: "sourcemap-path appender",
            renderChunk(code, chunk) {
                let sourcemapPath
                if (chunk.isEntry) {
                    sourcemapPath = `./sourcemaps/${chunk.name}.map`
                } else {
                    sourcemapPath = `../sourcemaps/${chunk.name}.map`
                }
                code += "\n//# sourceMappingURL=" + sourcemapPath
                return {
                    code: code,
                    map: null,
                }
            }
        }
    ]
}
