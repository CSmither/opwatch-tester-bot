// Type definitions for mineflayer 2.7
// Project: https://github.com/PrismarineJS/mineflayer#readme
// Definitions by: My Self <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export class Chest {
    constructor(...args: any[]);

    close(...args: any[]): void;

    count(...args: any[]): void;

    deposit(...args: any[]): void;

    items(...args: any[]): void;

    withdraw(...args: any[]): void;

    static defaultMaxListeners: number;

    static init(): void;

    static listenerCount(emitter: any, type: any): any;

    static usingDomains: boolean;

    static windowType: number;

}

export class Dispenser {
    constructor(...args: any[]);

    close(...args: any[]): void;

    count(...args: any[]): void;

    deposit(...args: any[]): void;

    items(...args: any[]): void;

    withdraw(...args: any[]): void;

    static defaultMaxListeners: number;

    static init(): void;

    static listenerCount(emitter: any, type: any): any;

    static usingDomains: boolean;

    static windowType: number;

}

export class EnchantmentTable {
    constructor(...args: any[]);

    close(...args: any[]): void;

    enchant(...args: any[]): void;

    putLapis(...args: any[]): void;

    putTargetItem(...args: any[]): void;

    takeTargetItem(...args: any[]): void;

    targetItem(...args: any[]): void;

    static defaultMaxListeners: number;

    static init(): void;

    static listenerCount(emitter: any, type: any): any;

    static usingDomains: boolean;

    static windowType: number;

}

export class Furnace {
    constructor(...args: any[]);

    close(...args: any[]): void;

    fuelItem(...args: any[]): void;

    inputItem(...args: any[]): void;

    outputItem(...args: any[]): void;

    putFuel(...args: any[]): void;

    putInput(...args: any[]): void;

    takeFuel(...args: any[]): void;

    takeInput(...args: any[]): void;

    takeOutput(...args: any[]): void;

    static defaultMaxListeners: number;

    static init(): void;

    static listenerCount(emitter: any, type: any): any;

    static usingDomains: boolean;

    static windowType: number;

}

export const supportedVersions: string[];

export function Location(absoluteVector: any): void;

export function Painting(id: any, pos: any, name: any, direction: any): void;

export function ScoreBoard(name: any): void;

export function createBot(options: any): any;

export namespace Chest {
    class EventEmitter {
        constructor();

        addListener(type: any, listener: any): any;

        emit(type: any, args: any): any;

        eventNames(): any;

        getMaxListeners(): any;

        listenerCount(type: any): any;

        listeners(type: any): any;

        off(type: any, listener: any): any;

        on(type: any, listener: any): any;

        once(type: any, listener: any): any;

        prependListener(type: any, listener: any): any;

        prependOnceListener(type: any, listener: any): any;

        rawListeners(type: any): any;

        removeAllListeners(type: any, ...args: any[]): any;

        removeListener(type: any, listener: any): any;

        setMaxListeners(n: any): any;

        static EventEmitter: any;

        static defaultMaxListeners: number;

        static init(): void;

        static listenerCount(emitter: any, type: any): any;

        static usingDomains: boolean;

    }

    namespace EventEmitter {
        namespace init {
            const prototype: {
            };

        }

        namespace listenerCount {
            const prototype: {
            };

        }

        namespace prototype {
            function addListener(type: any, listener: any): any;

            function emit(type: any, args: any): any;

            function eventNames(): any;

            function getMaxListeners(): any;

            function listenerCount(type: any): any;

            function listeners(type: any): any;

            function off(type: any, listener: any): any;

            function on(type: any, listener: any): any;

            function once(type: any, listener: any): any;

            function prependListener(type: any, listener: any): any;

            function prependOnceListener(type: any, listener: any): any;

            function rawListeners(type: any): any;

            function removeAllListeners(type: any, ...args: any[]): any;

            function removeListener(type: any, listener: any): any;

            function setMaxListeners(n: any): any;

            namespace addListener {
                // Too-deep object hierarchy from mineflayer.Chest.EventEmitter.prototype.addListener
                const prototype: any;

            }

            namespace emit {
                // Too-deep object hierarchy from mineflayer.Chest.EventEmitter.prototype.emit
                const prototype: any;

            }

            namespace eventNames {
                // Too-deep object hierarchy from mineflayer.Chest.EventEmitter.prototype.eventNames
                const prototype: any;

            }

            namespace getMaxListeners {
                // Too-deep object hierarchy from mineflayer.Chest.EventEmitter.prototype.getMaxListeners
                const prototype: any;

            }

            namespace listenerCount {
                // Too-deep object hierarchy from mineflayer.Chest.EventEmitter.prototype.listenerCount
                const prototype: any;

            }

            namespace listeners {
                // Too-deep object hierarchy from mineflayer.Chest.EventEmitter.prototype.listeners
                const prototype: any;

            }

            namespace off {
                // Too-deep object hierarchy from mineflayer.Chest.EventEmitter.prototype.off
                const prototype: any;

            }

            namespace on {
                // Too-deep object hierarchy from mineflayer.Chest.EventEmitter.prototype.on
                const prototype: any;

            }

            namespace once {
                // Too-deep object hierarchy from mineflayer.Chest.EventEmitter.prototype.once
                const prototype: any;

            }

            namespace prependListener {
                // Too-deep object hierarchy from mineflayer.Chest.EventEmitter.prototype.prependListener
                const prototype: any;

            }

            namespace prependOnceListener {
                // Too-deep object hierarchy from mineflayer.Chest.EventEmitter.prototype.prependOnceListener
                const prototype: any;

            }

            namespace rawListeners {
                // Too-deep object hierarchy from mineflayer.Chest.EventEmitter.prototype.rawListeners
                const prototype: any;

            }

            namespace removeAllListeners {
                // Too-deep object hierarchy from mineflayer.Chest.EventEmitter.prototype.removeAllListeners
                const prototype: any;

            }

            namespace removeListener {
                // Too-deep object hierarchy from mineflayer.Chest.EventEmitter.prototype.removeListener
                const prototype: any;

            }

            namespace setMaxListeners {
                // Too-deep object hierarchy from mineflayer.Chest.EventEmitter.prototype.setMaxListeners
                const prototype: any;

            }

        }

    }

    namespace init {
        const prototype: {
        };

    }

    namespace listenerCount {
        const prototype: {
        };

    }

    namespace prototype {
        function addListener(type: any, listener: any): any;

        function close(...args: any[]): void;

        function count(...args: any[]): void;

        function deposit(...args: any[]): void;

        function emit(type: any, args: any): any;

        function eventNames(): any;

        function getMaxListeners(): any;

        function items(...args: any[]): void;

        function listenerCount(type: any): any;

        function listeners(type: any): any;

        function off(type: any, listener: any): any;

        function on(type: any, listener: any): any;

        function once(type: any, listener: any): any;

        function prependListener(type: any, listener: any): any;

        function prependOnceListener(type: any, listener: any): any;

        function rawListeners(type: any): any;

        function removeAllListeners(type: any, ...args: any[]): any;

        function removeListener(type: any, listener: any): any;

        function setMaxListeners(n: any): any;

        function withdraw(...args: any[]): void;

        namespace addListener {
            const prototype: {
            };

        }

        namespace emit {
            const prototype: {
            };

        }

        namespace eventNames {
            const prototype: {
            };

        }

        namespace getMaxListeners {
            const prototype: {
            };

        }

        namespace listenerCount {
            const prototype: {
            };

        }

        namespace listeners {
            const prototype: {
            };

        }

        namespace off {
            const prototype: {
            };

        }

        namespace on {
            const prototype: {
            };

        }

        namespace once {
            const prototype: {
            };

        }

        namespace prependListener {
            const prototype: {
            };

        }

        namespace prependOnceListener {
            const prototype: {
            };

        }

        namespace rawListeners {
            const prototype: {
            };

        }

        namespace removeAllListeners {
            const prototype: {
            };

        }

        namespace removeListener {
            const prototype: {
            };

        }

        namespace setMaxListeners {
            const prototype: {
            };

        }

    }

}

export namespace Dispenser {
    class EventEmitter {
        constructor();

        addListener(type: any, listener: any): any;

        emit(type: any, args: any): any;

        eventNames(): any;

        getMaxListeners(): any;

        listenerCount(type: any): any;

        listeners(type: any): any;

        off(type: any, listener: any): any;

        on(type: any, listener: any): any;

        once(type: any, listener: any): any;

        prependListener(type: any, listener: any): any;

        prependOnceListener(type: any, listener: any): any;

        rawListeners(type: any): any;

        removeAllListeners(type: any, ...args: any[]): any;

        removeListener(type: any, listener: any): any;

        setMaxListeners(n: any): any;

        static EventEmitter: any;

        static defaultMaxListeners: number;

        static init(): void;

        static listenerCount(emitter: any, type: any): any;

        static usingDomains: boolean;

    }

    namespace EventEmitter {
        namespace init {
            const prototype: {
            };

        }

        namespace listenerCount {
            const prototype: {
            };

        }

        namespace prototype {
            function addListener(type: any, listener: any): any;

            function emit(type: any, args: any): any;

            function eventNames(): any;

            function getMaxListeners(): any;

            function listenerCount(type: any): any;

            function listeners(type: any): any;

            function off(type: any, listener: any): any;

            function on(type: any, listener: any): any;

            function once(type: any, listener: any): any;

            function prependListener(type: any, listener: any): any;

            function prependOnceListener(type: any, listener: any): any;

            function rawListeners(type: any): any;

            function removeAllListeners(type: any, ...args: any[]): any;

            function removeListener(type: any, listener: any): any;

            function setMaxListeners(n: any): any;

            namespace addListener {
                // Too-deep object hierarchy from mineflayer.Dispenser.EventEmitter.prototype.addListener
                const prototype: any;

            }

            namespace emit {
                // Too-deep object hierarchy from mineflayer.Dispenser.EventEmitter.prototype.emit
                const prototype: any;

            }

            namespace eventNames {
                // Too-deep object hierarchy from mineflayer.Dispenser.EventEmitter.prototype.eventNames
                const prototype: any;

            }

            namespace getMaxListeners {
                // Too-deep object hierarchy from mineflayer.Dispenser.EventEmitter.prototype.getMaxListeners
                const prototype: any;

            }

            namespace listenerCount {
                // Too-deep object hierarchy from mineflayer.Dispenser.EventEmitter.prototype.listenerCount
                const prototype: any;

            }

            namespace listeners {
                // Too-deep object hierarchy from mineflayer.Dispenser.EventEmitter.prototype.listeners
                const prototype: any;

            }

            namespace off {
                // Too-deep object hierarchy from mineflayer.Dispenser.EventEmitter.prototype.off
                const prototype: any;

            }

            namespace on {
                // Too-deep object hierarchy from mineflayer.Dispenser.EventEmitter.prototype.on
                const prototype: any;

            }

            namespace once {
                // Too-deep object hierarchy from mineflayer.Dispenser.EventEmitter.prototype.once
                const prototype: any;

            }

            namespace prependListener {
                // Too-deep object hierarchy from mineflayer.Dispenser.EventEmitter.prototype.prependListener
                const prototype: any;

            }

            namespace prependOnceListener {
                // Too-deep object hierarchy from mineflayer.Dispenser.EventEmitter.prototype.prependOnceListener
                const prototype: any;

            }

            namespace rawListeners {
                // Too-deep object hierarchy from mineflayer.Dispenser.EventEmitter.prototype.rawListeners
                const prototype: any;

            }

            namespace removeAllListeners {
                // Too-deep object hierarchy from mineflayer.Dispenser.EventEmitter.prototype.removeAllListeners
                const prototype: any;

            }

            namespace removeListener {
                // Too-deep object hierarchy from mineflayer.Dispenser.EventEmitter.prototype.removeListener
                const prototype: any;

            }

            namespace setMaxListeners {
                // Too-deep object hierarchy from mineflayer.Dispenser.EventEmitter.prototype.setMaxListeners
                const prototype: any;

            }

        }

    }

    namespace init {
        const prototype: {
        };

    }

    namespace listenerCount {
        const prototype: {
        };

    }

    namespace prototype {
        function addListener(type: any, listener: any): any;

        function close(...args: any[]): void;

        function count(...args: any[]): void;

        function deposit(...args: any[]): void;

        function emit(type: any, args: any): any;

        function eventNames(): any;

        function getMaxListeners(): any;

        function items(...args: any[]): void;

        function listenerCount(type: any): any;

        function listeners(type: any): any;

        function off(type: any, listener: any): any;

        function on(type: any, listener: any): any;

        function once(type: any, listener: any): any;

        function prependListener(type: any, listener: any): any;

        function prependOnceListener(type: any, listener: any): any;

        function rawListeners(type: any): any;

        function removeAllListeners(type: any, ...args: any[]): any;

        function removeListener(type: any, listener: any): any;

        function setMaxListeners(n: any): any;

        function withdraw(...args: any[]): void;

        namespace addListener {
            const prototype: {
            };

        }

        namespace emit {
            const prototype: {
            };

        }

        namespace eventNames {
            const prototype: {
            };

        }

        namespace getMaxListeners {
            const prototype: {
            };

        }

        namespace listenerCount {
            const prototype: {
            };

        }

        namespace listeners {
            const prototype: {
            };

        }

        namespace off {
            const prototype: {
            };

        }

        namespace on {
            const prototype: {
            };

        }

        namespace once {
            const prototype: {
            };

        }

        namespace prependListener {
            const prototype: {
            };

        }

        namespace prependOnceListener {
            const prototype: {
            };

        }

        namespace rawListeners {
            const prototype: {
            };

        }

        namespace removeAllListeners {
            const prototype: {
            };

        }

        namespace removeListener {
            const prototype: {
            };

        }

        namespace setMaxListeners {
            const prototype: {
            };

        }

    }

}

export namespace EnchantmentTable {
    class EventEmitter {
        constructor();

        addListener(type: any, listener: any): any;

        emit(type: any, args: any): any;

        eventNames(): any;

        getMaxListeners(): any;

        listenerCount(type: any): any;

        listeners(type: any): any;

        off(type: any, listener: any): any;

        on(type: any, listener: any): any;

        once(type: any, listener: any): any;

        prependListener(type: any, listener: any): any;

        prependOnceListener(type: any, listener: any): any;

        rawListeners(type: any): any;

        removeAllListeners(type: any, ...args: any[]): any;

        removeListener(type: any, listener: any): any;

        setMaxListeners(n: any): any;

        static EventEmitter: any;

        static defaultMaxListeners: number;

        static init(): void;

        static listenerCount(emitter: any, type: any): any;

        static usingDomains: boolean;

    }

    namespace EventEmitter {
        namespace init {
            const prototype: {
            };

        }

        namespace listenerCount {
            const prototype: {
            };

        }

        namespace prototype {
            function addListener(type: any, listener: any): any;

            function emit(type: any, args: any): any;

            function eventNames(): any;

            function getMaxListeners(): any;

            function listenerCount(type: any): any;

            function listeners(type: any): any;

            function off(type: any, listener: any): any;

            function on(type: any, listener: any): any;

            function once(type: any, listener: any): any;

            function prependListener(type: any, listener: any): any;

            function prependOnceListener(type: any, listener: any): any;

            function rawListeners(type: any): any;

            function removeAllListeners(type: any, ...args: any[]): any;

            function removeListener(type: any, listener: any): any;

            function setMaxListeners(n: any): any;

            namespace addListener {
                // Too-deep object hierarchy from mineflayer.EnchantmentTable.EventEmitter.prototype.addListener
                const prototype: any;

            }

            namespace emit {
                // Too-deep object hierarchy from mineflayer.EnchantmentTable.EventEmitter.prototype.emit
                const prototype: any;

            }

            namespace eventNames {
                // Too-deep object hierarchy from mineflayer.EnchantmentTable.EventEmitter.prototype.eventNames
                const prototype: any;

            }

            namespace getMaxListeners {
                // Too-deep object hierarchy from mineflayer.EnchantmentTable.EventEmitter.prototype.getMaxListeners
                const prototype: any;

            }

            namespace listenerCount {
                // Too-deep object hierarchy from mineflayer.EnchantmentTable.EventEmitter.prototype.listenerCount
                const prototype: any;

            }

            namespace listeners {
                // Too-deep object hierarchy from mineflayer.EnchantmentTable.EventEmitter.prototype.listeners
                const prototype: any;

            }

            namespace off {
                // Too-deep object hierarchy from mineflayer.EnchantmentTable.EventEmitter.prototype.off
                const prototype: any;

            }

            namespace on {
                // Too-deep object hierarchy from mineflayer.EnchantmentTable.EventEmitter.prototype.on
                const prototype: any;

            }

            namespace once {
                // Too-deep object hierarchy from mineflayer.EnchantmentTable.EventEmitter.prototype.once
                const prototype: any;

            }

            namespace prependListener {
                // Too-deep object hierarchy from mineflayer.EnchantmentTable.EventEmitter.prototype.prependListener
                const prototype: any;

            }

            namespace prependOnceListener {
                // Too-deep object hierarchy from mineflayer.EnchantmentTable.EventEmitter.prototype.prependOnceListener
                const prototype: any;

            }

            namespace rawListeners {
                // Too-deep object hierarchy from mineflayer.EnchantmentTable.EventEmitter.prototype.rawListeners
                const prototype: any;

            }

            namespace removeAllListeners {
                // Too-deep object hierarchy from mineflayer.EnchantmentTable.EventEmitter.prototype.removeAllListeners
                const prototype: any;

            }

            namespace removeListener {
                // Too-deep object hierarchy from mineflayer.EnchantmentTable.EventEmitter.prototype.removeListener
                const prototype: any;

            }

            namespace setMaxListeners {
                // Too-deep object hierarchy from mineflayer.EnchantmentTable.EventEmitter.prototype.setMaxListeners
                const prototype: any;

            }

        }

    }

    namespace init {
        const prototype: {
        };

    }

    namespace listenerCount {
        const prototype: {
        };

    }

    namespace prototype {
        function addListener(type: any, listener: any): any;

        function close(...args: any[]): void;

        function emit(type: any, args: any): any;

        function enchant(...args: any[]): void;

        function eventNames(): any;

        function getMaxListeners(): any;

        function listenerCount(type: any): any;

        function listeners(type: any): any;

        function off(type: any, listener: any): any;

        function on(type: any, listener: any): any;

        function once(type: any, listener: any): any;

        function prependListener(type: any, listener: any): any;

        function prependOnceListener(type: any, listener: any): any;

        function putLapis(...args: any[]): void;

        function putTargetItem(...args: any[]): void;

        function rawListeners(type: any): any;

        function removeAllListeners(type: any, ...args: any[]): any;

        function removeListener(type: any, listener: any): any;

        function setMaxListeners(n: any): any;

        function takeTargetItem(...args: any[]): void;

        function targetItem(...args: any[]): void;

        namespace addListener {
            const prototype: {
            };

        }

        namespace emit {
            const prototype: {
            };

        }

        namespace eventNames {
            const prototype: {
            };

        }

        namespace getMaxListeners {
            const prototype: {
            };

        }

        namespace listenerCount {
            const prototype: {
            };

        }

        namespace listeners {
            const prototype: {
            };

        }

        namespace off {
            const prototype: {
            };

        }

        namespace on {
            const prototype: {
            };

        }

        namespace once {
            const prototype: {
            };

        }

        namespace prependListener {
            const prototype: {
            };

        }

        namespace prependOnceListener {
            const prototype: {
            };

        }

        namespace rawListeners {
            const prototype: {
            };

        }

        namespace removeAllListeners {
            const prototype: {
            };

        }

        namespace removeListener {
            const prototype: {
            };

        }

        namespace setMaxListeners {
            const prototype: {
            };

        }

    }

}

export namespace Furnace {
    class EventEmitter {
        constructor();

        addListener(type: any, listener: any): any;

        emit(type: any, args: any): any;

        eventNames(): any;

        getMaxListeners(): any;

        listenerCount(type: any): any;

        listeners(type: any): any;

        off(type: any, listener: any): any;

        on(type: any, listener: any): any;

        once(type: any, listener: any): any;

        prependListener(type: any, listener: any): any;

        prependOnceListener(type: any, listener: any): any;

        rawListeners(type: any): any;

        removeAllListeners(type: any, ...args: any[]): any;

        removeListener(type: any, listener: any): any;

        setMaxListeners(n: any): any;

        static EventEmitter: any;

        static defaultMaxListeners: number;

        static init(): void;

        static listenerCount(emitter: any, type: any): any;

        static usingDomains: boolean;

    }

    namespace EventEmitter {
        namespace init {
            const prototype: {
            };

        }

        namespace listenerCount {
            const prototype: {
            };

        }

        namespace prototype {
            function addListener(type: any, listener: any): any;

            function emit(type: any, args: any): any;

            function eventNames(): any;

            function getMaxListeners(): any;

            function listenerCount(type: any): any;

            function listeners(type: any): any;

            function off(type: any, listener: any): any;

            function on(type: any, listener: any): any;

            function once(type: any, listener: any): any;

            function prependListener(type: any, listener: any): any;

            function prependOnceListener(type: any, listener: any): any;

            function rawListeners(type: any): any;

            function removeAllListeners(type: any, ...args: any[]): any;

            function removeListener(type: any, listener: any): any;

            function setMaxListeners(n: any): any;

            namespace addListener {
                // Too-deep object hierarchy from mineflayer.Furnace.EventEmitter.prototype.addListener
                const prototype: any;

            }

            namespace emit {
                // Too-deep object hierarchy from mineflayer.Furnace.EventEmitter.prototype.emit
                const prototype: any;

            }

            namespace eventNames {
                // Too-deep object hierarchy from mineflayer.Furnace.EventEmitter.prototype.eventNames
                const prototype: any;

            }

            namespace getMaxListeners {
                // Too-deep object hierarchy from mineflayer.Furnace.EventEmitter.prototype.getMaxListeners
                const prototype: any;

            }

            namespace listenerCount {
                // Too-deep object hierarchy from mineflayer.Furnace.EventEmitter.prototype.listenerCount
                const prototype: any;

            }

            namespace listeners {
                // Too-deep object hierarchy from mineflayer.Furnace.EventEmitter.prototype.listeners
                const prototype: any;

            }

            namespace off {
                // Too-deep object hierarchy from mineflayer.Furnace.EventEmitter.prototype.off
                const prototype: any;

            }

            namespace on {
                // Too-deep object hierarchy from mineflayer.Furnace.EventEmitter.prototype.on
                const prototype: any;

            }

            namespace once {
                // Too-deep object hierarchy from mineflayer.Furnace.EventEmitter.prototype.once
                const prototype: any;

            }

            namespace prependListener {
                // Too-deep object hierarchy from mineflayer.Furnace.EventEmitter.prototype.prependListener
                const prototype: any;

            }

            namespace prependOnceListener {
                // Too-deep object hierarchy from mineflayer.Furnace.EventEmitter.prototype.prependOnceListener
                const prototype: any;

            }

            namespace rawListeners {
                // Too-deep object hierarchy from mineflayer.Furnace.EventEmitter.prototype.rawListeners
                const prototype: any;

            }

            namespace removeAllListeners {
                // Too-deep object hierarchy from mineflayer.Furnace.EventEmitter.prototype.removeAllListeners
                const prototype: any;

            }

            namespace removeListener {
                // Too-deep object hierarchy from mineflayer.Furnace.EventEmitter.prototype.removeListener
                const prototype: any;

            }

            namespace setMaxListeners {
                // Too-deep object hierarchy from mineflayer.Furnace.EventEmitter.prototype.setMaxListeners
                const prototype: any;

            }

        }

    }

    namespace init {
        const prototype: {
        };

    }

    namespace listenerCount {
        const prototype: {
        };

    }

    namespace prototype {
        function addListener(type: any, listener: any): any;

        function close(...args: any[]): void;

        function emit(type: any, args: any): any;

        function eventNames(): any;

        function fuelItem(...args: any[]): void;

        function getMaxListeners(): any;

        function inputItem(...args: any[]): void;

        function listenerCount(type: any): any;

        function listeners(type: any): any;

        function off(type: any, listener: any): any;

        function on(type: any, listener: any): any;

        function once(type: any, listener: any): any;

        function outputItem(...args: any[]): void;

        function prependListener(type: any, listener: any): any;

        function prependOnceListener(type: any, listener: any): any;

        function putFuel(...args: any[]): void;

        function putInput(...args: any[]): void;

        function rawListeners(type: any): any;

        function removeAllListeners(type: any, ...args: any[]): any;

        function removeListener(type: any, listener: any): any;

        function setMaxListeners(n: any): any;

        function takeFuel(...args: any[]): void;

        function takeInput(...args: any[]): void;

        function takeOutput(...args: any[]): void;

        namespace addListener {
            const prototype: {
            };

        }

        namespace emit {
            const prototype: {
            };

        }

        namespace eventNames {
            const prototype: {
            };

        }

        namespace getMaxListeners {
            const prototype: {
            };

        }

        namespace listenerCount {
            const prototype: {
            };

        }

        namespace listeners {
            const prototype: {
            };

        }

        namespace off {
            const prototype: {
            };

        }

        namespace on {
            const prototype: {
            };

        }

        namespace once {
            const prototype: {
            };

        }

        namespace prependListener {
            const prototype: {
            };

        }

        namespace prependOnceListener {
            const prototype: {
            };

        }

        namespace rawListeners {
            const prototype: {
            };

        }

        namespace removeAllListeners {
            const prototype: {
            };

        }

        namespace removeListener {
            const prototype: {
            };

        }

        namespace setMaxListeners {
            const prototype: {
            };

        }

    }

}

export namespace Location {
    const prototype: {
    };

}

export namespace Painting {
    const prototype: {
    };

}

export namespace ScoreBoard {
    const prototype: {
    };

}

export namespace createBot {
    const prototype: {
    };

}

