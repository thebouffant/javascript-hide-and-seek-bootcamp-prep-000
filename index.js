function getFirstSelector(selector){
 return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById("nested").querySelector(".target");
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list')

  for (let i = 0, l = rankedLists.length; i < l; i++) {
    let children = rankedLists[i].children

    for (let j = 0, k = children.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
    }
  }
}

function deepestChild() {
  let result = document.getElementById("grand-node").querySelectorAll("div")
  let test
  
  for (let i = 0; i < result.length-1; i++) {
    test = result[i].querySelector("div")
  }

return test
}
