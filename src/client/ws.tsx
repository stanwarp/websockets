import { WebSocket } from "ws";

const wsServer = new WebSocket.Server({
  port: 9000,
});

wsServer.on("connection", () => {
  console.log("someone connected");
});

export const wsclient = () => {
  return <div>hello</div>;
};
