import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { MagneticFluxUnitClass, MagneticFluxUnit, MagneticFluxUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export type MagneticFlux = uom.MagneticFlux;

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export const MagneticFlux: <V extends MagneticFlux = MagneticFlux>(value: number) => V = brandUom;

/**
 * A unit of {@link MagneticFlux}.
 *
 * One Weber is equal to the magnetic flux that in linking a circuit of one turn produces in it an
 * electromotive force of one volt as it is uniformly reduced to zero within one second.
 *
 * @group Units
 * @category Derived
 * @symbol `Wb`
 */
export type Weber = uom.Weber;

/**
 * A unit of {@link MagneticFlux}.
 *
 * One Weber is equal to the magnetic flux that in linking a circuit of one turn produces in it an
 * electromotive force of one volt as it is uniformly reduced to zero within one second.
 *
 * @group Units
 * @category Derived
 * @symbol `Wb`
 */
export const Weber: (value: number) => Weber = brandUom;
