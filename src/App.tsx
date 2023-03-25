import React from "react";
import { wsclient } from "./client/ws";

export const App: React.FC = () => (
  <section>
    <div>{wsclient()}</div>
    <h1>Hello React</h1>
  </section>
);
