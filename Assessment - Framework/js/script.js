(function () {
    var form = document.getElementById('bookingForm');
    var msg = document.getElementById('message');

    function setErr(id, text) {
        document.getElementById('err-' + id).textContent = text || '';
    }

    function getBookings() {
        var raw = localStorage.getItem('healthBookings');
        try { var arr = raw ? JSON.parse(raw) : []; return Array.isArray(arr) ? arr : [] } catch (e) { return [] }
    }

    function saveBookings(list) {
        localStorage.setItem('healthBookings', JSON.stringify(list));
    }

    function getFeedback() {
        var raw = localStorage.getItem('userFeedback');
        try { var arr = raw ? JSON.parse(raw) : []; return Array.isArray(arr) ? arr : [] } catch (e) { return [] }
    }

    function saveFeedback(list) {
        localStorage.setItem('userFeedback', JSON.stringify(list));
    }

    function validate(data) {
        var ok = true;
        var mail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!data.name.trim()) { setErr('name', 'Please enter name'); ok = false } else setErr('name', '')
        if (!/^\d{10}$/.test(data.phone)) { setErr('phone', 'Phone must be 10 digits'); ok = false } else setErr('phone', '')
        if (!mail.test(data.email)) { setErr('email', 'Enter a valid email'); ok = false } else setErr('email', '')
        var ageNum = parseInt(data.age, 10)
        if (!data.age || isNaN(ageNum) || ageNum < 1 || ageNum > 120) { setErr('age', 'Age 1-120'); ok = false } else setErr('age', '')
        if (!data.date) { setErr('date', 'Please select a date'); ok = false } else setErr('date', '')
        if (!data.concern.trim()) { setErr('concern', 'Describe concern'); ok = false } else setErr('concern', '')
        return ok
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        var data = {
            name: document.getElementById('name').value || '',
            phone: document.getElementById('phone').value || '',
            email: document.getElementById('email').value || '',
            age: document.getElementById('age').value || '',
            date: document.getElementById('date').value || '',
            concern: document.getElementById('concern').value || ''
        };
        var fbText = document.getElementById('feedback').value || '';

        if (!validate(data)) return;

        var bookings = getBookings();
        bookings.push(data);
        saveBookings(bookings);

        if (fbText.trim()) {
            var fb = getFeedback();
            var now = new Date();
            var ts = now.toLocaleString();
            fb.push({ name: data.name || 'Anonymous', text: fbText, time: ts });
            saveFeedback(fb);
        }

        msg.style.display = 'block';
        msg.textContent = 'Saved successfully';
        form.reset();
        setTimeout(function () { msg.style.display = 'none'; msg.textContent = '' }, 2500);
    });

    form.addEventListener('reset', function () {
        setErr('name', ''); setErr('phone', ''); setErr('email', ''); setErr('age', ''); setErr('date', ''); setErr('concern', ''); setErr('feedback', '');
        msg.style.display = 'none';
    });
})();
