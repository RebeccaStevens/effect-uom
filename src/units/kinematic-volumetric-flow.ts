import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { VolumetricFlowUnitClass, VolumetricFlowUnit, VolumetricFlowUnitFrom } from "uom-types";

/**
 * @group Unit Classes
 * @category Kinematic
 */
export type VolumetricFlow = uom.VolumetricFlow;

/**
 * @group Unit Classes
 * @category Kinematic
 */
export const VolumetricFlow: (value: number) => VolumetricFlow = brandUom;

/**
 * A unit of {@link VolumetricFlow}.
 *
 * @group Units
 * @category Kinematic
 * @symbol `m³/s`
 */
export type CubicMeterPerSecond = uom.CubicMeterPerSecond;

/**
 * A unit of {@link VolumetricFlow}.
 *
 * @group Units
 * @category Kinematic
 * @symbol `m³/s`
 */
export const CubicMeterPerSecond: (value: number) => CubicMeterPerSecond = brandUom;
