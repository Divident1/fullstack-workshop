

// Sample Data (using picsum for valid placeholder images)
const images = [
    {
        thumb: 'https://picsum.photos/id/1015/300/200',
        full: 'https://picsum.photos/id/1015/1200/800',
        caption: 'River Valley'
    },
    {
        thumb: 'https://picsum.photos/id/1016/300/200',
        full: 'https://picsum.photos/id/1016/1200/800',
        caption: 'Canyon View'
    },
    {
        thumb: 'https://picsum.photos/id/1018/300/200',
        full: 'https://picsum.photos/id/1018/1200/800',
        caption: 'Mountain Range'
    },
    {
        thumb: 'https://picsum.photos/id/1019/300/200',
        full: 'https://picsum.photos/id/1019/1200/800',
        caption: 'Night Sky'
    },
    {
        thumb: 'https://picsum.photos/id/1025/300/200',
        full: 'https://picsum.photos/id/1025/1200/800',
        caption: 'Foggy Forest'
    },
    {
        thumb: 'https://picsum.photos/id/1035/300/200',
        full: 'https://picsum.photos/id/1035/1200/800',
        caption: 'Waterfall'
    }
];

// Elements
const galleryGrid = document.getElementById('gallery');
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('.lightbox-image');
const lightboxCaption = lightbox.querySelector('.lightbox-caption');
const lightboxCounter = lightbox.querySelector('.lightbox-counter');
const loader = lightbox.querySelector('.lightbox-loader');
const closeBtn = lightbox.querySelector('.btn-close');
const prevBtn = lightbox.querySelector('.btn-prev');
const nextBtn = lightbox.querySelector('.btn-next');

let currentIndex = 0;

// Initialize Gallery
function initGallery() {
    images.forEach((imgData, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.tabIndex = 0; // Make focusable
        item.setAttribute('role', 'button');
        item.setAttribute('aria-label', `View ${imgData.caption}`);

        item.innerHTML = `
            <img src="${imgData.thumb}" alt="${imgData.caption}" class="gallery-thumb" loading="lazy">
            <div class="gallery-caption-overlay">${imgData.caption}</div>
        `;

        // Open Lightbox on click
        item.addEventListener('click', () => {
            openLightbox(index);
        });

        // Open on Enter key
        item.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                openLightbox(index);
            }
        });

        galleryGrid.appendChild(item);
    });
}

// Lightbox Functions
function openLightbox(index) {
    currentIndex = index;
    updateLightboxContent();
    lightbox.classList.add('active');
    document.body.classList.add('lightbox-open');
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.classList.remove('lightbox-open');
    // Clear src to stop loading/video if any
    setTimeout(() => {
        if (!lightbox.classList.contains('active')) {
            lightboxImg.src = '';
        }
    }, 300);
}

function updateLightboxContent() {
    const data = images[currentIndex];

    // Show loader
    loader.style.display = 'block';
    lightboxImg.style.opacity = '0.5';

    // Update Text
    lightboxCaption.textContent = data.caption;
    lightboxCounter.textContent = `${currentIndex + 1} of ${images.length}`;

    // Load Image
    const newImg = new Image();
    newImg.onload = () => {
        lightboxImg.src = newImg.src;
        loader.style.display = 'none';
        lightboxImg.style.opacity = '1';
    };
    newImg.src = data.full;
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateLightboxContent();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateLightboxContent();
}

// Event Listeners
closeBtn.addEventListener('click', closeLightbox);
nextBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent bubbling to overlay
    nextImage();
});
prevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    prevImage();
});

// Close when clicking overlay (outside image)
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target.classList.contains('lightbox-content')) {
        closeLightbox();
    }
});

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;

    if (e.key === 'Escape') {
        closeLightbox();
    } else if (e.key === 'ArrowRight') {
        nextImage();
    } else if (e.key === 'ArrowLeft') {
        prevImage();
    }
});

// Start
initGallery();
