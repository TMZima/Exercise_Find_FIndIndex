// Starter Code:
const mythicalCreatures = [
  { name: "Dragon", type: "Fire", lastSeen: "Volcano Valley" },
  { name: "Mermaid", type: "Water", lastSeen: "Coral Caves" },
  { name: "Unicorn", type: "Land", lastSeen: "Enchanted Forest" },
  { name: "Griffin", type: "Air", lastSeen: "Highwind Mountains" },
  { name: "Kraken", type: "Water", lastSeen: "Abyssal Depths" },
];

// Task 1: Use the 'find' method to locate the first creature of the 'Water' type and log its name to the console.
mythicalCreatures.find((creature) => {
  if (creature.type === "Water") {
    console.log(creature.name);
  }
});
