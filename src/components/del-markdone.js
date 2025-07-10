function delJob(list,ele,SetList){
  const newArr = list.filter((element) => element.name !== ele);
  SetList([...newArr])
}


function MarkDone(list,ele,SetList){
  const newArr = list.map((e) => ({
  ...e,
  done: e.name === ele ? true : e.done,
}));

SetList(newArr)
}

export { MarkDone, delJob}