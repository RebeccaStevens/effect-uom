# Effect Units of Measure

Typesafe units for Effect.

## Usage

Example:

```ts
import * as uom from "effect-uom";

const width = uom.Meter(5);
const height = uom.Meter(3);
const area = uom.mul(width, height);
// `area` will be of type `Square<Meter>` which is equivalent to `Unit<{ Meter: 2 }>`.

useArea(area);
useVolume(area); // type error - `Square<Meter>` is not assignable to `Cubic<Length>`.

function useArea<A extends uom.Square<uom.Length>>(area: A) {
  // ...
}

function useVolume<V extends uom.Cubic<uom.Length>>(volume: V) {
  // ...
}
```

### UOM Types

This library uses [uom-types](https://github.com/RebeccaStevens/uom-types) as its base and
re-exports everything from it. See the [uom-types docs](https://rebeccastevens.github.io/uom-types/)
for more information.

## Donate

[Any donations would be much appreciated](https://github.com/RebeccaStevens/effect-uom/blob/main/DONATIONS.md). 😄

### Enterprise Users

`effect-uom` is available as part of the Tidelift Subscription.

Tidelift is working with the maintainers of `effect-uom` and a growing network of open source maintainers to ensure your
open source software supply chain meets enterprise standards now and into the future. [Learn
more.](https://tidelift.com/subscription/pkg/npm-effect-uom?utm_source=npm-effect-uom&utm_medium=referral&utm_campaign=enterprise&utm_term=repo)
