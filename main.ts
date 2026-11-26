// The Painfully Honest Out-of-Office — make.fun bounty
// u-po-pu-the-painfully-honest-out-of-office-63e7ca0b
//
// A one-sentence out-of-office auto-reply: polite, warm, and painfully
// honest about what happens to the inbox while the sender is away.
// The program writes the entry text to /output/entry.txt, byte-for-byte,
// with no trailing newline, as the bounty gate requires.

import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Thank you for your email \u2014 I am on leave until Monday and will reply only to the messages that still matter when I return, which, if I am being honest, will not be most of them.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
