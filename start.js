module.exports = {
  daemon: true,
  run: [
    {
      method: "shell.run",
      params: {
        venv: "env",
        path: "app",
        env: {
          // Example: Set any necessary environment variables
          // "HF_HOME": "{{path.resolve(kernel.homedir, 'cache', 'huggingface')}}"
        },
        message: [
          "python app.py" // Assumes app.py starts a Gradio server
        ],
        on: [{
          // Catches Gradio's local URL, works for "Running on local URL: http://127.0.0.1:XXXX" or "http://127.0.0.1:XXXX"
          "event": "/(Running on local URL: )?(http:\\/\\/127\\.0\\.0\\.1:[0-9]+)/", 
          "done": true
        }]
      }
    },
    {
      method: "local.set",
      params: {
        // input.event is the regex match object from the previous step
        // event[2] will capture the URL part (http://127.0.0.1:XXXX)
        url: "{{input.event[2]}}"
      }
    }
  ]
}