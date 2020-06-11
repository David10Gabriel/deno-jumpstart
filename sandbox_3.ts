// Using uuid module
import { v4 } from "https://deno.land/std/uuid/mod.ts";

const uid = v4.generate();
console.log(uid);

// Using fs module
import { readJson, writeJson } from "https://deno.land/std/fs/mod.ts";

const ninjasJson = await readJson("ninjas.json");
console.log(ninjasJson);

const booksJson = [
    {title: 'the way of kings', author: 'brandon sanderson'},
    {title: 'name of the wind', author: 'patrick rothfuss'}
]
await writeJson('books.json', booksJson, { spaces: 2 });
console.log("created books.json");

// Using http module
import { serve } from "https://deno.land/std/http/mod.ts";

const server = serve({ port: 3000 });
console.log('linstening for requests on port 3000');

for await (const req of server) {
    console.log('request made', req);
    const url = req.url
    req.respond({ body: `<h1>Hello ninjas, visited ${url}<h1>` })
}