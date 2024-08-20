import contactPages from "../pageobjects/contact-Pages.js";
import { faker } from "@faker-js/faker";

describe("contact page functionality verification", () => {
  it("should successfully fill contact form", async () => {
    await contactPages.open();
    await contactPages.ContactPageComponent.nameInput.setValue(
      faker.person.fullName()
    );
    await contactPages.ContactPageComponent.emailInput.setValue(
      faker.internet.email()
    );
    await contactPages.ContactPageComponent.phoneInput.setValue(
      faker.phone.number()
    );

    (await contactPages.ContactPageComponent.textInput).setValue(
      faker.lorem.paragraph(2)
    );

    (await contactPages.ContactPageComponent.submitBtn).click();

    const successMsg = await contactPages.ContactPageComponent.successText;

    await expect(successMsg).toHaveText(
      expect.stringContaining("Thanks for contacting Wus!")
    );
    await browser.pause(2000);
  });
});
