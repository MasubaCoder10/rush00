function incrementEach(myArray) {
    var newArray = [];
    for (var i = 1; i <= myArray.length; i++) {
        if (i == 1) {
            newArray.push("un");
            continue
        }
        if (i == 2) {
            newArray.push("deux");
            continue
        }
        if (i == 3) {
            newArray.push("trois");
            continue
        }
        if (i == 4) {
            newArray.push("quatre");
            continue
        }
        if (i == 5) {
            newArray.push("cinq");
            continue
        }
        if (i == 6) {
            newArray.push("six");
            continue
        }
        if (i == 7) {
            newArray.push("sept");
            continue
        }
        if (i == 8) {
            newArray.push("huit");
            continue
        }
        if (i == 9) {
            newArray.push("neuf");
            continue
        }
        if (i == 10) {
            newArray.push("dix");
            break
        }
    };
    return newArray;
};
var nuArray = incrementEach([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(nuArray);