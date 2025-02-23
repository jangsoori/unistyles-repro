module.exports = function(api) {
  api.cache(true);

  return {
    // other config
    presets: ["babel-preset-expo"],

    plugins: [
      // other plugins
      ["react-native-unistyles/plugin"],
    ],
  };
};
