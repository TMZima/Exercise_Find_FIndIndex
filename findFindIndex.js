// Starter Code:
const mythicalCreatures = [
  { name: "Dragon", type: "Fire", lastSeen: "Volcano Valley" },
  { name: "Mermaid", type: "Water", lastSeen: "Coral Caves" },
  { name: "Unicorn", type: "Land", lastSeen: "Enchanted Forest" },
  { name: "Griffin", type: "Air", lastSeen: "Highwind Mountains" },
  { name: "Kraken", type: "Water", lastSeen: "Abyssal Depths" },
];

// Task 1: Use the 'find' method to locate the first creature of the 'Water' type and log its name to the console.

// Use the 'find' method to locate the first creature of the 'Water' type.
const firstWaterCreature = mythicalCreatures.find((creature) => {
  // Check if the creature is of the 'Water' type.
  return creature.type === "Water";
});
// Log the name of the first creature of the 'Water' type to the console.
console.log(firstWaterCreature.name);

// Task 2: Use the 'findIndex' method to locate the index of the 'Griffin' in the mythical creatures array and log it to the console.

// Use the 'findIndex' method to locate the index of the 'Griffin' in the mythical creatures array.
const griffinIndex = mythicalCreatures.findIndex((creature) => {
  // Check if the creature is a 'Griffin'.
  return creature.name === "Griffin";
});
// Log the index of the 'Griffin' to the console.
console.log(griffinIndex);

// Task 3: Use the 'find' method to locate the first creature last seen in 'Enchanted Forest'.

// Use the 'find' method to locate the first creature last seen in 'Enchanted Forest'.
const enchantedForestCreature = mythicalCreatures.find((creature) => {
  // Check if the creature was last seen in 'Enchanted Forest
  return creature.lastSeen === "Enchanted Forest";
});
// Log the creature last seen in 'Enchanted Forest' to the console.
console.log(enchantedForestCreature);
