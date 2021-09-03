import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import resolve from "rollup-plugin-node-resolve";
import url from "rollup-plugin-url";
import image from "rollup-plugin-image";
// import { terser } from "rollup-plugin-terser"; //js压缩

export default {
  input: "src/components/react/index.js",
  output: {
    file: "dist/react/index.js",
    format: "es"
  },
  external: ["react", "react-dom", "prop-types", "react-router-dom", "antd"],
  plugins: [
    resolve(),
    commonjs(),
    postcss({
      extensions: [".pcss", ".less", ".css"],
      extract: false
    }),
    babel(),
    url({ limit: 50 * 1024 }),
    image(),
    // terser()
  ]
};
