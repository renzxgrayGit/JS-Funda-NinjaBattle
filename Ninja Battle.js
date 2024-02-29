var ninja1 = {
    hp: 100,
    strength: 15,
    attack: function() {
       return Math.floor(Math.random() * (this.strength + 1));
    }
}

var ninja2 = {
    hp: 150,
    strength: 5,
    attack: function() {
        return Math.floor(Math.random() * (this.strength + 1));
    }
}

for (let i = 1; i <= 10; i++) {
    console.log('===Round ', i, '===');

    //Ninja 1 attacks ninja2
    let ninja1Damage = ninja1.attack();
    ninja2.hp -= ninja1Damage;
    console.log('Ninja1 attacks Ninja2 damaged of', ninja1Damage + '! Ninja1 HP:', ninja1.hp + '. Ninja2 HP:', ninja2.hp);

    //Ninja 1 attacks ninja2
    let ninja2Damage = ninja2.attack();
    ninja1.hp -= ninja2Damage;
    console.log('Ninja2 attacks Ninja1 damaged of', ninja2Damage + '! Ninja2 HP:', ninja2.hp + '. Ninja1 HP:', ninja1.hp);
}

let winner = (ninja1.hp > ninja2.hp) ? 'Ninja1' : 'Ninja2';
console.log(' ')
console.log('The winner is', winner + '!');
