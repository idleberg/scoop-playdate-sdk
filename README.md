# scoop-playdate-sdk

> A Scoop bucket to install the Playdate SDK.

[![License](https://img.shields.io/github/license/idleberg/scoop-playdate-sdk?style=for-the-badge)](LICENSE)
[![Version](https://img.shields.io/github/v/release/idleberg/scoop-playdate-sdk?style=for-the-badge)](https://github.com/idleberg/scoop-playdate-sdk/releases)
[![Build](https://img.shields.io/github/workflow/status/idleberg/scoop-playdate-sdk/test?style=for-the-badge)](https://github.com/idleberg/scoop-playdate-sdk/releases)

## Usage

After adding the bucket, you can install the Playdate SDK like you would any other software in Scoop:

```powershell
# Add SDK bucket
scoop bucket add playdate-sdk https://github.com/idleberg/scoop-playdate-sdk

# Add extras bucket (the SDK depends on Visual C++ Redistributable)
scoop bucket add extras

# Install SDK
sudo scoop install playdate-sdk
```

:warning: You might need an elevated shell to install/uninstall the SDK, e.g. using [Sudo for Windows](http://blog.lukesampson.com/sudo-for-windows)

## Issues

Occasionally, Scoop might not be able to delete Playdate SDK's install folder and you will end up with an error like the following:

```
ERROR Couldn't remove '~\scoop\apps\playdate-sdk\1.12.0'; it may be in use.
```

While the install folder is usually empty, Scoop will still list the Playdate SDK as a failed installation. To fix this, you can delete the folder manually.

```powershell
Remove-Item ~\scoop\apps\playdate-sdk
```

## License

This work is licensed under [The MIT License](LICENSE).
