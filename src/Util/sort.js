function ascend(a, b) {
  if (a.importance < b.importance) {
    return -1;
  }
  if (a.importance > b.importance) {
    return 1;
  }
  return 0;
}

function descend(a, b) {
  if (a.importance > b.importance) {
    return -1;
  }
  if (a.importance < b.importance) {
    return 1;
  }
  return 0;
}

module.exports={ascend,descend};
