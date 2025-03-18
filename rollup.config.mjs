import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import babel from "@rollup/plugin-babel"; // You've imported babel, let's use it for potential JS transformations
import packageJson from "./package.json" assert {type: "json"};

const external = [...Object.keys(packageJson.peerDependencies || {}), 'react', 'react-dom'];

export default [
    {
        input: "src/index.ts",
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true
            }
        ],
        plugins: [
            resolve(),
            commonjs(),
            typescript({
                tsconfig: "./tsconfig.json",
                exclude: ["**/*.test.tsx", "**/*.test.ts", "**/*.stories.tsx"],
                // Emit declarations here for dts plugin to find
                declaration: true,
                declarationDir: 'dist/types', // Or a temp location
            }),
            postcss({
                extensions: [".scss"],
                inject: true,
                extract: false
            }),
            babel({
                babelHelpers: 'bundled', // Or 'runtime' with @babel/plugin-transform-runtime as a dev dependency
                presets: ['@babel/preset-env', '@babel/preset-react'],
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
                exclude: 'node_modules/**',
            }),
        ],
        // Mark peer dependencies as external
        external: external,
    },
    {
        input: "dist/esm/types/index.d.ts", // Point to the emitted declarations
        output: [{ file: "dist/index.d.ts", format: "esm" }],
        plugins: [dts()],
        external: external.concat([/\.scss$/]), // Keep CSS external for declarations
    }
];