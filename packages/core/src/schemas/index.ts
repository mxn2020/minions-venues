/**
 * @module @minions-venues/sdk/schemas
 * Custom MinionType schemas for Minions Venues.
 */

import type { MinionType } from 'minions-sdk';

export const tentType: MinionType = {
  id: 'venues-tent',
  name: 'Tent',
  slug: 'tent',
  description: 'An Oktoberfest tent with its metadata and capacity info.',
  icon: '🎪',
  schema: [
    { name: 'name', type: 'string', label: 'name' },
    { name: 'shortName', type: 'string', label: 'shortName' },
    { name: 'brewer', type: 'string', label: 'brewer' },
    { name: 'totalSeats', type: 'number', label: 'totalSeats' },
    { name: 'standingCapacity', type: 'number', label: 'standingCapacity' },
    { name: 'website', type: 'string', label: 'website' },
    { name: 'reservationUrl', type: 'string', label: 'reservationUrl' },
    { name: 'category', type: 'select', label: 'category' },
    { name: 'isLargeTent', type: 'boolean', label: 'isLargeTent' },
    { name: 'status', type: 'select', label: 'status' },
  ],
};

export const tentareaType: MinionType = {
  id: 'venues-tent-area',
  name: 'Tent area',
  slug: 'tent-area',
  description: 'A reservable section within a tent (Boxen, gallery, terrace, etc.).',
  icon: '🪑',
  schema: [
    { name: 'tentId', type: 'string', label: 'tentId' },
    { name: 'name', type: 'string', label: 'name' },
    { name: 'areaType', type: 'select', label: 'areaType' },
    { name: 'seats', type: 'number', label: 'seats' },
    { name: 'isIndoor', type: 'boolean', label: 'isIndoor' },
    { name: 'isEvening', type: 'boolean', label: 'isEvening' },
    { name: 'minimumSpend', type: 'number', label: 'minimumSpend' },
    { name: 'currency', type: 'string', label: 'currency' },
    { name: 'notes', type: 'string', label: 'notes' },
  ],
};

export const reservationruleType: MinionType = {
  id: 'venues-reservation-rule',
  name: 'Reservation rule',
  slug: 'reservation-rule',
  description: 'Rules and constraints for reserving a specific tent or area.',
  icon: '📏',
  schema: [
    { name: 'tentId', type: 'string', label: 'tentId' },
    { name: 'tentAreaId', type: 'string', label: 'tentAreaId' },
    { name: 'minGroupSize', type: 'number', label: 'minGroupSize' },
    { name: 'maxGroupSize', type: 'number', label: 'maxGroupSize' },
    { name: 'reservationOpenDate', type: 'string', label: 'reservationOpenDate' },
    { name: 'reservationCloseDate', type: 'string', label: 'reservationCloseDate' },
    { name: 'mustOrderFood', type: 'boolean', label: 'mustOrderFood' },
    { name: 'depositRequired', type: 'boolean', label: 'depositRequired' },
    { name: 'depositAmount', type: 'number', label: 'depositAmount' },
    { name: 'notes', type: 'string', label: 'notes' },
  ],
};

export const openingscheduleType: MinionType = {
  id: 'venues-opening-schedule',
  name: 'Opening schedule',
  slug: 'opening-schedule',
  description: 'The daily opening hours and session definitions for a tent.',
  icon: '🕐',
  schema: [
    { name: 'tentId', type: 'string', label: 'tentId' },
    { name: 'date', type: 'string', label: 'date' },
    { name: 'openTime', type: 'string', label: 'openTime' },
    { name: 'closeTime', type: 'string', label: 'closeTime' },
    { name: 'sessionType', type: 'select', label: 'sessionType' },
    { name: 'isSpecialEvent', type: 'boolean', label: 'isSpecialEvent' },
    { name: 'eventName', type: 'string', label: 'eventName' },
  ],
};

export const customTypes: MinionType[] = [
  tentType,
  tentareaType,
  reservationruleType,
  openingscheduleType,
];

