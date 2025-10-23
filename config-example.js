/**
 * This file shows configuration for BOTH Vue CLI and Vite.
 * You only need ONE of these.
 *
 * Place the relevant code in your project's root:
 * - For Vue CLI, use `vue.config.js`
 * - For Vite, use `vite.config.js` or `vite.config.ts`
 */

// 1. FOR VUE CLI (if you use vue.config.js)
// Replace '<REPO_NAME>' with the name of your GitHub repository.
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/portfolio/'
    : '/'
}

// -----------------------------------------------------------------

// 2. FOR VITE (if you use vite.config.js)
// Make sure to import `defineConfig` from 'vite'
// import { defineConfig } from 'vite'

// Replace '<REPO_NAME>' with the name of your GitHub repository.
export default defineConfig({
  base: '/portfolio/',
  // ... other vite config options
})
