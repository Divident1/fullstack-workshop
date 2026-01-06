function createEventEmitter() {
    const events = {};

    return {
        on: function (eventName, listener) {
            if (!events[eventName]) {
                events[eventName] = [];
            }
            events[eventName].push(listener);

            // Return unsubscribe function
            return () => {
                if (events[eventName]) {
                    events[eventName] = events[eventName].filter(l => l !== listener);
                }
            };
        },

        once: function (eventName, listener) {
            const wrapper = (...args) => {
                listener(...args);
                // Remove self after execution
                if (events[eventName]) {
                    events[eventName] = events[eventName].filter(l => l !== wrapper);
                }
            };

            if (!events[eventName]) {
                events[eventName] = [];
            }
            events[eventName].push(wrapper);
        },

        emit: function (eventName, data) {
            if (events[eventName]) {
                // Copy array to avoid issues if listeners remove themselves during execution
                [...events[eventName]].forEach(listener => listener(data));
            }
        },

        off: function (eventName) {
            // Remove all listeners for this event
            if (events[eventName]) {
                delete events[eventName];
            }
        }
    };
}

const emitter = createEventEmitter();

// Subscribe to events
const unsubscribe = emitter.on('userLogin', (user) => {
    console.log(`${user.name} logged in`);
});

emitter.on('userLogin', (user) => {
    console.log(`Send welcome email to ${user.email}`);
});

// One-time listener
emitter.once('appStart', () => {
    console.log('App started - this only runs once');
});

// Emit events
emitter.emit('userLogin', { name: 'John', email: 'john@example.com' });


emitter.emit('appStart'); 
emitter.emit('appStart');  // Nothing happens

unsubscribe();  // Remove first listener
emitter.emit('userLogin', { name: 'Jane', email: 'jane@example.com' });
// Only outputs: "Send welcome email to jane@example.com"

emitter.off('userLogin');  // Remove all userLogin listeners
