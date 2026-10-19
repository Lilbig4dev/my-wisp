import http from "node:http";
import { server as wisp } from "@mercuryworkshop/wisp-js/server";

const srv = http.createServer((req, res) => res.end("Wisp server running"));
srv.on("upgrade", (req, socket, head) => wisp.routeRequest(req, socket, head));
srv.listen(process.env.PORT || 8080);
