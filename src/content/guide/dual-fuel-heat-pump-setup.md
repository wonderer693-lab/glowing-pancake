---
title: 'Dual fuel heat pump setup, the honest playbook'
description: 'Pairing a heat pump with an existing gas furnace is the most common cold-climate mixed-fuel setup. The trick is the switchover setting. Done right you save 30 percent annual HVAC cost. Done wrong you pay extra for the privilege.'
hub: 'install'
publishedAt: 2026-07-19
modifiedAt: 2026-07-22
schemaType: 'HowTo'
image: '/diagrams/dual-fuel-switchover.svg'
imageAlt: 'Diagram showing the operating cost of a heat pump and a gas furnace as outdoor temperature falls, with the switchover point around -7C where the furnace becomes cheaper to run'
faqs:
  - q: 'What temperature should dual fuel switchover be set to?'
    a: 'Depends on your local gas-to-electric price ratio. Default around -7C outdoor in most US rate plans. Some northern US households drop to -12C if electric is cheap and gas is expensive; South households go higher to -3C if gas is cheap.'
  - q: 'Can my existing furnace keep the ductwork when I add a heat pump coil?'
    a: 'Yes, the coil sits above furnace heat exchanger in the same air handler. Existing ductwork stays. The furnace becomes backup. The indoor air handler fan runs both heating modes.'
  - q: 'Is dual fuel better than all-electric with resistance backup?'
    a: 'Depends on gas availability and price. In cold US climates with cheap reliable gas, dual-fuel is typically the cheaper annual cost. All-electric has lower emissions if grid is clean.'
---

Dual-fuel is the mixed-fuel option. A heat pump coil sits above the existing gas furnace in the same air handler. Both share the ductwork. The control board decides, based on outdoor temperature and indoor load, which side fires. Done right it saves money and emissions at the same time. Done wrong it costs more than either option alone.

![Operating cost curves for heat pump and gas furnace showing switchover point around -7C](/diagrams/dual-fuel-switchover.svg)

This guide walks through what matters.

## The operating mode options

Four modes are possible with dual-fuel control logic.

Mode 1. Heat pump carries load alone. Outdoor warm enough that heat pump covers everything. Most common in shoulder season.

Mode 2. Heat pump runs plus resistance backup. Heat pump is working but cannot quite hold indoor setpoint. Five kW backup strip fires for short stretches.

Mode 3. Furnace carries alone. Outdoor temperature passes switchover. Heat pump locks out. Furnace runs full. Typical for the 50 coldest hours a winter.

Mode 4. Furnace plus resistance backup. Furnace carries most of the load, resistance assists if furnace cannot keep up. Rare in cold-climate installs.

The control board's job is to pick the cheapest mode per hour. A smart thermostat that knows electric and gas rate per BTU can decide. A "set a switchover temperature and forget" thermostat does it backward.

## Switchover by temperature vs switchover by cost

The simple switchover setting. "Below -7C, run furnace. Above -7C, run heat pump." Most Honeywell thermostats default to this.

The cost-optimized switchover. Heat pump carries the load until electricity cost per BTU exceeds gas cost per BTU at the current outdoor temperature. The Nest Learning Thermostat gen 4 does this with its Heat Pump Balance feature.

At -7C outdoor, COP of typical cold-climate unit falls to about 1.8. At $0.20 per kWh electricity and $1.40 per therm gas, the heat pump's cost per million BTU at -7C is $0.20 × 293 ÷ 1.8 = $32.56. The furnace at 95% AFUE is $14.74 per million BTU. Switching at -7C saves $17.83 per million BTU when the furnace runs instead.

But at -3C, COP moves up to about 2.2. Heat pump cost per million BTU becomes $26.64. Furnace is still $14.74. Furnace still cheaper. Switch to furnace at -3C outdoor.

The crossover SNP for the given rates is approximately when HP COP equals the furnace cost ratio. Compute: 0.20 × 293 / (1.40 / 0.095) = HP COP at parity = 4.0. The HP reaches COP 4 around 8 to 10 C outside. So with these rates in shoulder season, heat pump wins through almost the entire heating season. Only the coldest hours flip to furnace.

## Setting the switchover

Two practical setups apply.

Setup 1. Set the switchover at -7C outdoor. Simple. Most installers default to this. Saves 25 to 35 percent annual operating cost vs furnace alone.

Setup 2. Use a Nest Learning Thermostat with Heat Pump Balance. Set balance to "max savings." Nest computes the right switchover each hour based on local rates it pulls from your registered utility. Saves 35 to 45 percent on the same setup.

A Nest gen 4 on a dual-fuel cold-climate setup has been my recommendation since 2024 when Google shipped heat-pump balance. It learns over the first month and typically lands within 10 percent of the theoretically optimal switchover for your rates.

## Wiring the dual-fuel logic

The thermostat gets two fuel side signals. W1 calls the furnace gas valve, Y1 calls the heat pump compressor. The dual-fuel control board decides whether to allow both simultaneously or alternate.

OEM dual-fuel control board from the heat pump manufacturer: cleanest. Mitsubishi M-Series dual-fuel board is the reference. Wires cleanly.

Bypass with simple isolation relay wiring: works. Most 24V AC control systems will accept this. About $35 in parts plus an hour of labor.

Edge case. Allowing furnace and heat pump simultaneously. Not recommended. The warm furnace air stream scrimishes with the heat pump coil and the COP drops 20 to 25 percent during the conflict minutes. Use logic that locks one out when the other is on.

## The indoor air handler

Two paths:

Existing furnace is an ECM variable speed high-efficiency gas furnace. Keep it. Use it as the dual-fuel backup. Good system.

Existing furnace is 80 percent AFUE single stage older unit. Replace it, not because it is broken, because the fan on these is too small for the heat pump side. Old single-speed fan motors run full CFM regardless of heat pump modulation. Pairing modern heat pump with old furnace costs 10 percent COP at the heat pump side. Replace the furnace if it is pre-1995 vintage.

If you are keeping an existing ECM furnace from 1995 onward, you can pair it. The ECM fan will modulate along with the heat pump's compressor.

## Worst-case dual-fuel scenario

A household in New Hampshire bought a 36k BTU Mitsubishi HyperHeat heat pump in 2023. Paired it with a 64k BTU 80% AFUE gas furnace from 1997. Thermostat wired by an HVAC contractor who set switchover at 14 C (57 F). Result: heat pump ran only in shoulder season, gas furnace carried most of the cold winter. Annual savings vs furnace alone was 9 percent, not the 35 percent headline number.

Lesson: the switchover setting matters more than the unit selection. A 14C switchover is essentially turning off the heat pump when it matters most, returning control to the furnace.

Diagnose by checking the switchover on the thermostat. Reset to -7 to -12 C for cold-climate. Savings jump back to design levels.

## Three lines to remember

Dual fuel saves 30 to 40 percent annual HVAC operating cost in cold US climates with reasonable gas supply. Real number, not marketing.

The thermostat matters more than the heat pump in this mode. Buy a smart thermostat that does cost-optimized balance. Nest gen 4 or Daikin One+ if you bought a Daikin.

The furnace stays useful as backup. Do not throw it away. Even at 80% AFUE, the unit still pays for itself 50 hours of the coldest winter.