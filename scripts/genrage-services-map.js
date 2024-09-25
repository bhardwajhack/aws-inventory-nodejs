import fs from 'fs/promises'; // Use fs/promises for promise-based APIs
import path from 'path';

console.log('Hello world')
console.log(process.cwd());


const rootPath = process.cwd();



// Path to the clients directory
const awsClientsDirPath = path.join(rootPath, 'aws-sdk-js-v3', 'clients');

// Get all directories asynchronously
async function listDirectories() {
    try {
        const items = await fs.readdir(awsClientsDirPath, { withFileTypes: true });
        const directories = items
            .filter(item => item.isDirectory())
            .map(item => item.name);

        console.log('Directories in clients folder:', directories);
        return directories;
    } catch (err) {
        console.error('Error reading directory:', err);
        return null;
    }
    return [];
}

const dirs = await listDirectories();
const clientConfigList = dirs.map(dir => {
    return {
        service : dir.replace('client-', ''),
        clientImport: `@aws-sdk/${dir}`,
    }
})

console.log(clientConfigList);

const importLost = clientConfigList.map(x => x.clientImport)

console.log(importLost.join(' '));

const clients = {

}

// for(let clientConfig of clientConfigList){
//     clients[clientConfig['service']] = await import(clientConfig['clientImport']);
// }

// console.log(clients);

// const lib = await import('@aws-sdk/client-s3');


// const clientKey = Object.keys(lib).find(item => item.endsWith('Client') && !item.startsWith('_'));
// console.log(clientKey);
// const serviceClient = new lib[clientKey]();

// console.log(lib)
// const a = `${Object.keys(lib)}`;


// console.log('serviceClient: ', serviceClient);
// console.log('done');


