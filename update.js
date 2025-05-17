module.exports = {
  run: [{
    method: "shell.run",
    params: {
      message: "git pull",
      path: "{{kernel.homedir}}" // Ensures git pull runs in the script's directory
    }
  }, {
    method: "shell.run",
    params: {
      path: "app",
      message: "git pull"
    }
  }, {
    method: "shell.run",
    params: {
      venv: "env",
      path: "app",
      message: [
        "uv pip install -r requirements.txt --upgrade" // Or just re-run install script step
      ]
    }
  }]
}