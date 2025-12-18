  const form = document.querySelector(".contact-form form");

    const nameInput = form.querySelector("input[placeholder='Your Name']");
    const emailInput = form.querySelector("input[type='email']");
    const phoneInput = form.querySelector("input[type='tel']");
    const budgetSelect = form.querySelector("select");
    const messageInput = form.querySelector("textarea");

    function clearErrors() {
      nameInput.setCustomValidity("");
      emailInput.setCustomValidity("");
      phoneInput.setCustomValidity("");
      budgetSelect.setCustomValidity("");
      messageInput.setCustomValidity("");
    }

    form.addEventListener("submit", function (e) {

      clearErrors();

      if (nameInput.value.trim().length < 2) {
        nameInput.setCustomValidity("Please enter your full name");
        nameInput.reportValidity();
        e.preventDefault();
        return;
      }

      if (!emailInput.checkValidity()) {
        emailInput.setCustomValidity("Please enter a valid email address");
        emailInput.reportValidity();
        e.preventDefault();
        return;
      }

      if (phoneInput.value.trim() !== "" && phoneInput.value.trim().length < 10) {
        phoneInput.setCustomValidity("Please enter a valid phone number");
        phoneInput.reportValidity();
        e.preventDefault();
        return;
      }

      if (budgetSelect.selectedIndex === 0) {
        budgetSelect.setCustomValidity("Please select a budget range");
        budgetSelect.reportValidity();
        e.preventDefault();
        return;
      }

      if (messageInput.value.trim().length < 10) {
        messageInput.setCustomValidity("Message must be at least 10 characters");
        messageInput.reportValidity();
        e.preventDefault();
        return;
      }

      clearErrors();
      e.preventDefault();
      form.reset();

    });
