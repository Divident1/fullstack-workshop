
function createAccordion(container, data, options = { allowMultiple: false }) {
    // Render Items
    data.forEach((item, index) => {
        const itemEl = document.createElement('div');
        itemEl.className = 'accordion-item';

        // Header
        const header = document.createElement('button');
        header.className = 'accordion-header';
        header.setAttribute('aria-expanded', 'false');
        header.innerHTML = `
            <span>${item.title}</span>
            <span class="accordion-icon">▼</span>
        `;

        // Content Wrapper (for height animation)
        const contentWrapper = document.createElement('div');
        contentWrapper.className = 'accordion-content';

        // Body (for padding/content)
        const body = document.createElement('div');
        body.className = 'accordion-body';
        body.textContent = item.content;

        contentWrapper.appendChild(body);
        itemEl.appendChild(header);
        itemEl.appendChild(contentWrapper);
        container.appendChild(itemEl);

        // Click Handler
        header.addEventListener('click', () => {
            const isExpanded = header.getAttribute('aria-expanded') === 'true';

            // If NOT allowing multiple, close all others first
            if (!options.allowMultiple && !isExpanded) {
                const allHeaders = container.querySelectorAll('.accordion-header');
                allHeaders.forEach(h => {
                    if (h !== header && h.getAttribute('aria-expanded') === 'true') {
                        toggleItem(h, false);
                    }
                });
            }

            // Toggle current
            toggleItem(header, !isExpanded);
        });
    });

    /**
     * Toggles an accordion item state
     * @param {HTMLElement} headerEl 
     * @param {boolean} expand 
     */
    function toggleItem(headerEl, expand) {
        const contentEl = headerEl.nextElementSibling;
        const icon = headerEl.querySelector('.accordion-icon');

        if (expand) {
            headerEl.setAttribute('aria-expanded', 'true');
            // Provide specific height for transition
            contentEl.style.height = contentEl.scrollHeight + 'px';

          
            // Let's refine for best practice: 'auto' allows responsiveness.
            contentEl.addEventListener('transitionend', function onEnd() {
                if (headerEl.getAttribute('aria-expanded') === 'true') {
                    contentEl.style.height = 'auto'; // allow responsive resizing
                }
                contentEl.removeEventListener('transitionend', onEnd);
            });

        } else {
            // If it was 'auto', we first need to set it to current pixel height to animate FROM
            if (contentEl.style.height === 'auto') {
                contentEl.style.height = contentEl.scrollHeight + 'px';
                // Trigger reflow
                contentEl.offsetHeight;
            }

            headerEl.setAttribute('aria-expanded', 'false');

            // Use requestAnimationFrame or simple timeout to ensure the from-height is applied before setting to 0
            requestAnimationFrame(() => {
                contentEl.style.height = '0';
            });
        }
    }

    return {
      
    };
}
