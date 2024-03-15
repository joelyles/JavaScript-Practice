const fsPromises = require('fs').promises;
const path = require('path');

const newText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
const oldText = 'This is a sample document';

// update file text

const updateText = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'lorem.txt'), 'utf8');
        console.log(data);
        await fsPromises.writeFile(path.join(__dirname, 'files', 'lorem.txt'), oldText);
        await fsPromises.rename(path.join(__dirname, 'files', 'lorem.txt'), path.join(__dirname, 'files', 'starter.txt'));
    } catch (err) {
        console.error(err)
    }
}

/* const updateText = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8');
        console.log(data);
        await fsPromises.writeFile(path.join(__dirname, 'files', 'starter.txt'), newText);
        await fsPromises.rename(path.join(__dirname, 'files', 'starter.txt'), path.join(__dirname, 'files', 'lorem.txt'));
    } catch (err) {
        console.error(err)
    }
} */

updateText();