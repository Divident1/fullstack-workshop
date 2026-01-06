const typeOf = (value) => {
    
    if (typeof value === 'number' && isNaN(value)) {
        return 'nan';
    }

  
    const rawType = Object.prototype.toString.call(value);

    // Extract the "Type" part 
    // and convert to lowercase
    return rawType.slice(8, -1).toLowerCase();
};

console.log(typeOf(null));           // "null"
console.log(typeOf(undefined));      // "undefined"
console.log(typeOf(42));             // "number"
console.log(typeOf(NaN));            // "nan"
console.log(typeOf('hello'));        // "string"
console.log(typeOf(true));           // "boolean"
console.log(typeOf(Symbol()));       // "symbol"
console.log(typeOf([]));             // "array"
console.log(typeOf({}));             // "object"
console.log(typeOf(() => { }));       // "function"
console.log(typeOf(new Date()));     // "date"
console.log(typeOf(new Map()));      // "map"
console.log(typeOf(new Set()));      // "set"
console.log(typeOf(/regex/));        // "regexp"
console.log(typeOf(new Error()));    // "error"
console.log(typeOf(Promise.resolve())); // "promise"
