# scoop-playdate-sdk

> A [Scoop](https://scoop.sh/) bucket to install the Playdate SDK.

[![License](https://img.shields.io/github/license/idleberg/scoop-playdate-sdk?style=for-the-badge)](LICENSE)
[![Version](https://img.shields.io/github/v/release/idleberg/scoop-playdate-sdk?style=for-the-badge)](https://github.com/idleberg/scoop-playdate-sdk/releases)
[![Build](https://img.shields.io/github/actions/workflow/status/idleberg/scoop-playdate-sdk/test.yml?style=for-the-badge)](https://github.com/idleberg/scoop-playdate-sdk/releases)

## Usage

After adding the bucket, you can install the Playdate SDK like you would any other software in Scoop:

```powershell
# Add SDK bucket
scoop bucket add playdate-sdk https://github.com/idleberg/scoop-playdate-sdk

# Optional: Install sudo helper to elevate PowerShell
scoop install sudo

# Install SDK
sudo scoop install playdate-sdk
```

:warning: You might need an elevated shell to install/uninstall the SDK, similar to the example above

## Beta Versions

This bucket also allows installing beta versions of the SDK.

```powershell
sudo scoop install playdate-sdk-beta
```

## Known Issues

Occasionally, Scoop might not be able to delete Playdate SDK's install folder and you will end up with an error similar to this:

```
ERROR Couldn't remove '~\scoop\apps\playdate-sdk\1.11.1'; it may be in use.
```

While the mentioned install folder is usually empty, Scoop will still list it as a failed installation. To fix this, you can delete the folder manually.

```powershell
Remove-Item ~\scoop\apps\playdate-sdk

# Beta versions
Remove-Item ~\scoop\apps\playdate-sdk-beta
```

## Related

- [Playdate SDK Feed](https://github.com/idleberg/playdate-sdk-feed)
- [More package managers](https://gist.github.com/idleberg/e246f7a582ac173d156c60ec23ce2af0)

## License

This work is licensed under [The MIT License](LICENSE).
