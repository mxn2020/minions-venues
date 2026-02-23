/**
 * Minions Venues SDK
 *
 * Tent definitions, capacities, reservation rules, and opening schedules for Oktoberfest
 *
 * @module @minions-venues/sdk
 */

export const VERSION = '0.1.0';

/**
 * Example: Create a client instance for Minions Venues.
 * Replace this with your actual SDK entry point.
 */
export function createClient(options = {}) {
    return {
        version: VERSION,
        ...options,
    };
}

export * from './schemas/index.js';
