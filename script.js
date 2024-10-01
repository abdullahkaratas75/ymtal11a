// script.js
document.addEventListener('DOMContentLoaded', () => {
            const navbarLinks = document.querySelectorAll('#navbar a');

            function setActiveLink() {
                let index = 0;
                const scrollPosition = window.scrollY;

                document.querySelectorAll('section').forEach((section, i) => {
                            if (scroll