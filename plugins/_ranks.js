global.rpg = {
  role(level) {
    level = parseInt(level);
    if (isNaN(level)) return { name: "", level: "" };

    const role = [
      { name: "Rookie", level: 0 },
      { name: "Veteran", level: 5 }, //»»————⍟——««\n
      { name: "Veteran I", level: 10 },
      { name: "Veteran II", level: 15 },
      { name: "🐬 Veteran III", level: 20 },
      { name: "🥷 Elite ", level: 25 }, //𐏓・,〔𒁷, 𒆜〢
      { name: "⚔ Elite I", level: 30 },
      { name: "👑 Elite-King", level: 35 },
      { name: "🪼 PRO I", level: 40 },
      { name: "🐍 Pro II", level: 45 },
      { name: "👹 MASTER I ", level: 50 },
      { name: "🧙‍♂️ MASTER II", level: 60 },
      { name: "🧝‍♂️ GRAND MASTER", level: 70 },
      { name: "🐲 LEGENDARY Leviathan", level: 80 },
      { name: "🔮 LEGENDARY  Overlord", level: 90 },
      { name: "🔱 EMPEROR of the Seven Seas 🔱", level: 100 },
    ];

    return role.reverse().find((role) => level >= role.level);
  },
};
