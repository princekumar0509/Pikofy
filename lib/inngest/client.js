import { Inngest } from "inngest";

// Initialize the Inngest client
export const inngest = new Inngest({
  id: "equinex",
  name: "Equinex",
  eventKey: process.env.INNGEST_EVENT_KEY,
});