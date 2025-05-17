module.exports = {
  run: [{
    method: "fs.rm",
    params: {
      path: "app"
    }
  }, {
    method: "fs.rm",
    params: {
      path: "installed.json" // Optional: remove install marker if you use one
    }
  }]
}