// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Filter cards by role in company flow
    const roleFilter = document.getElementById('role-filter');
    if (roleFilter) {
        roleFilter.addEventListener('change', () => {
            const selectedRole = roleFilter.value.toLowerCase();
            const cards = document.querySelectorAll('.grid-container .card');

            cards.forEach(card => {
                const role = card.querySelector('.match-info-row .company').textContent.toLowerCase();
                if (selectedRole === 'all roles' || role === selectedRole) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

    // Show personality match only toggle (checkbox)
    const personalityToggle = document.querySelector('input[type="checkbox"]');
    if (personalityToggle) {
        personalityToggle.addEventListener('change', () => {
            const cards = document.querySelectorAll('.grid-container .card');

            cards.forEach(card => {
                const bars = card.querySelectorAll('.match-bar');
                if (personalityToggle.checked) {
                    // Hide all bars except personality match (assumed second .match-bar)
                    bars.forEach((bar, idx) => {
                        bar.style.display = idx === 1 ? '' : 'none';
                    });
                } else {
                    // Show all bars
                    bars.forEach(bar => {
                        bar.style.display = '';
                    });
                }
            });
        });
    }

    // Show all applicants / matches button
    const showMoreBtn = document.querySelector('.show-more');
    if (showMoreBtn) {
        showMoreBtn.addEventListener('click', () => {
            alert('Show more functionality is not implemented in this prototype.');
        });
    }
});
