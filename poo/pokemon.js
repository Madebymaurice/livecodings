class Pokemon {
  constructor(_name, _type, _taille, _pv, _attack) {
    this.name = _name;
    this.type = _type;
    this.taille = _taille;
    this.pv = _pv;
    this.attack = _attack; //name, power
  }

  attackPokemon(_pokemon) {
    const say = `${this.name} attaque ${_pokemon.name} avec ${this.attack.name}.
    Il inflige ${this.attack.power} dégâts.`;
    _pokemon.receiveDmg(this.attack.power);
    return say;
  }

  receiveDmg(_power) {
    this.pv -= _power;
  }

  isAlive() {
    if (this.pv > 0) {
      return `Il reste ${this.pv} points de vie à ${this.name}`;
    }
    return `${this.name} est KO.`;
  }

  talk() {
    return `Je suis un ${this.name} de type ${this.type},
    je mesure ${this.taille} cm
    et je possède actuellement ${this.pv} points de vie!`;
  }
}

const bulbizarre = new Pokemon('Bulbizarre', 'plante', 70, 10, {
  name: 'Fouet liane',
  power: 8
});

const pikachu = new Pokemon('Pikachu', 'electrique', 60, 15, {
  name: 'Vive attaque',
  power: 7
});

console.log(pikachu.talk());
console.log(pikachu.attackPokemon(bulbizarre));
console.log(bulbizarre.isAlive());
console.log(pikachu.attackPokemon(bulbizarre));
console.log(bulbizarre.isAlive());
