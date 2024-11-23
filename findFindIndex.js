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
  if (creature.type === "Water") {
    // Log the name of the creature to the console.
    console.log(creature.name);
    // Return true to indicate that this is the element we are looking for.
    return true;
  }
});

// Task 2: Use the 'findIndex' method to locate the index of the 'Griffin' in the mythical creatures array and log it to the console.

// Use the 'findIndex' method to locate the index of the 'Griffin' in the mythical creatures array.
const griffinIndex = mythicalCreatures.findIndex((creature) => {
  // Check if the creature is the 'Griffin'.
  if (creature.name === "Griffin") {
    // Log the index of the 'Griffin' to the console.
    console.log(mythicalCreatures.indexOf(creature));
    // Return true to indicate that this is the element we are looking for.
    return true;
  }
});
