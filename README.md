# scoop-playdate-sdk

> A Scoop bucket to install the Playdate SDK.

[![License](https://img.shields.io/github/license/idleberg/scoop-playdate-sdk?style=for-the-badge)](LICENSE)
[![Version](https://img.shields.io/github/v/release/idleberg/scoop-playdate-sdk?style=for-the-badge)](https://github.com/idleberg/scoop-playdate-sdk/releases)
[![Build](https://img.shields.io/github/workflow/status/idleberg/scoop-playdate-sdk/test?style=for-the-badge)](https://github.com/idleberg/scoop-playdate-sdk/releases)

## Usage

After adding the bucket, you can install the Playdate SDK like you would any other software in Scoop:

```powershell
# Add SDK bucket
scoop bucket add playdate-sdk https://github.com/idleberg/scoop-playdate-sdk.git

# Add extras bucket to install Visual C++ Redistributable dependency
scoop bucket add extras

# Install SDK
scoop install playdate-sdk
```

:warning: You might need an elevated shell to install/uninstall the SDK, e.g. using [Sudo for Windows](http://blog.lukesampson.com/sudo-for-windows)

## License

This work is licensed under [The MIT License](LICENSE).
