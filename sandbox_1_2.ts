// Reading files

// const decoder = new TextDecoder('utf-8');

// const data = await Deno.readFile('readme.txt');
// console.log(decoder.decode(data));

const data = await Deno.readTextFile('readme.txt');
console.log(data);

// Writing files
const encoder = new TextEncoder();
const text = encoder.encode('hello again, denossaurs learners');

await Deno.writeFile('readme.txt', text);

// Eenaming and removing files

await Deno.rename('readme.txt', 'deleteme.txt');
await Deno.remove('deleteme.txt');

const firstText = encoder.encode('hello reader');
await Deno.writeFile('readme.txt', firstText);

// Fetch API

const res = await fetch('https://swapi.dev/api/films/');
const resData = await res.json();
console.log(resData);