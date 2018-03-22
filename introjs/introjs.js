const DEFAULT_LANGAGES = ['HTML', 'CSS', 'JS'];

let wilder = {
  nom: 'Lorion',
  prenom: 'Alexandre',
  age: 29,
  ville: 'Bordeaux',
  langages: ['HTML', 'CSS', 'JS']
};

console.log(`Bonjour ${wilder.nom} ${wilder.prenom}, bienvenue à la Wild ${wilder.ville}.`);

const addLanguage = (_listLang, _lang) => {
  _listLang.push(_lang);
};

addLanguage(wilder.langages, 'PHP');
addLanguage(wilder.langages, 'Java');

const printLanguages = (_listLang) => {
  return `J’apprend à coder les langages suivants : ${_listLang.join(",")}`;
}

console.log(printLanguages(wilder.langages));

const resetLanguages = (_wilder, _defaultLanguages) => {
  _wilder.langages = _wilder.langages.filter(_lang => _defaultLanguages.includes(_lang));
}

resetLanguages(wilder, ['HTML', 'CSS', 'JS']);

console.log(printLanguages(wilder.langages));

const switchAge = (_wilder) => {
  switch (true) {
    case (_wilder.age < 18): console.log("Les mineurs ne sont pas autorisés dans l’établissement!");break;
    case(_wilder.age < 25): console.log("Je ne vais plus pouvoir profiter de la carte Jeune dans pas très longtemps"); break;
    case(_wilder.age < 50): console.log("Un demi-siècle? ça fait beaucoup non?"); break;
    default: console.log("Je suis trop vieux pour ces conneries…");
  }
}

switchAge(wilder);
