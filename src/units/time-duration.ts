import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { DurationUnitClass, DurationUnit, DurationUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Time
 */
export type Duration = uom.Duration;

/**
 * @group Abstract Units
 * @category Time
 */
export const Duration: (value: number) => Duration = brandUom<Duration>;

/**
 * A unit of {@link Duration}.
 *
 * @group Units
 * @category Base
 * @category Time
 * @symbol `s`
 */
export type Second = uom.Second;

/**
 * A unit of {@link Duration}.
 *
 * @group Units
 * @category Base
 * @category Time
 * @symbol `s`
 */
export const Second: (value: number) => Second = brandUom<Second>;

/**
 * A unit of {@link Duration}.
 *
 * @group Units
 * @category Time
 * @symbol `min`
 */
export type Minute = uom.Minute;

/**
 * A unit of {@link Duration}.
 *
 * @group Units
 * @category Time
 * @symbol `min`
 */
export const Minute: (value: number) => Minute = brandUom<Minute>;

/**
 * A unit of {@link Duration}.
 *
 * @group Units
 * @category Time
 * @symbol `hr`
 */
export type Hour = uom.Hour;

/**
 * A unit of {@link Duration}.
 *
 * @group Units
 * @category Time
 * @symbol `hr`
 */
export const Hour: (value: number) => Hour = brandUom<Hour>;

/**
 * A unit of {@link Duration}.
 *
 * @group Units
 * @category Time
 * @symbol `day`
 */
export type Day = uom.Day;

/**
 * A unit of {@link Duration}.
 *
 * @group Units
 * @category Time
 * @symbol `day`
 */
export const Day: (value: number) => Day = brandUom<Day>;

/**
 * A unit of {@link Duration}.
 *
 * @group Units
 * @category Time
 * @symbol `wk`
 */
export type Week = uom.Week;

/**
 * A unit of {@link Duration}.
 *
 * @group Units
 * @category Time
 * @symbol `wk`
 */
export const Week: (value: number) => Week = brandUom<Week>;

/**
 * A unit of {@link Duration}.
 *
 * @group Units
 * @category Time
 * @symbol `yr`
 */
export type Year = uom.Year;

/**
 * A unit of {@link Duration}.
 *
 * @group Units
 * @category Time
 * @symbol `yr`
 */
export const Year: (value: number) => Year = brandUom<Year>;
