function encontrarmayor(arr) {
    let mayor = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > mayor) {
            mayor = arr[i];
        }
    }

    return mayor;
}

console.log(encontrarmayor([10, 5, 8, 30]));
