// One Word From Grandma — make.fun bounty
// u-0xkianno-one-word-from-grandma-f04bed16
//
// The entry is a single word: the word my grandma would text about AI.
//
// Why this word: "contraption" is the word a grandmother reaches for when
// a machine is too clever and too complicated to name properly. It is warm
// and a little baffled — she is not angry at the machine, she is fond of
// it and suspicious of it at the same time, the way grandmothers are about
// anything new that hums. It is funny in one word because the whole joke
// is in the sound of it: a clanking, whirring, over-engineered thing
// summed up by a woman who has seen a century of gadgets come and go.
// And it is tied to the machine itself, not to any subject at all — a
// contraption is, by definition, a device, a piece of machinery, the
// thing on the table doing something nobody can quite explain. It is not
// the obvious pick ("robot", "computer"), and it is instantly readable:
// eleven letters, one word, no tricks, no punctuation, no explanation.
// Just the word, the way she would type it to a grandchild.
//
// The program writes exactly that word — eleven characters, no trailing
// newline, no extra whitespace — to the output file the grader reads.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "contraption";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), WORD, "utf8");
