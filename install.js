module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        message: [
          "git clone https://github.com/modelscope/ClearerVoice-Studio.git app"
        ]
      }
    },
    {
      method: "shell.run",
      params: {
        venv: "env",
        path: "app",
        message: [
          "uv pip install -r requirements.txt"
        ]
      }
    },
    {
      method: "script.start",
      params: {
        uri: "torch.js",
        params: {
          venv: "env",
          path: "app"
          // xformers: false, // Not explicitly listed in ClearerVoice-Studio requirements
          // triton: false    // Not explicitly listed in ClearerVoice-Studio requirements
        }
      }
    },
    // Optional: Ensure ffmpeg is available if not handled by modelscope or Pinokio's PATH
    // {
    //   method: "shell.run",
    //   params: {
    //     message: "which ffmpeg || echo 'ffmpeg not found, please ensure it is installed and in PATH'"
    //   }
    // }
  ]
}