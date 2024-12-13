import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { ElectricalConductivityUnitClass, ElectricalConductivityUnit, ElectricalConductivityUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export type ElectricalConductivity = uom.ElectricalConductivity;

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export const ElectricalConductivity: (value: number) => ElectricalConductivity = brandUom<ElectricalConductivity>;

/**
 * A unit of {@link ElectricalConductivity}.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `S/m`
 */
export type SiemensPerMeter = uom.SiemensPerMeter;

/**
 * A unit of {@link ElectricalConductivity}.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `S/m`
 */
export const SiemensPerMeter: (value: number) => SiemensPerMeter = brandUom<SiemensPerMeter>;
