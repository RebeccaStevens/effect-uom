import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { ResistivityUnitClass, ResistivityUnit, ResistivityUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export type Resistivity = uom.Resistivity;

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export const Resistivity: (value: number) => Resistivity = brandUom<Resistivity>;

/**
 * A unit of {@link Resistivity}.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `Ωm`
 */
export type OhmMeter = uom.OhmMeter;

/**
 * A unit of {@link Resistivity}.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `Ωm`
 */
export const OhmMeter: (value: number) => OhmMeter = brandUom<OhmMeter>;
