import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

console.log("reload");

app.use((ctx) => {
  ctx.response.body = "Change this World!";
});

await app.listen({ port: 9000 });