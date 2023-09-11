function addTwoNums(l1, l2){
    
    // const re1 = l1.reverse();
    // const re2 = l2.reverse();

    // let str1 = "";
    // let str2 = "";

    // for(let i = 0; i < re1.length; i++){
    //     let element = re1[i];
    //     str1 += element;
    // };
    // for(let j = 0; j < re2.length; j++){
    //     let element = re2[j];
    //     str2 += element;
    // };

    // return (Number(str1) + Number(str2)).toString().split("").reverse();

// second solution

const numberOne = parseInt(l1.reverse('').join(''));
const numberTwo = parseInt(l2.reverse('').join(''));
const result = numberOne + numberTwo;
const resultString = result.toString().split('').reverse('');
const resultArray = resultString.map((digito) => parseInt(digito))
return resultArray;

}
var addTwoNumbers = function(l1, l2) {
    let values = [];
    let overflow = 0;
    while (l1.next || l2.next) {
        const value = (l1.val + l2.val + overflow) % 10;
        overflow = l1.val + l2.val + overflow >= 10 ? 1 : 0;
        values.push(value);

        l1 = l1.next || new ListNode(0);
        l2 = l2.next || new ListNode(0);
    }
    const value = (l1.val + l2.val + overflow) % 10;
    overflow = l1.val + l2.val + overflow >= 10 ? 1 : 0;
    values.push(value);
    if (overflow === 1) {
        values.push(1);
    }
    let node = undefined;
    values.reverse().forEach(item => {
        if (node === undefined) {
            node = new ListNode(item);
        } else {
            const newNode = new ListNode(item);
            newNode.next = node;
            node = newNode;
        }
    });
    return node;
};
const l1 = [2, 4, 3];
const l2 = [5, 6, 4];
const l3 = [9,9,9,9,9,9,9];
const l4 = [9,9,9,9];

const result1 = addTwoNums(l1, l2);
const result = addTwoNumbers(l1, l2);
console.log("result9",result);