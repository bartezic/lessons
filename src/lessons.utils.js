let condition = false;

const recursiveEnhanceData = array =>
  array.map(item => {
    if(condition)
      item.locked = true;

    if(!condition && item.quiz_enabled)
      condition = true;

    recursiveEnhanceData(item.children);

    return item
  });

export { recursiveEnhanceData }
