module.exports = {
  success,
  fail,
  repair
};

function success(item) {
  if(item.enhancement < 20){
    item.enhancement = item.enhancement + 1
    return { ...item };
  } else {
  return { ...item };
  }
}

function fail(item) {
  if(item.enhancement < 15){
    item.durability = item.durability - 5 
    return { ...item}
  } else if (item.enhancement >= 15 ){
    item.durability = item.durability - 10
      if(item.enhancement > 16){
        item.enhancement = item.enhancement - 1
        return { ...item}
      } else {
        return { ...item}
      }}
}

function repair(item) {
  item.durability = 100 
  return { ...item}
}