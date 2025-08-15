import { test, expect } from "@playwright/test";

test("home renders sections and links", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: /Bridging Human Intelligence/i })).toBeVisible();
  await page.locator("a", { hasText: "Skills" }).click();
  await expect(page.locator("#skills")).toBeVisible();
  await page.locator("a", { hasText: "Projects" }).click();
  await expect(page.locator("#projects")).toBeVisible();
  await page.locator("a", { hasText: "Contact" }).click();
  await expect(page.locator("#contact")).toBeVisible();
  await expect(page.getByRole("link", { name: /LinkedIn/i })).toHaveAttribute(
    "href",
    /linkedin\.com\/in\/mehiret-abdissa21/
  );
});


