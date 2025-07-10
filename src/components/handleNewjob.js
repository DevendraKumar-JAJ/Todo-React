function handleNewjob(list,newJob,SetList){
  let flag=true
  if(list && list.length>0){
    list.forEach(element => {
      if(element.name==newJob 
      ){
        alert('Already exists')
        flag=false
      }
    });
  }
  if(newJob==undefined || newJob==false ){
    alert('Enter task || Different task')
    flag=false
  }
  if(flag){
    SetList([...list,{"name":newJob,"done":false}])
  }
}

export default handleNewjob