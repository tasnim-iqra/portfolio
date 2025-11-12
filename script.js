document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    const emailLink = document.getElementById('email-link');
    if (emailLink) {
        const user = 'tasnim.iqra29';
        const domain = 'gmail.com';
        emailLink.setAttribute('href', 'mailto:' + user + '@' + domain);
    }

    // Modal functionality
    const imageModal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const closeModal = document.getElementById('close-modal');
    const prevImage = document.getElementById('prev-image');
    const nextImage = document.getElementById('next-image');

    const galleryImages = document.querySelectorAll('#gallery img, #henna-gallery img');
    const imageUrls = Array.from(galleryImages).map(img => img.src);
    let currentImageIndex = 0;

    const openModal = (index) => {
        currentImageIndex = index;
        modalImage.src = imageUrls[currentImageIndex];
        imageModal.classList.remove('hidden');
    };

    const hideModal = () => {
        imageModal.classList.add('hidden');
    };

    const showPrevImage = () => {
        currentImageIndex = (currentImageIndex - 1 + imageUrls.length) % imageUrls.length;
        modalImage.src = imageUrls[currentImageIndex];
    };

    const showNextImage = () => {
        currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
        modalImage.src = imageUrls[currentImageIndex];
    };

    galleryImages.forEach((img, index) => {
        img.addEventListener('click', () => {
            openModal(index);
        });
    });

    closeModal.addEventListener('click', hideModal);
    prevImage.addEventListener('click', showPrevImage);
    nextImage.addEventListener('click', showNextImage);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !imageModal.classList.contains('hidden')) {
            hideModal();
        }
    });
});