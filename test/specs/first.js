describe("Browser inital testing", () => {
  it("should successfully load url", async () => {
    await browser.url("https://webdriver.io/");
    await browser.pause(3000);

    console.log("this is test");
  });
});
