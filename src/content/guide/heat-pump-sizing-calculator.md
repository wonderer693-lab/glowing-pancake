---
title: 'How to size a heat pump without overshooting'
description: 'Oversized heat pumps short cycle. Undersized heat pumps burn backup heat. The honest method is a room-by-room heat loss calculation. Here is what it tells you and how to read it.'
hub: 'install'
publishedAt: 2026-07-18
modifiedAt: 2026-07-19
schemaType: 'HowTo'
faqs:
  - q: 'What is Manual J and why does it matter for heat pump sizing?'
    a: 'Manual J is the ACCA''s published procedure for residential heat loss calculations. It estimates BTU per hour of heat needed at design outdoor temperature based on envelope data. Used properly it gives the right heat pump size; without it you are guessing.'
  - q: 'How much oversized can a heat pump be before it causes problems?'
    a: 'Within 15% of the calculated heating load at design temperature is usually fine. Beyond 25% oversized the unit short-cycles, drops system efficiency, and ages equipment. A 50% oversized heat pump burns COP about 10 to 15 percent.'
  - q: 'Should I size a heat pump on design day or average winter day?'
    a: 'On the design day, defined as the cold snap your region experiences every 99 percent of winter hours (the 99% heating design dry bulb temperature from ASHRAE). This is the outside temperature your unit must carry alone.'
---

The size of the heat pump is the most important spec decision. Buy too small and the unit runsbackup electric all winter. Buy too big and the unit short-cycles, age compressor, and lose 10 to 15 percent of your spec sheet COP.

The way to size a heat pump correctly is a room-by-room heat loss calculation. Most US cold-climate states require it by code now. Many homeowners skip it because the contractor skips it. Here is the process summarized and how to interpret what the contractor hands you.

## The Manual J heat loss calculation

ACCA's Manual J procedure: inputs and outputs.

Inputs:

- Insulation R-values by surface (ceiling R-49, walls R-13 to R-21, etc.)
- Window U-values and air leakage rate (from blower door test if you did one)
- Local 99% design outdoor temperature (the temperature your region gets colder than 99% of winter hours)
- Indoor design temperature (typically 21C / 70F)
- Air change rate (typical retrofit 0.5 to 0.7 ACH natural, new build 0.2 to 0.3)

Output:

- BTU per hour required per room at design temperature
- Total BTU/hour required for whole house at design (the "design heating load")

A typical 2,000-square-foot well-insulated New England house has a design heating load around 36,000 BTU per hour at -18C. The same house in central North Carolina might be 28,000 BTU/hour at -3C. The same house in Dallas might run 24,000 BTU/hour at -2C.

## Common sizing mistakes

The "rule of thumb" mistake. Old contractors eyeball 400 to 600 square feet per ton (12,000 BTU/hour) without inputting envelope data. New England houses built before 1980 with no insulation retrofits were generally 400 sqft/ton. Modern insulated tight houses are 700 to 1,200 sqft/ton.

A Manual J usually gives 25 to 40 percent lower sizing than a rule of thumb in tight modern houses. If your contractor quotes you 36k BTU per ton of need based on a 2,000-square-foot house without a Manual J, ask for one. The difference is the entire operating cost.

The "size for cooling and let heating work itself out" mistake. Some contractors size a heat pump by looking at the cooling load, since most heat pumps are overkill for cooling in cold climates. Pairing a too-small heat pump (sized for AC) with a powerful furnace (sized for heating) leaves the heat pump unable to carry winter alone. Sets you up for backup heat running all winter.

The "pump up to next tonnage" mistake. The Manual J says 30,000 BTU/hour. The contractor rounds up to 36,000 because they stock 36k units. The rounding-up cost you 10 to 15 percent in seasonal efficiency.

## How much overhead is appropriate

Generally target 10 to 15 percent above the Manual J design. Two reasons.

Sizing slightly above design day means the unit rarely calls backup. Even on the 50 coldest hours of winter, the heat pump carries.

Sizing slightly above design day also lets the unit hold its COP at the unit's typical operating point, where inverter modulation ratios are best.

Above 25 percent oversized the unit short-cycles and ages. A 36,000 BTU unit short cycling 6 times per hour at 30 percent capacity per cycle loses about 15 percent of seasonal efficiency.

## Whole-house vs per-zone

For multi-zone installs, the math gets slightly more interesting.

Whole-house heat load at design = sum across rooms. 
Single zone heat load = each room's individual load × number of zones that need to run together.

For a 3-zone install with three rooms of 10k BTU/hour each (= 30k whole-house total), running one zone at a time means each zone needs 10k of output. Running two zones together means outdoor compressor must supply 20k continuously. Running three zones together at 30k load. Match the outdoor unit's maximum modulation (and defrost cycle capacity) against realistic usage scenarios.

If you run all three zones simultaneously most cold evenings, size your outdoor at 33k to 35k continuous capacity. If you rarely run all three, 24k to 28k outdoor unit may carry the load with limited stress.

The right installer reads the Manual J, talks through how the family uses the house, and sizes accordingly.

## Standby backup design

Two ways to add standby backup heat.

Resistive strip heat. Standard option. Most indoor air handlers can mount a 5 kW to 10 kW resistance strip. Five kW cover the coldest two hours of most moderate houses; ten kW is common in cold-climate installs. The strip kicks in only when the heat pump cannot carry the load on its own, typically 50 hours per winter in cold climates.

Dual fuel. Standby backup is the existing gas furnace. The heat pump coil sits before the furnace heat exchanger in the ductwork. When the heat pump cannot carry the load, the furnace fires. The switchover is automatic either by outdoor temperature or inside temperature drop rate.

## How to read the installer's heat loss report

The installer should hand you a sheet that says:

- Room-by-room BTU requirement at design
- Window contributions (each window's BTU loss)
- Infiltration component (estimated at some ACH)
- Ventilation component if HRV is present
- Total BTU/hour

If the installer hands you a single number ("you need 3 tons"), ask for the room-by-room sheet. The penalty for skipping the calculation is yours, not theirs.

## The simplest rule

Whatever size a contractor quotes "from experience," run a Manual J with envelope data from real insulation measurements. If you insulate the attic and walls first, the heat loss drops 30 to 50 percent from "rule of thumb" guesswork. The right heat pump size is then half what the contractor originally quoted, and the install cost drops too. Insulate first, size second, install last.