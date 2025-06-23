export const COLUMNS: string[][] = [

  [ 'image_1',  'image_2',  'image_3',  'image_4', 'image_5','image_6','image_7' ],
  [ 'image_8',  'image_1',  'image_7',  'image_9', 'image_10','image_6','image_11' ],
  [ 'image_12',  'image_13',  'image_9',  'image_14', 'image_15','image_3','image_10' ],
  [ 'image_16',  'image_17',  'image_18',  'image_5', 'image_14','image_11','image_19' ],
  [ 'image_20',  'image_19',  'image_18',  'image_27', 'image_17','image_21','image_22' ],
  [ 'image_16',  'image_8',  'image_23',  'image_24', 'image_20','image_25','image_26' ],
];


export function solveKeypad(selectedSymbols: string[]): string[] {
  if (selectedSymbols.length !== 4) {
    throw new Error('Vous devez sélectionner exactement 4 symboles.');
  }

  for (let colIndex = 0; colIndex < COLUMNS.length; colIndex++) {
    const currentColumn = COLUMNS[colIndex];

    const allPresent = selectedSymbols.every(symbol =>
      currentColumn.includes(symbol)
    );

    if (allPresent) {
  
      const orderedResult: string[] = [];
      for (let i = 0; i < currentColumn.length; i++) {
        const symbol = currentColumn[i];
        if (selectedSymbols.includes(symbol)) {
          orderedResult.push(symbol);
        }
      }

      return orderedResult;
    }
  }

  throw new Error(
    'Aucune colonne ne contient tous les symboles sélectionnés.'
  );
}