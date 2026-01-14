document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        const link = item.querySelector('a');
        const submenu = item.querySelector('.submenu');

        if (link && submenu) {
            link.addEventListener('click', (e) => {
                // Allow the link to navigate while submenu is visible on hover
                // The submenu will appear on hover via CSS
            });
        }
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.main-nav')) {
            // Close dropdowns when clicking outside
            document.querySelectorAll('.submenu').forEach(sub => {
                sub.classList.remove('active');
            });
        }
    });
});
