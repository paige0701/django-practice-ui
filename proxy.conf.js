const PROXY_CONFIG = [
  {
    context: [
      "/api",
      "/oauth"
    ],
    target: {
      host: "localhost",
      protocol: "http:",
      port: 8000
    },
    secure: false,
    changeOrigin: true,
    logLevel: "debug"
  }
];

module.exports = PROXY_CONFIG;
