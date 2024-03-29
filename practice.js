var ninja1 = {
    hp: 100,
    strength: 15,
    attack: function() {
        return Math.floor(Math.random() * this.strength + 1);
    }
}

var ninja2 = {
    hp: 150,
    strength: 7,
    attack: function() {
        return Math.floor(Math.random() * this.strength + 1);
    }
}

for(let i = 1; i <= 10; i++) {
    const ninja1_dmg = ninja1.attack();
    const ninja2_dmg = ninja2.attack();

    ninja1.hp -= ninja2_dmg;
    ninja2.hp -= ninja1_dmg;

    console.log(`===Round ${i}===`);
    console.log(`Ninja1 attacks Ninja2 and does a damage of${ninja1_dmg}! Ninja1 HP:${ninja1.hp}`);
    console.log(`Ninja2 attacks Ninja1 and does a damage of${ninja2_dmg}! Ninja2 HP:${ninja2.hp}`);
}

let winner = (ninja1.hp > ninja2.hp) ? 'Ninja1' : 'Ninja2';
console.log(' ')
console.log('The winner is', winner + '!');