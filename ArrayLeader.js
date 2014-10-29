# Finding Leader in Array. 
#  Find all the Leaders in an Array. 
#  An Array element is Leader if all the elements following that array element is lesser than or equal to it. 
#  Ex: Arr = {13, 17, 5, 4, 6, 2} 
#  O/p: 17, 6, 2


#Solution:

var ele=[13,17,5,4,6,2];
ele=ele.reverse();

   var leader_ele=ele[0], leaders=[];
    ele.map( function(item) {
     if (leader_ele<=item){
        leader_ele=item;
        leaders.push(leader_ele);
     }

})
console.log(leaders.reverse());
