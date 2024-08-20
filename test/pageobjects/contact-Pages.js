import contactPageComponent from "./pageComponent/contact-page-component.js";
class ContactPages{
open () {
   return browser.url('/contact/')
}

get ContactPageComponent() {
    return contactPageComponent;
}
}
export default new ContactPages();