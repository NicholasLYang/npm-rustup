import { $ } from "bun";
import * as path from "path";

const resp = await fetch("https://sh.rustup.rs");
const text = await resp.text();
const rustupPath = path.join(import.meta.dir, "node_modules", "rustup.sh");
await Bun.write(rustupPath, text);
await $`chmod +x ${rustupPath}`;
const installDir = path.join(import.meta.dir, "node_modules", ".rustup");
await $`RUSTUP_HOME=${installDir} ./rustup.sh -y`;


