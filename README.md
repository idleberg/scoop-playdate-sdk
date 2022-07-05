# scoop-playdate-sdk

> A Scoop bucket to install the Playdate SDK.

[![License](https://img.shields.io/github/license/idleberg/scoop-playdate-sdk?style=for-the-badge)](LICENSE)
[![Version](https://img.shields.io/github/v/release/idleberg/scoop-playdate-sdk?style=for-the-badge)](https://github.com/idleberg/scoop-playdate-sdk/releases)
[![Build](https://img.shields.io/github/workflow/status/idleberg/scoop-playdate-sdk/test?style=for-the-badge)](https://github.com/idleberg/scoop-playdate-sdk/releases)

## Usage

After adding the bucket, you can install the Playdate SDK like you would any other software in Scoop:

```powershell
# Add bucket
scoop bucket add playdate-sdk https://github.com/idleberg/scoop-playdate-sdk.git

# Install SDK
scoop install playdate-sdk
```

:warning: You might need an elevated shell to install/uninstall the SDK

## Issues

There's a known issue when uninstalling the software, Scoop might not be able to delete the SDK's uninstaller and you will end up with an error like the following:


```
ERROR Couldn't remove '~\scoop\apps\playdate-sdk\1.12.0'; it may be in use.
```

While the uninstaller will be deleted after rebooting your computer, Scoop will still list the Playdate SDK as a failed installation.

## License

This work is licensed under [The MIT License](LICENSE).
