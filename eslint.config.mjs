// @ts-check

import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommendedTypeChecked,
    {
        ignores: [
            'dist',
            'node_modules',
            'eslint.config.mjs',
            'jest.config.js',
            '**/*.spec.ts',
            'tests'
        ]
    },
    {
        languageOptions: {
            parserOptions: {
                project: true,
                tsconfigRootDir: import.meta.dirname
            }
        },
        rules: {
            'no-console': 'warn',
            '@typescript-eslint/no-unused-vars': 'error',
            '@typescript-eslint/no-misused-promises': 'off',
            '@typescript-eslint/require-await': 'warn',
            'eslint-disable @typescript-eslint/no-unsafe-argument': 'off',
            'eslint-disable @typescript-eslint/no-unsafe-member-access': 'off',
            'eslint-disable @typescript-eslint/no-unsafe-assignment': 'off',
            'eslint-disable @typescript-eslint/no-unsafe-call': 'off',
            '@typescript-eslint/no-unsafe-call': 'off'
        }
    }
)
