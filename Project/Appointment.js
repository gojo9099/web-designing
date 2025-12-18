  const slots = document.querySelectorAll('.slot');
        let selectedSlot = "";

        slots.forEach(slot => {
            slot.addEventListener('click', function () {
                if (!this.classList.contains('disabled')) {
                    slots.forEach(s => s.classList.remove('active-slot'));
                    this.classList.add('active-slot');
                    selectedSlot = this.innerText;
                }
            });
        });

        const form = document.getElementById("bookingForm");

        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const services = document.querySelectorAll("input[name='service']:checked");

            const dateInput = document.querySelector("input[type='date']");
            const fname = document.querySelector("input[placeholder='First Name']");
            const lname = document.querySelector("input[placeholder='Last Name']");
            const email = document.querySelector("input[type='email']");
            const phone = document.querySelector("input[type='tel']");
            const terms = document.getElementById("terms");

            if (services.length === 0) {
                alert("Please select at least one service");
                return;
            }

            if (!dateInput.value) {
                alert("Please select appointment date");
                return;
            }

            if (selectedSlot === "") {
                alert("Please select a time slot");
                return;
            }

            if (fname.value.trim().length < 2) {
                alert("Enter valid first name");
                fname.focus();
                return;
            }

            if (lname.value.trim().length < 2) {
                alert("Enter valid last name");
                lname.focus();
                return;
            }

            if (!email.value.includes("@") || !email.value.includes(".")) {
                alert("Enter valid email address");
                email.focus();
                return;
            }

            if (phone.value.trim().length < 10) {
                alert("Enter valid phone number");
                phone.focus();
                return;
            }

            if (!terms.checked) {
                alert("Please accept the cancellation policy");
                return;
            }

            alert("Appointment booked successfully");

            form.reset();
            slots.forEach(s => s.classList.remove("active-slot"));
            selectedSlot = "";
        });