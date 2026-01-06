function createObservable(initialValue) {
    let value = initialValue;
    const subscribers = [];

    const observable = {
        get: () => value,

        set: (newValue) => {
            const oldValue = value;
            if (newValue !== oldValue) {
                value = newValue;
                subscribers.forEach(callback => callback(newValue, oldValue));
            }
        },

        subscribe: (callback) => {
            subscribers.push(callback);
            // Return unsubscribe function for convenience, though not explicitly asked for
            return () => {
                const index = subscribers.indexOf(callback);
                if (index > -1) {
                    subscribers.splice(index, 1);
                }
            };
        },

        computed: (transformationFn) => {
            // Create a new observable with the initial transformed value
            const computedObservable = createObservable(transformationFn(value));

            // Subscribe to the current observable to update the computed one
            observable.subscribe((newValue) => {
                computedObservable.set(transformationFn(newValue));
            });

            return computedObservable;
        }
    };

    return observable;
}

const count = createObservable(0);

// Subscribe to changes
count.subscribe((newValue, oldValue) => {
    console.log(`Count changed from ${oldValue} to ${newValue}`);
});

count.set(1);  // "Count changed from 0 to 1"
count.set(5);  // "Count changed from 1 to 5"
console.log('Current count:', count.get());  // 5

// Computed observable
const doubled = count.computed(val => val * 2);
doubled.subscribe(val => console.log('Doubled:', val));

console.log('Setting count to 10...');
count.set(10);
// Expected:
// "Count changed from 5 to 10"
// "Doubled: 20"
