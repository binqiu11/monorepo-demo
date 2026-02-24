import { describe, expect, it } from "vitest";
import { createMemoryHistory } from "vue-router";

import { createAppRouter } from "./index";

describe("createAppRouter", () => {
  it("composes shell routes with nomad and rmax pages", () => {
    const router = createAppRouter({ history: createMemoryHistory() });
    const allPaths = router.getRoutes().map(route => route.path);

    expect(allPaths).toContain("/login");
    expect(allPaths).toContain("/nomad");
    expect(allPaths).toContain("/rmax/test-1");
    expect(allPaths).toContain("/:pathMatch(.*)*");
  });
});
