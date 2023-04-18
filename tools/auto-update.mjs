import { promises as fs } from 'node:fs';
import { resolve } from 'node:path';
import download from 'download';
import hasha from 'hasha';
import os from 'node:os';

const feedUrl = 'https://idleberg.github.io/playdate-sdk-feed/feed.json';
const tempDir= os.tmpdir();

await main();

async function main() {
    const latestVersion = await getLatestVersion();
    const latestBucketVersion = await getLatestBucketVersion();

    if (!latestVersion || !latestBucketVersion) {
        throw Error('Missing version', { latestVersion, latestBucketVersion});
    }

    if (latestVersion === latestBucketVersion) {
        console.log('No updates available');
        process.exit();
    }

    const downloadFile = `PlaydateSDK-${latestVersion}.exe`;

    await download(`https://download.panic.com/playdate_sdk/Windows/${downloadFile}`, tempDir);

    await writeBucketJson({
        version: latestVersion,
        sha1: await hasha.fromFile(`${tempDir}/${downloadFile}`, { algorithm: 'sha1' }),
        sha256: await hasha.fromFile(`${tempDir}/${downloadFile}`, { algorithm: 'sha256' }),
        sha512: await hasha.fromFile(`${tempDir}/${downloadFile}`, { algorithm: 'sha512' })
    });
}

async function getLatestVersion() {
    const response = await fetch(feedUrl);

    if (!response.ok) {
        throw Error(reponse.statusMessage);
    }

    const feed = await response.json() || {};

    return feed?.items[0]?.id || '';
}

async function getLatestBucketVersion() {
    return JSON.parse(await fs.readFile('bucket/playdate-sdk.json', 'utf8')).version || '';
}

async function writeBucketJson(data) {
    const bucketJSON = JSON.stringify({
        "version":  data.version,
        "license": {
            "identifier": "Proprietary",
            "url": "https://play.date/dev/sdk-license"
        },
        "url":  `https://download.panic.com/playdate_sdk/Windows/PlaydateSDK-${data.version}.exe`,
        "homepage":  "https://play.date/dev/",
        "hash": [
            `sha1:${data.sha1}`,
            `sha256:${data.sha256}`,
            `sha512:${data.sha512}`
        ],
        "checkver": {
            "url": "https://play.date/dev/",
            "re": "Download Playdate SDK ([\\d.]+)"
        },
        "bin": [
            "bin/pdc.exe",
            "bin/pdutil.exe"
        ],
        "env_set": {
            "PLAYDATE_SDK_PATH": "$dir"
        },
        "installer":  {
            "args": [
                "/S",
                "/D=$dir"
            ]
        },
        "uninstaller": {
            "file": "Uninstall_Playdate_SDK.exe",
            "args": "/S"
        }
    }, null, 4);

    const outPath = resolve(process.cwd(), 'bucket/playdate-sdk.json');

    await fs.writeFile(outPath, bucketJSON, 'utf8');
}
