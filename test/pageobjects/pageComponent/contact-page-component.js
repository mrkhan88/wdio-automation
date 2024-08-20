class ContactComponent {
  get nameInput() {
    return $("[id='evf-277-field_ys0GeZISRs-1']");
  }

  get emailInput() {
    return $(".contact-email input");
  }

  get phoneInput() {
    return $("[name='everest_forms[form_fields][66FR384cge-3]']");
  }

  get textInput() {
    return $("textarea[id='evf-277-field_yhGx3FOwr2-4']");
  }
  
  get submitBtn() {
    return $("[value='evf-submit']");
  }

  get successText() {
    return $(".everest-forms-notice");
  }
}
export default new ContactComponent();
