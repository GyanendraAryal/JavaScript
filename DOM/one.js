const parent = document.querySelector('.parent')
// console.log(parent);
// console.log(parent.children);
// console.log(parent.children[1].innerHTML);
// console.log(parent[1].innerHTML);

for(let i=0; i <parent.children.lenght; i++){
    console.log(parent.children[i].innerHTML);
}
parent.children[0].style.color = 'orange'

