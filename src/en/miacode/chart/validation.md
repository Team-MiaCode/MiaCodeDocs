# Syntax & pattern warnings

The Syntax and Muri tabs in the bottom panel display results for the current difficulty. Editing chart text updates the lists. Selecting an entry navigates to its line, column, and preview time.

## Syntax

Syntax checks parse simai text and report syntax errors and compatibility warnings. Recheck updates the results.

<figure class="doc-figure">
<img class="interface-shot" src="/images/syntax.png" alt="Syntax check results">
<figcaption>Syntax check results</figcaption>
</figure>

### Detection rules

| Check | Rule |
| --- | --- |
| BPM and subdivision | BPM is a valid positive number and subdivision is a positive integer; notes following a BPM directive require an explicit subdivision |
| Brackets | `()`, `{}`, `[]`, and `<HS*>` require matching closing brackets |
| Timing separators | Commas advance time; missing commas after line-end notes or between notes and BPM or subdivision directives produce messages |
| Simultaneous-note separators | `/` and backticks require adjacent notes; repeated `//` produces an error |
| Hold and Touch | Checks durations, region numbers, and modifiers; a sustained Touch uses `h`, and the center Touch uses `C` |
| Slide | Checks paths, chains, duration blocks, and modifier placement; a same-head branch after `*` omits the starting position |
| Characters and termination | Checks full-width digits, brackets, separators, and other characters, and the position of the terminal marker `E` |

Compatibility warnings cover subdivisions above 384 or that do not divide 384, `h` placement in short Holds, modifier order in Hold and Break Slide notes, and Slide duration-block placement. These forms may affect parsing or conversion in other simai software.

## Pattern warnings

Muri simulates hand actions and note judgments. The list displays the type, location, related notes, and time gap.

<figure class="doc-figure">
<img class="interface-shot" src="/images/muri.png" alt="Pattern warning results">
<figcaption>Pattern warning results</figcaption>
</figure>

### Detection rules

| Type | Detection |
| --- | --- |
| Inner | Slide or Wifi completion occurs early or outside its judgment window |
| Outer | Starting or jump-starting a Slide early-judges a following note at its head |
| Tail | Slide or Wifi judgment areas conflict in time with other notes |
| Overlap | Judgments overlap at the same position, or an existing press or hold causes a note to miss its judgment window |
| Multi-touch | Simultaneous hand actions require more than two hands |

Results are classified as Muri or Warning. Some timing boundaries produce warnings. Related messages for EX-protected simple notes are also downgraded to warnings.

The Muri rendering mode provides hand radius and a timing threshold for Taps on Slide paths. Hand radius controls simulated hand coverage. The timing threshold controls the static check interval for related conflicts: 200 ms by default, adjustable from 150 to 250 ms.
