import {
  app,
  HttpRequest,
  HttpResponseInit,
  InvocationContext,
} from "@azure/functions";
import { add } from "../add";

export async function helloWorld(
  _: HttpRequest,
  __: InvocationContext,
): Promise<HttpResponseInit> {
  return { body: `Hello world!\n1+2 equals to ${add(1, 2)}` };
}

app.http("hello-world", {
  methods: ["GET"],
  authLevel: "anonymous",
  handler: helloWorld,
});
