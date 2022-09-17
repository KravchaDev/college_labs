import fs from 'fs';
import path from 'path';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export function getDataObject(object) {
    const objectDataPath = path.join(__dirname, `/stores/${object}.json`);
    let objectData = fs.readFileSync(objectDataPath);
    return JSON.parse(objectData);
}

export function rewriteDataObject(object, data) {
    const objectDataPath = path.join(__dirname, `/stores/${object}.json`);
    fs.writeFileSync(objectDataPath, JSON.stringify(data));
}