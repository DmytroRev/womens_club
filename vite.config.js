export default {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "./src/styles/main.scss" as *;`,
        },
      },
    },
  };
  