
import * as fs from "fs";
import * as os from "os";
import * as pathLib from "path";

export function getDefaultPath() {
  return pathLib.join(os.homedir(), 'Documents/VirtualDJ/');
}

export function getVirtualDjHistory(path: string) {
  const filename = pathLib.join(path, 'History/tracklist.txt');
  const files: Array<{ date: number, song_title: string }> = [];
  const data = fs.readFileSync(filename, 'UTF-8');

  // split the contents by new line
  const lines = data.split(/\r?\n/);

  // print all lines
  lines.forEach((line) => {
    if (line.match(/^\d/)) {
      const songDetails = line.split(':');
      const date = new Date();
      date.setHours(parseInt(songDetails[0]));
      date.setMinutes(parseInt(songDetails[1]))
      files.push({
        song_title: songDetails[2],
        date: date.getTime(),
      })
      // Return true
   }
  });
  return files;
}
