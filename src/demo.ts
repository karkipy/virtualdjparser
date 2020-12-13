import { getDefaultPath, getVirtualDjHistory } from "./index";

async function read() { // ES6 function to read in all history files of a user
    const path = getDefaultPath() // gets default serato path
    console.log('curretn path', path);

    const wholeHistory = await getVirtualDjHistory(path);
    console.log('track list from history :');
    console.log(wholeHistory)
}

read()