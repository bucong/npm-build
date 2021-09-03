import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import url from "rollup-plugin-url";
import { terser } from "rollup-plugin-terser"; //js压缩

export default {
  input: "src/utils/index.js",
  output: {
    file: "dist/utils/index.js",
    format: "es"
  },
  plugins: [
    resolve(),
    commonjs(),
    babel(),
    url({ limit: 50 * 1024 }),
    terser()
  ]
};
