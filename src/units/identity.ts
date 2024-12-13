import type * as uom from "uom-types";

import { brandUom } from "../brand.ts";

export { IdentityUnitClass, IdentityUnit, IdentityUnitFrom } from "uom-types";

/**
 * @group Abstract Units
 */
export type Identity = uom.Identity;

/**
 * @group Abstract Units
 */
export const Identity: (value: number) => Identity = brandUom<Identity>;

/**
 * A {@link Unit} with no units.
 *
 * @group Units
 * @category Base
 * @symbol ``
 */
export type Unitless = uom.Unitless;

/**
 * A {@link Unit} with no units.
 *
 * @group Units
 * @category Base
 * @symbol ``
 */
export const Unitless: (value: number) => Unitless = brandUom<Unitless>;
