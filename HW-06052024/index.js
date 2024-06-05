const source = [
    ['Foley', 'Chemicals', 'CHEM'],
    ['Foley', 'Chemicals', 'CTO'],
    ['Foley', 'Chemicals', 'LK'],
    ['Foley', 'Chemicals', 'R8'],
    ['Foley', 'Chemicals', 'WT'],
    ['Foley', 'Finishing', 'LB2'],
    ['Foley', 'Finishing', 'LB4'],
    ['Foley', 'Finishing', 'RW1'],
    ['Foley', 'Finishing', 'RW2'],
    ['Foley', 'Line 3', 'LN3'],
    ['Foley', 'Line 3', 'Production Process'],
    ['Foley', 'Line 4', 'LN4'],
    ['Foley', 'Line 4', 'Prod Process'],
    ['Foley', 'Mill General', 'Wastewater Treatment'],
    ['Foley', 'Powerhouse', 'BB1'],
    ['Foley', 'Powerhouse', 'BB2'],
    ['Foley', 'Powerhouse', 'EV5'],
    ['Foley', 'Powerhouse', 'FWE'],
    ['Foley', 'Powerhouse', 'PB1'],
    ['Foley', 'Powerhouse', 'PB2'],
    ['Foley', 'Powerhouse', 'RB2'],
    ['Foley', 'Powerhouse', 'RB3'],
    ['Foley', 'Powerhouse', 'RB4'],
    ['Foley', 'Powerhouse', 'TG2'],
    ['Foley', 'Powerhouse', 'TG3'],
    ['Foley', 'Powerhouse', 'TG4'],
  ];
  
  function buildTree(data) {
    const root = {};
  
    data.forEach(item => {
      let currentLevel = root;
      item.forEach((part, index) => {
        if (!currentLevel[part]) {
          currentLevel[part] = index === item.length - 1 ? {} : {children: {}};
        }
        currentLevel = currentLevel[part].children || currentLevel[part];
      });
    });
  
    function convertToNestedArray(obj) {
      return Object.entries(obj).map(([key, value]) => {
        return {
          name: key,
          children: value.children ? convertToNestedArray(value.children) : []
        };
      });
    }
  
    return convertToNestedArray(root);
  }
  
  const result = buildTree(source);
  
  console.log(JSON.stringify(result, null, 2));
  