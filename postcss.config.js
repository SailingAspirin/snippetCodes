/*
 * @Author: Salaing
 * @Date: 2025-02-27 23:39:28
 * @LastEditors: Salaing
 * @LastEditTime: 2025-03-25 16:20:16
 * @Description: file content
 */

module.exports = {
  plugins: {
    tailwindcss: {
      config: './tailwind.config.js',
    },
    autoprefixer: {
      overrideBrowserslist: ['Android 4.1', 'iOS 7.1', 'Chrome > 31', 'ff > 31', 'ie >= 8'],
    },
  },
}
