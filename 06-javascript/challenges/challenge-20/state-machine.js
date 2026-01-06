function createStateMachine(config) {
    let currentState = config.initial;

    return {
        // Getter for state to allow accessing it like a property
        get state() {
            return currentState;
        },

        send: function (event) {
            const stateConfig = config.states[currentState];

            // Check if the current state allows this event transition
            if (stateConfig && stateConfig.on && stateConfig.on[event]) {
                const nextState = stateConfig.on[event];

                // Update state
                currentState = nextState;

                // Execute onEnter action if it exists for the new state
                const nextStateConfig = config.states[nextState];
                if (nextStateConfig && typeof nextStateConfig.onEnter === 'function') {
                    nextStateConfig.onEnter();
                }
            }
        }
    };
}

const trafficLight = createStateMachine({
    initial: 'red',
    states: {
        red: { on: { TIMER: 'green' } },
        green: { on: { TIMER: 'yellow' } },
        yellow: { on: { TIMER: 'red' } }
    }
});

console.log('Initial state:', trafficLight.state);  // 'red'
trafficLight.send('TIMER');
console.log('After 1st TIMER:', trafficLight.state);  // 'green'
trafficLight.send('TIMER');
console.log('After 2nd TIMER:', trafficLight.state);  // 'yellow'

// With actions
console.log('\n--- Door Machine ---');
const door = createStateMachine({
    initial: 'closed',
    states: {
        closed: {
            on: { OPEN: 'open' },
            onEnter: () => console.log('Door closed')
        },
        open: {
            on: { CLOSE: 'closed' },
            onEnter: () => console.log('Door opened')
        }
    }
});

console.log('Sending OPEN...');
door.send('OPEN');   // "Door opened"

console.log('Sending CLOSE...');
door.send('CLOSE');  // "Door closed"

console.log('Sending OPEN...');
door.send('OPEN');   // "Door opened"
