module.exports = {
    apps : [{
      name: "myapp",
      script: "./src/server.js",
      watch: true,
      env: {
        NODE_ENV: "production"
      }
    }]
  }