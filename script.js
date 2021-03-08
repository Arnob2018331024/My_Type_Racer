//hardcode.com
let txt=[
`package com.ab.unionfind;\nimport static org.junit.Assert.*;\nimport com.williamfiset.datastructures.linkedlist.DoublyLinkedList;\nimport java.util.ArrayList;\nimport java.util.Collections;\nimport java.util.List;\nimport org.junit.*;\npublic class UnionFind {\n private int size;\n\n  // Used to track the size of each of the component\n  private int[] sz;\n\n  // id[i] points to the parent of i, if id[i] = i then i is a root node\n  private int[] id;\n\n  // Tracks the number of components in the union find\n  private int numComponents;\n\n  public UnionFind(int size) {\n\n    if (size <= 0) throw new IllegalArgumentException("Size <= 0 is not allowed");\n\n    this.size = numComponents = size;\n    sz = new int[size];\n    id = new int[size];\n\n    for (int i = 0; i < size; i++) {\n      id[i] = i; // Link to itself (self root)\n      sz[i] = 1; // Each component is originally of size one\n    }\n  }...\n}\n`,
`public int find(int p) {\n\n    // Find the root of the component/set\n    int root = p;\n    while (root != id[root]) root = id[root];\n\n    // Compress the path leading back to the root.\n    // Doing this operation is called "path compression"\n    // and is what gives us amortized time complexity.\n    while (p != root) {\n      int next = id[p];\n      id[p] = root;\n      p = next;\n    }\n\n    return root;\n  }\n`,
` public boolean connected(int p, int q) {\n    return find(p) == find(q);\n  }\n\n  // Return the size of the components/set 'p' belongs to\n  public int componentSize(int p) {\n    return sz[find(p)];\n  }\n\n  // Return the number of elements in this UnionFind/Disjoint set\n  public int size() {\n    return size;\n  }\n\n  // Returns the number of remaining components/sets\n  public int components() {\n    return numComponents;\n  }\n`,
` public void unify(int p, int q) {\n\n    int root1 = find(p);\n    int root2 = find(q);\n\n    // These elements are already in the same group!\n    if (root1 == root2) return;\n\n    // Merge smaller component/set into the larger one.\n    if (sz[root1] < sz[root2]) {\n      sz[root2] += sz[root1];\n      id[root1] = root2;\n    } else {\n      sz[root1] += sz[root2];\n      id[root2] = root1;\n    }\n\n    // Since the roots found are different we know that the\n    // number of components/sets has decreased by one\n    numComponents--;\n  }\n`];

document.addEventListener("DOMContentLoaded",()=>{
let c=0;
var t;
var index=Math.floor(Math.random()*99)%4;
//document.querySelector("#txt").style.display="none";
document.querySelector("#user").style.display="none";
document.querySelector("#rstbtn").style.display="none";
document.querySelector("#stbtn").onclick=()=>{
document.querySelector("#txt").value=txt[index];
document.querySelector("#txt").style.color="white";
document.querySelector("#txt").style.fontSize="24px";
document.querySelector("#txt").style.display="block";
document.querySelector("#user").style.display="block";
document.querySelector("#stbtn").style.display="none";
t=setInterval(()=>{
c++;
},1000);
};
//alert("done 1");
//document.querySelector('#txt').innerHTML=txt[index];
//alert(txt[index]);
let x='';
document.querySelector("#user").onkeyup=(event)=>{
x=document.querySelector("#user").value;
if(txt[index]===x){
clearInterval(t);
let m=c/60;
let s=c%60;
document.querySelector("#user").style.visibility="hidden";alert(`done! in ${Math.round(m)} min ${s} sec`);
c=0;

document.querySelector("#txt").value="congratulations!";
document.querySelector("#txt").style.fontSize="90px";
document.querySelector("#txt").style.color="red";
document.querySelector("#rstbtn").style.display="block";

}
let n=x.length;
for(i=0;i<n;i++)
if(x[i]!=txt[index][i])break;
if(i!=n)
document.querySelector("#user").style.color="red";
else
document.querySelector("#user").style.color="white";
}
document.querySelector("#rstbtn").onclick= ()=>{
document.querySelector("#rstbtn").style.display="none";
document.querySelector("#user").style.visibility="visible";
document.querySelector("#txt").style.color="white";
index=Math.floor(Math.random()*99)%4;
document.querySelector("#txt").value=txt[index];
document.querySelector("#txt").style.fontSize="24px";
document.querySelector("#user").value="";
t=setInterval(()=>{
c++;
},1000);
}
//alert("done 2");
});