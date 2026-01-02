/**
 * Creates a reusable tab component inside the container.
 * @param {HTMLElement} container - The DOM element to render tabs into.
 * @param {Array} data - Array of objects { title, content }.
 */
function createTabs(container, data) {
    // 1. Clear container
    container.innerHTML = '';
    container.classList.add('simple-tabs');

    // 2. Create Header & Body containers
    const headers = document.createElement('div');
    headers.classList.add('tab-headers');
    headers.setAttribute('role', 'tablist');

    const body = document.createElement('div');
    body.classList.add('tab-body');

    let activeIndex = 0;
    const tabButtons = [];
    const tabContents = [];

    // 3. Generate Tabs
    data.forEach((item, index) => {
        // --- Button ---
        const btn = document.createElement('button');
        btn.textContent = item.title;
        btn.classList.add('tab-btn');
        btn.setAttribute('role', 'tab');
        btn.setAttribute('aria-selected', 'false');
        btn.setAttribute('tabindex', '-1'); // Only active tab should be focusable initially
        btn.id = `tab-btn-${index}`;
        btn.setAttribute('aria-controls', `tab-content-${index}`);

        // Click Event
        btn.addEventListener('click', () => {
            switchTab(index);
        });

        // Keydown Event (Arrow Nav)
        btn.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight') {
                e.preventDefault();
                const nextIndex = (index + 1) % data.length;
                switchTab(nextIndex);
                tabButtons[nextIndex].focus();
            } else if (e.key === 'ArrowLeft') {
                e.preventDefault();
                const prevIndex = (index - 1 + data.length) % data.length;
                switchTab(prevIndex);
                tabButtons[prevIndex].focus();
            }
        });

        headers.appendChild(btn);
        tabButtons.push(btn);

        // --- Content ---
        const content = document.createElement('div');
        content.innerHTML = item.content;
        content.classList.add('tab-content');
        content.setAttribute('role', 'tabpanel');
        content.id = `tab-content-${index}`;
        content.setAttribute('aria-labelledby', `tab-btn-${index}`);

        body.appendChild(content);
        tabContents.push(content);
    });

    // 4. State Management Function
    function switchTab(index) {
        activeIndex = index;

        // Update Headers
        tabButtons.forEach((btn, i) => {
            const isActive = i === index;
            if (isActive) {
                btn.classList.add('active');
                btn.setAttribute('aria-selected', 'true');
                btn.removeAttribute('tabindex'); // Make focusable
            } else {
                btn.classList.remove('active');
                btn.setAttribute('aria-selected', 'false');
                btn.setAttribute('tabindex', '-1');
            }
        });

        // Update Contents
        tabContents.forEach((content, i) => {
            if (i === index) {
                content.classList.add('active');
            } else {
                content.classList.remove('active');
            }
        });
    }

    // 5. Append to DOM
    container.appendChild(headers);
    container.appendChild(body);

    // 6. Initialize (First tab active)
    if (data.length > 0) {
        switchTab(0);
    }
}
