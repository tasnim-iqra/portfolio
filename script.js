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

    // Tab functionality
    const photographyTab = document.getElementById('photography-tab');
    const hennaTab = document.getElementById('henna-tab');
    const gallery = document.getElementById('gallery');
    const hennaGallery = document.getElementById('henna-gallery');
    const photographyNav = document.getElementById('photography-nav');
    const hennaNav = document.getElementById('henna-nav');
    const mobilePhotographyNav = document.getElementById('mobile-photography-nav');
    const mobileHennaNav = document.getElementById('mobile-henna-nav');

    const showTab = (tab) => {
        if (tab === 'gallery') {
            gallery.classList.remove('hidden');
            hennaGallery.classList.add('hidden');
            photographyTab.classList.add('border-pink-500','text-pink-500');
            photographyTab.classList.remove('text-gray-600', 'border-transparent');
            hennaTab.classList.remove('border-pink-500','text-pink-500');
            hennaTab.classList.add('text-gray-600', 'border-transparent');
        } else {
            gallery.classList.add('hidden');
            hennaGallery.classList.remove('hidden');
            photographyTab.classList.remove('border-pink-500','text-pink-500');
            photographyTab.classList.add('text-gray-600', 'border-transparent');
            hennaTab.classList.add('border-pink-500','text-pink-500');
            hennaTab.classList.remove('text-gray-600', 'border-transparent');
        }
    };

    photographyTab.addEventListener('click', () => showTab('gallery'));
    hennaTab.addEventListener('click', () => showTab('henna-gallery'));
    photographyNav.addEventListener('click', () => showTab('gallery'));
    hennaNav.addEventListener('click', () => showTab('henna-gallery'));
    mobilePhotographyNav.addEventListener('click', () => showTab('gallery'));
    mobileHennaNav.addEventListener('click', () => showTab('henna-gallery'));


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