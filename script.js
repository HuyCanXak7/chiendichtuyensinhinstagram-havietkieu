// script.js

// Navbar sticky and smooth scroll
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-links a');

    // Sticky navbar
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.9)';
        }
    });

    // Smooth scroll for nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    // Fade-in animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in', 'visible');
            }
        });
    }, observerOptions);

    // Observe sections for fade-in
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Modal functionality for gallery
    const modal = document.getElementById('video-modal');
    const modalVideo = document.getElementById('modal-video');
    const closeBtn = document.querySelector('.close');
    const videoItems = document.querySelectorAll('.video-item');

    videoItems.forEach(item => {
        item.addEventListener('click', function() {
            const videoSrc = this.getAttribute('data-video');
            modalVideo.src = videoSrc;
            modal.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        modalVideo.src = '';
    });

    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            modalVideo.src = '';
        }
    });

    // Form validation and submission
    const form = document.getElementById('lead-form');
    const formMessage = document.getElementById('form-message');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const email = document.getElementById('email').value.trim();
        const major = document.getElementById('major').value;

        let isValid = true;
        let message = '';

        // Validate name
        if (name === '') {
            isValid = false;
            message += 'Vui lòng nhập họ và tên.<br>';
        }

        // Validate phone
        const phoneRegex = /^[0-9]{10,11}$/;
        if (!phoneRegex.test(phone)) {
            isValid = false;
            message += 'Số điện thoại không hợp lệ.<br>';
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            isValid = false;
            message += 'Email không hợp lệ.<br>';
        }

        // Validate major
        if (major === '') {
            isValid = false;
            message += 'Vui lòng chọn ngành quan tâm.<br>';
        }

        if (isValid) {
            // Simulate form submission
            formMessage.innerHTML = '<span style="color: green;">Đăng ký thành công! Chúng tôi sẽ liên hệ với bạn sớm.</span>';
            form.reset();
        } else {
            formMessage.innerHTML = '<span style="color: red;">' + message + '</span>';
        }
    });

    // Add fade-in class to elements initially
    sections.forEach(section => {
        section.classList.add('fade-in');
    });
});