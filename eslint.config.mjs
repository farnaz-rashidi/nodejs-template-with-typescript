// @ts-check
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended, //disables core ESLint rules that are already checked by the TypeScript compiler
  ...tseslint.configs.strictTypeChecked, //enables typed linting
  {
    // Add languageOptions.parserOptions to tell our parser how to find the TSConfig for each source file.
    languageOptions: {
      parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  ...tseslint.configs.stylisticTypeChecked,
);
