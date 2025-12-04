document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        const link = item.querySelector('a');
        const submenu = item.querySelector('.submenu');

        if (link && submenu) {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                closeAllSubmenus(submenu);
                
                submenu.classList.toggle('active');
            });
        }
    });

    function closeAllSubmenus(currentSubmenu) {
        document.querySelectorAll('.submenu').forEach(sub => {
            if (sub !== currentSubmenu && sub.classList.contains('active')) {
                sub.classList.remove('active');
            }
        });
    }

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.main-nav')) {
            closeAllSubmenus(null);
        }
    });
});
