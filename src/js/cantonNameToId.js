const CANTON_NAME_TO_ID = new Map([
  ['Aargau', 'AG'],
  ['Appenzell Innerrhoden', 'AI'],
  ['Appenzell Ausserrhoden', 'AR'],
  ['Bern', 'BE'],
  ['Basel-Landschaft', 'BL'],
  ['Basel-Stadt', 'BS'],
  ['Fribourg', 'FR'],
  ['Genève', 'GE'],
  ['Glarus', 'GL'],
  ['Graubünden', 'GR'],
  ['Jura', 'JU'],
  ['Luzern', 'LU'],
  ['Neuchâtel', 'NE'],
  ['Nidwalden', 'NW'],
  ['Obwalden', 'OW'],
  ['St. Gallen', 'SG'],
  ['Schaffhausen', 'SH'],
  ['Solothurn', 'SO'],
  ['Schwyz', 'SZ'],
  ['Thurgau', 'TG'],
  ['Ticino', 'TI'],
  ['Uri', 'UR'],
  ['Vaud', 'VD'],
  ['Valais', 'VS'],
  ['Zug', 'ZG'],
  ['Zürich', 'ZH'],
]);

export default name => CANTON_NAME_TO_ID.get(name);