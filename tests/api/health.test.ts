import { describe, it, expect } from "vitest";
import { GET } from "../../app/api/health/route";

describe("Get/api/health", () => {
  it("should return a successful health check response", async () => {
    const response = await GET();
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.status).toBe("ok");
    expect(data.message).toBe("Health check passed");
    expect(data.service).toBe("qa-ci-lab");
    expect(typeof data.timestamp).toBe("string");
    expect(typeof data.servicetime).toBe("number");
  });
});
