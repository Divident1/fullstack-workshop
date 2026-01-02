

// Store active modals to manage body scroll
const activeModals = new Set();
function createModal(options) {
    // defaults
    const { title = 'Modal', content = '', buttons = [] } = options;

    // Create Modal Elements
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';

    const container = document.createElement('div');
    container.className = 'modal-container';

    // Header
    const header = document.createElement('div');
    header.className = 'modal-header';

    const titleEl = document.createElement('h2');
    titleEl.className = 'modal-title';
    titleEl.textContent = title;

    const closeBtn = document.createElement('button');
    closeBtn.className = 'modal-close-btn';
    closeBtn.innerHTML = '&times;';
    closeBtn.ariaLabel = 'Close modal';

    header.appendChild(titleEl);
    header.appendChild(closeBtn);

    // Body
    const body = document.createElement('div');
    body.className = 'modal-body';
    body.textContent = content;

    // Footer (Buttons)
    const footer = document.createElement('div');
    footer.className = 'modal-footer';

    buttons.forEach(btnConfig => {
        const btn = document.createElement('button');
        btn.textContent = btnConfig.text;
        btn.className = `btn btn-${btnConfig.type || 'primary'}`; // secondary, danger, etc.

        if (btnConfig.onClick) {
            btn.addEventListener('click', () => {
                btnConfig.onClick();
            });
        }

        footer.appendChild(btn);
    });

    // Assemble Config
    container.appendChild(header);
    container.appendChild(body);
    if (buttons.length > 0) {
        container.appendChild(footer);
    }
    overlay.appendChild(container);

    // Add to DOM
    document.body.appendChild(overlay);

    // Modal Instance Logic
    const modal = {
        element: overlay,
        open() {

            // To be safe for animation, we can use requestAnimationFrame
            requestAnimationFrame(() => {
                overlay.classList.add('open');
            });

            activeModals.add(this);
            document.body.classList.add('modal-open');
        },
        close() {
            overlay.classList.remove('open');

            // Wait for animation to finish before removing from DOM
            overlay.addEventListener('transitionend', () => {
                if (overlay.parentNode) {
                    overlay.parentNode.removeChild(overlay);
                }
            }, { once: true });

            activeModals.delete(this);
            if (activeModals.size === 0) {
                document.body.classList.remove('modal-open');
            }
        }
    };

    // Close on X button
    closeBtn.addEventListener('click', () => modal.close());

    // Close on Overlay click (but not on container click)
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            modal.close();
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', function escHandler(e) {
        if (e.key === 'Escape') {
            // Check if this is the top-most modal or just close it?

            if (overlay.classList.contains('open')) {
                const iterator = activeModals.values();
                let last = null;
                for (const m of activeModals) {
                    last = m;
                }

                // Only close if THIS modal is the last one (top one)
                if (last === modal) {
                    modal.close();
                    // Remove listener? We are using an anonymous function here but locally scoped to closure.
                    // The listener reference is lost for removeEventListener unless we name it.
                    document.removeEventListener('keydown', escHandler);
                }
            }
        }
    });

    // Better cleanup for the generic ESC listener:

    // Let's refactor the Escape key logic slightly to be cleaner.
    const escHandler = (e) => {
        if (e.key === 'Escape' && overlay.classList.contains('open')) {
            const iterator = activeModals.values();
            let last = null;
            for (const m of activeModals) {
                last = m;
            }
            if (last === modal) {
                modal.close();
            }
        }
    };
    document.addEventListener('keydown', escHandler);

    // Hook into close to remove listener
    const originalClose = modal.close;
    modal.close = function () {
        document.removeEventListener('keydown', escHandler);
        originalClose.call(modal);
    };

    return modal;
}
