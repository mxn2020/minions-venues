"""
Minions Venues SDK — Type Schemas
Custom MinionType schemas for Minions Venues.
"""

from minions.types import FieldDefinition, FieldValidation, MinionType

tent_type = MinionType(
    id="venues-tent",
    name="Tent",
    slug="tent",
    description="An Oktoberfest tent with its metadata and capacity info.",
    icon="🎪",
    schema=[
        FieldDefinition(name="name", type="string", label="name"),
        FieldDefinition(name="shortName", type="string", label="shortName"),
        FieldDefinition(name="brewer", type="string", label="brewer"),
        FieldDefinition(name="totalSeats", type="number", label="totalSeats"),
        FieldDefinition(name="standingCapacity", type="number", label="standingCapacity"),
        FieldDefinition(name="website", type="string", label="website"),
        FieldDefinition(name="reservationUrl", type="string", label="reservationUrl"),
        FieldDefinition(name="category", type="select", label="category"),
        FieldDefinition(name="isLargeTent", type="boolean", label="isLargeTent"),
        FieldDefinition(name="status", type="select", label="status"),
    ],
)

tent_area_type = MinionType(
    id="venues-tent-area",
    name="Tent area",
    slug="tent-area",
    description="A reservable section within a tent (Boxen, gallery, terrace, etc.).",
    icon="🪑",
    schema=[
        FieldDefinition(name="tentId", type="string", label="tentId"),
        FieldDefinition(name="name", type="string", label="name"),
        FieldDefinition(name="areaType", type="select", label="areaType"),
        FieldDefinition(name="seats", type="number", label="seats"),
        FieldDefinition(name="isIndoor", type="boolean", label="isIndoor"),
        FieldDefinition(name="isEvening", type="boolean", label="isEvening"),
        FieldDefinition(name="minimumSpend", type="number", label="minimumSpend"),
        FieldDefinition(name="currency", type="string", label="currency"),
        FieldDefinition(name="notes", type="string", label="notes"),
    ],
)

reservation_rule_type = MinionType(
    id="venues-reservation-rule",
    name="Reservation rule",
    slug="reservation-rule",
    description="Rules and constraints for reserving a specific tent or area.",
    icon="📏",
    schema=[
        FieldDefinition(name="tentId", type="string", label="tentId"),
        FieldDefinition(name="tentAreaId", type="string", label="tentAreaId"),
        FieldDefinition(name="minGroupSize", type="number", label="minGroupSize"),
        FieldDefinition(name="maxGroupSize", type="number", label="maxGroupSize"),
        FieldDefinition(name="reservationOpenDate", type="string", label="reservationOpenDate"),
        FieldDefinition(name="reservationCloseDate", type="string", label="reservationCloseDate"),
        FieldDefinition(name="mustOrderFood", type="boolean", label="mustOrderFood"),
        FieldDefinition(name="depositRequired", type="boolean", label="depositRequired"),
        FieldDefinition(name="depositAmount", type="number", label="depositAmount"),
        FieldDefinition(name="notes", type="string", label="notes"),
    ],
)

opening_schedule_type = MinionType(
    id="venues-opening-schedule",
    name="Opening schedule",
    slug="opening-schedule",
    description="The daily opening hours and session definitions for a tent.",
    icon="🕐",
    schema=[
        FieldDefinition(name="tentId", type="string", label="tentId"),
        FieldDefinition(name="date", type="string", label="date"),
        FieldDefinition(name="openTime", type="string", label="openTime"),
        FieldDefinition(name="closeTime", type="string", label="closeTime"),
        FieldDefinition(name="sessionType", type="select", label="sessionType"),
        FieldDefinition(name="isSpecialEvent", type="boolean", label="isSpecialEvent"),
        FieldDefinition(name="eventName", type="string", label="eventName"),
    ],
)

custom_types: list[MinionType] = [
    tent_type,
    tent_area_type,
    reservation_rule_type,
    opening_schedule_type,
]

