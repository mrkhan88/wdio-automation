import blogPage from "../pageobjects/blogPage.js";

describe("Blog Functionality verification", () => {
  before(async () => {
    await blogPage.open();
  });

  it("should have correct page title", async () => {
    await expect(browser).toHaveTitle(
      expect.stringContaining("Blog – Practice E-Commerce")
    );
  });

  it("should have correct recent post count", async () => {
    // await blogPage.open();
    const postLinks = await blogPage.blogComponent.recentPostLinks;

    for (let link of postLinks) {
      const text = await link.getText();
      await expect(text.length).toBeGreaterThan(5);
    }
  });
});
