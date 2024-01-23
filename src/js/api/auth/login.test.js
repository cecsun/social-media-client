import { save } from "../../storage/save.js";
import { apiPath } from "../constants.js";
import { login } from "./login.js";
import { expect, jest } from "@jest/globals";
import { headers } from "../headers.js";

global.fetch = jest.fn();
jest.mock("../../storage/save.js");

describe("Login Function", () => {
  const email = "mock@example.com";
  const password = "password";
  it("stores the token and profile", async () => {
    global.fetch.mockResolvedValue({
      ok: true,
      json: async () => ({ accessToken: "test-token", userData: "userData" }),
    });

    await login(email, password);
    expect(global.fetch).toHaveBeenCalledWith(`${apiPath}/social/auth/login`, {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: headers("application/json"),
    });

    expect(save).toHaveBeenCalledWith("token", "test-token");
    expect(save).toHaveBeenCalledWith("profile", { userData: "userData" });
  });

  it("throws an error if the response is not ok", async () => {
    global.fetch.mockResolvedValue({
      ok: false,
      statusText: "Not Found",
    });
    let err = undefined;
    try {
      await login(email, password);
    } catch (error) {
      err = error;
    }

    expect(err).toBeDefined();
    expect(err.message).toEqual("Not Found");
  });
});
