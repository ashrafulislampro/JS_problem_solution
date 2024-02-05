function regExVar(str){
    const prefix = ['Mr.', 'Mrs.', 'Miss.', 'Br.', 'Dr.', 'CRS.'];
    let re;

    for(let i = 0; i < prefix.length; i++) {
        const element = prefix[i];
        const regEx = new RegExp(element, "is");

        console.log("element", element, regEx, "str",str, regEx.test(str));

        // if(regEx.test(str)){
        //     re = true;
        //     break;
        // }else re = false;

    }


    return re;
}

const str = "Mrs#ffff"
const result = regExVar(str);
console.log("result : ",result);