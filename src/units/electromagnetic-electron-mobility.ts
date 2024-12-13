import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { ElectronMobilityUnitClass, ElectronMobilityUnit, ElectronMobilityUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export type ElectronMobility = uom.ElectronMobility;

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export const ElectronMobility: (value: number) => ElectronMobility = brandUom<ElectronMobility>;

/**
 * A unit of {@link ElectronMobility}.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `m²/(V⋅s)`
 */
export type SquareMeterPerVoltSecond = uom.SquareMeterPerVoltSecond;

/**
 * A unit of {@link ElectronMobility}.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `m²/(V⋅s)`
 */
export const SquareMeterPerVoltSecond: (value: number) => SquareMeterPerVoltSecond = brandUom<SquareMeterPerVoltSecond>;
