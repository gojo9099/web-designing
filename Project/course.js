     const checkboxes = document.querySelectorAll('.filters input[type="checkbox"]');
        const cards = document.querySelectorAll('.card');
        function applyFilters() {
            const active = Array.from(checkboxes).filter(c => c.checked).map(c => c.name);
            cards.forEach(card => {
                const cat = card.getAttribute('data-category');
                if (active.includes(cat)) card.style.display = 'flex'; else card.style.display = 'none';
            })
        }
        checkboxes.forEach(cb => cb.addEventListener('change', applyFilters));
        document.getElementById('clearFilters').addEventListener('click', () => {
            checkboxes.forEach(c => c.checked = false); applyFilters();
        });
        // init
        applyFilters();