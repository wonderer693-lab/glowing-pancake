---
title: 'How a heat pump works, in plain English'
description: 'Four parts, one loop of refrigerant, one compressor doing the heavy lifting. The physics is the same as your kitchen fridge. Here is the loop, stage by stage.'
hub: 'basics'
publishedAt: 2026-01-20
modifiedAt: 2026-06-30
schemaType: 'Article'
image: '/diagrams/cop-vs-temperature.svg'
imageAlt: 'Line chart showing COP falling as outdoor temperature drops for a cold-climate Mitsubishi unit, a Daikin Aurora, and a budget single-zone heat pump'
faqs:
  - q: 'What fluid is inside the refrigerant loop?'
    a: 'Most 2026 residential units use R-32 or R-454B. R-410A was the standard for fifteen years and is being phased out because of climate rules. All three are non-ozone-depleting. R-32 has the lowest pressure and easiest service profile.'
  - q: 'Where does the heat go in summer?'
    a: 'Outdoors. In cooling mode the indoor coil becomes the cold evaporator and the outdoor coil becomes the warm condenser. A reversing valve flips the role of each coil. The refrigerant direction reverses.'
  - q: 'How does the unit keep working at -20C?'
    a: 'Cold-climate units use a different refrigerant and a different compressor modulation. Vapor injection compressors and R-290 or R-32 refrigerant keep absorbing heat down to -25C or -30C. Standard units give up around -8C and switch to resistance backup.'
---

There are only four moving parts you care about. Outdoor coil. Compressor. Indoor coil. Expansion valve. Everything else is plumbing and sensors.

The cycle goes like this. Cold liquid refrigerant pours into the outdoor coil. A fan pulls outside air across the coil. The refrigerant absorbs heat from the outside air and boils into vapor. The vapor is still pretty cold in absolute terms, but it is warmer than the refrigerant was, and the compressor does not care that it is cold outside. The compressor only cares that it can compress the vapor.

The compressor squeezes that vapor. Pressure goes up. Temperature goes up. Now the refrigerant on the high-pressure side is hot, somewhere around 50C to 70C even when it is -10C out.

That hot high-pressure vapor streams into the indoor coil. A fan blows house air across it. The indoor air picks up heat. The refrigerant gives up heat and condenses back to a liquid. The expansion valve drops the pressure on the way back out, which drops the temperature, and the cycle starts again.

In summer a reversing valve flips the direction of flow. The indoor coil becomes the cold one and pulls heat out of your house. The outdoor coil becomes the warm one and dumps heat into the alley. The compressor runs the same way. It does not know it is summer.

## Why COP numbers can exceed 1

A COP of 3 means three units of heat delivered for every one unit of electricity spent. That sounds like free energy. It is not. The math just counts heat moved, not heat created. Two of those three units came from outdoor air.

The COP of any heat pump falls as the outdoor temperature drops. A cold-climate Mitsubishi unit might run at COP 4 at 10C outside, COP 2.5 at -10C, COP 1.7 at -25C. As long as the COP stays above 1, the heat pump is cheaper to run than resistance electric, which has a COP of exactly 1. The crossover where it becomes cheaper to burn gas is somewhere around COP 2.2 in most utility rate regions, which corresponds to an outside temperature somewhere around -7C for blended US rates. For the full breakdown of COP, HSPF2, and SEER2 numbers, see [heat pump efficiency ratings explained](/guide/heat-pump-efficiency-cop-hspf-seer/).

![Heat pump COP drops as outdoor temperature falls](/diagrams/cop-vs-temperature.svg)

Most modern cold-climate units stay above that line down to about -18C. Below that, they call on resistive backup or, in [dual-fuel installs](/guide/dual-fuel-heat-pump-setup/), on the gas furnace.

## Inverter compressors, the boring important thing

Old scroll and reciprocating compressors ran in two states. Off, or full blast. They clicked on, ran until the thermostat was satisfied, clicked off. Cycling ate efficiency, wore parts, made the temperature in the room swing four or five degrees.

Inverter compressors modulate. A Mitsubishi MUZ-FS runs from about 25% to 100% of rated capacity and adjusts continuously. The unit can loaf along at low output for hours, matched to the heat loss of the house, instead of slamming on and off. That is most of the efficiency story for modern units. For an honest take on the Mitsubishi line, read the [Mitsubishi heat pump review](/guide/mitsubishi-heat-pump-review/). For the broader landscape of air-source, ground-source, and hybrid units, see [types of heat pumps](/guide/types-of-heat-pumps/).

Cranking the frequency high on cold days is the second half. A unit that can run at 130% of nominal output for short stretches does not need oversized backup to ride out a cold snap. Most cold-climate brands quote a "maximum low-ambient heating capacity" that is 60 to 110 percent of the rated tonnage. Read the spec sheet before buying.

## What goes wrong in practice

Refrigerant leaks are the predictable failure. The copper line-set brazed joints leak over years. A brazed joint done wrong leaks in months. Every leak brings the COP down because the compressor does the same work on less refrigerant. Annual pressure checks catch it. Most homeowners do not schedule them.

The other common failure is a frozen outdoor coil. Frost builds on the outdoor coil below about 4C in humid air. The unit stops heating for 5 to 10 minutes to run a defrost cycle, switching back to cooling mode briefly to melt frost off the outdoor coil. Done right, defrost is invisible. Done badly, it dumps cold air on the house for ten minutes twice an hour on the coldest day.

A good installer sets the defrost timing to be demand-driven, not timed. They measure coil temperature, not just clock time. Ask. This tells you a lot about who you are hiring. For the rest of the questions worth asking before signing a contract, see the [heat pump maintenance checklist](/guide/heat-pump-maintenance-checklist/) and the writeup of [common heat pump mistakes](/guide/common-heat-pump-mistakes/).