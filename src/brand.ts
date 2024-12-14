import { type Brand, type Branded, error, refined } from "effect/Brand";
import type { AbstractUnit, Unit, UnknownAbstractUnit, UnknownUnit } from "uom-types";

type UomBrand = Brand<"uom">;

/* eslint-disable ts/consistent-type-definitions, ts/no-shadow */
declare module "uom-types" {
  interface Brand extends UomBrand {}
}
/* eslint-enable ts/consistent-type-definitions, ts/no-shadow */

/**
 * Brand a custom uom {@link Unit} or {@link AbstractUnit} with effect's {@link refined} function.
 */
export const brandUom: <T extends UnknownUnit | UnknownAbstractUnit>(value: number) => T = refined<
  Branded<number, any>
>(
  (n) => typeof n === "number",
  (n) => error(`Expected ${n} to be a number`),
) as any;
