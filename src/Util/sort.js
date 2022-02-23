function ascend(a, b) {
  if (a.difficulty < b.difficulty) {
    return -1;
  }
  if (a.difficulty > b.difficulty) {
    return 1;
  }
  return 0;
}

function descend(a, b) {
  if (a.difficulty > b.difficulty) {
    return -1;
  }
  if (a.difficulty < b.difficulty) {
    return 1;
  }
  return 0;
}

module.exports={ascend,descend};
