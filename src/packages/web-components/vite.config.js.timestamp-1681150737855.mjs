// vite.config.js
import path from "path";
import { defineConfig } from "file:///F:/pet-projects/camina/node_modules/.pnpm/vite@4.2.1_@types+node@17.0.9/node_modules/vite/dist/node/index.js";
import dts from "file:///F:/pet-projects/camina/node_modules/.pnpm/vite-plugin-dts@2.0.2_@types+node@17.0.9_vite@4.2.1/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "F:\\pet-projects\\camina\\src\\packages\\web-components";
var vite_config_default = defineConfig({
  plugins: [dts({
    insertTypesEntry: true,
    exclude: ["dist"]
  })],
  build: {
    lib: {
      entry: path.resolve(__vite_injected_original_dirname, "app/index.ts"),
      name: "@camina/web-components",
      fileName: "@camina-web-components",
      formats: ["cjs", "umd", "es"]
    },
    esbuild: {
      jsx: "transform"
    },
    rollupOptions: {
      external: ["@camina/core"],
      output: {
        globals: {
          vue: "@camina/core"
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOlxcXFxwZXQtcHJvamVjdHNcXFxcY2FtaW5hXFxcXHNyY1xcXFxwYWNrYWdlc1xcXFx3ZWItY29tcG9uZW50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRjpcXFxccGV0LXByb2plY3RzXFxcXGNhbWluYVxcXFxzcmNcXFxccGFja2FnZXNcXFxcd2ViLWNvbXBvbmVudHNcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Y6L3BldC1wcm9qZWN0cy9jYW1pbmEvc3JjL3BhY2thZ2VzL3dlYi1jb21wb25lbnRzL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHBhdGggZnJvbSAncGF0aCdcclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IGR0cyBmcm9tICd2aXRlLXBsdWdpbi1kdHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtkdHMoe1xyXG4gICAgaW5zZXJ0VHlwZXNFbnRyeTogdHJ1ZSxcclxuICAgIGV4Y2x1ZGU6IFsnZGlzdCddXHJcbiAgfSldLFxyXG4gIGJ1aWxkOiB7XHJcbiAgICBsaWI6IHtcclxuICAgICAgZW50cnk6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdhcHAvaW5kZXgudHMnKSxcclxuICAgICAgbmFtZTogJ0BjYW1pbmEvd2ViLWNvbXBvbmVudHMnLFxyXG4gICAgICBmaWxlTmFtZTogJ0BjYW1pbmEtd2ViLWNvbXBvbmVudHMnLFxyXG4gICAgICBmb3JtYXRzOiBbJ2NqcycsICd1bWQnLCAnZXMnXVxyXG4gICAgfSxcclxuICAgIGVzYnVpbGQ6IHtcclxuICAgICAganN4OiAndHJhbnNmb3JtJ1xyXG4gICAgfSxcclxuICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgZXh0ZXJuYWw6IFsnQGNhbWluYS9jb3JlJ10sXHJcbiAgICAgIG91dHB1dDoge1xyXG4gICAgICAgIGdsb2JhbHM6IHtcclxuICAgICAgICAgIHZ1ZTogJ0BjYW1pbmEvY29yZSdcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0pXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBb1YsT0FBTyxVQUFVO0FBQ3JXLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUZoQixJQUFNLG1DQUFtQztBQUl6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsSUFBSTtBQUFBLElBQ1osa0JBQWtCO0FBQUEsSUFDbEIsU0FBUyxDQUFDLE1BQU07QUFBQSxFQUNsQixDQUFDLENBQUM7QUFBQSxFQUNGLE9BQU87QUFBQSxJQUNMLEtBQUs7QUFBQSxNQUNILE9BQU8sS0FBSyxRQUFRLGtDQUFXLGNBQWM7QUFBQSxNQUM3QyxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsTUFDVixTQUFTLENBQUMsT0FBTyxPQUFPLElBQUk7QUFBQSxJQUM5QjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsS0FBSztBQUFBLElBQ1A7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNiLFVBQVUsQ0FBQyxjQUFjO0FBQUEsTUFDekIsUUFBUTtBQUFBLFFBQ04sU0FBUztBQUFBLFVBQ1AsS0FBSztBQUFBLFFBQ1A7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
