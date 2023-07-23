import { glob } from 'glob';
import { promises as fs } from 'node:fs';
import { resolve } from 'node:path';
import download from 'download';
import hasha from 'hasha';
import os from 'node:os';

const tempDir= os.tmpdir();

await main();

async function main() {
    const bucketDir = resolve(process.cwd(), 'bucket');
    const manifests = await glob(`*.json`, { cwd: bucketDir });

    await Promise.all(manifests.map(async manifestFile => {
        const manifestPath = resolve(bucketDir, manifestFile)
        const parsedManifest = JSON.parse(await fs.readFile(manifestPath, 'utf-8'));
        const installer = basename(parsedManifest.url);

        console.time(`Downloading ${manifestFile}`);
        await download(parsedManifest.url, tempDir);
        console.timeEnd(`Downloading ${manifestFile}`);

        const fileHashes = JSON.stringify([
            `sha1:${await hasha.fromFile(`${tempDir}/${installer}`, { algorithm: 'sha1' })}`,
            `sha256:${await hasha.fromFile(`${tempDir}/${installer}`, { algorithm: 'sha256' })}`,
            `sha512:${await hasha.fromFile(`${tempDir}/${installer}`, { algorithm: 'sha512' })}`
        ]);

        if (fileHashes !== JSON.stringify(parsedManifest.hash)) {
            console.error(`Mismatching file hashes in ${parsedManifest.version}`);
            process.exit(1);
        }
    }));
}

function basename(path) {
    return path.split('/').reverse()[0];
}
