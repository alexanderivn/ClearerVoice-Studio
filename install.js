module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        message: [
          // For Windows, use 'git clone -c core.protectNTFS=false' to handle reserved filenames like 'aux.scp'.
          // For other platforms (Linux, macOS), use the standard 'git clone'.
          "{{(platform === 'win32' ? 'git clone -c core.protectNTFS=false https://github.com/modelscope/ClearerVoice-Studio.git app' : 'git clone https://github.com/modelscope/ClearerVoice-Studio.git app')}}"
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