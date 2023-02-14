function myFunction(nArray) {
    var newArray = [];
    for (let i = 0; i < nArray.length; i++) {

        switch (nArray[i]) {
            default: console.log(`The number: ${nArray[i]}  is not included!! Please, choose the numbre from 1 to 10.`);
            break;
            case 1:
                    newArray.push("un");
                break;
            case 2:
                    newArray.push("deux");
                break;
            case 3:
                    newArray.push("trois");
                break;
            case 4:
                    newArray.push("quatre");
                break;
            case 5:
                    newArray.push("cinq");
                break;
            case 6:
                    newArray.push("six");
                break;
            case 7:
                    newArray.push("sept");
                break;
            case 8:
                    newArray.push("huit");
                break;
            case 9:
                    newArray.push("neuf");
                break;
            case 10:
                    newArray.push("dix");
                break;
        }


    }
    return newArray
}


console.log(myFunction([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//module.exports = numberToString
