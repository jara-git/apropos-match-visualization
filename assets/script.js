// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Role filter (Company Flow)
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

    // Toggle visibility for "personality match only"
    const personalityToggle = document.querySelector('input[type="checkbox"]');
    if (personalityToggle) {
        personalityToggle.addEventListener('change', () => {
            const cards = document.querySelectorAll('.grid-container .card');

            cards.forEach(card => {
                const bars = card.querySelectorAll('.match-bar');
                if (personalityToggle.checked) {
                    // Only show personality bar (assumed to be second)
                    bars.forEach((bar, idx) => {
                        bar.style.display = idx === 1 ? '' : 'none';
                    });
                } else {
                    bars.forEach(bar => {
                        bar.style.display = '';
                    });
                }
            });
        });
    }

    // Expand/hide info tooltip on click
    const infoIcons = document.querySelectorAll('.info-icon');
    infoIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            const summary = icon.closest('.trait-summary');
            const info = summary?.nextElementSibling;
            if (info && info.classList.contains('info-content')) {
                info.classList.toggle('visible');
            }
        });
    });

    // Show more (matches or applicants)
    const showMoreBtn = document.querySelector('.show-more');
    if (showMoreBtn) {
        showMoreBtn.addEventListener('click', () => {
            alert('Show more functionality is not implemented in this prototype.');
        });
    }
    // Toggle note textarea
    document.querySelectorAll('.toggle-note').forEach(button => {
        button.addEventListener('click', () => {
            const textarea = button.nextElementSibling;
            textarea.style.display = textarea.style.display === 'block' ? 'none' : 'block';
        });
    });
});
