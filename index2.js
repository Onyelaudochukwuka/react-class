let promise = (num) => {
    return new Promise((resolve, reject) => {
        let solution = 0;
        for (let i = 1; i <= num; i++) {
            solution += i;
        }
        return solution < 1000 ? resolve(solution) : reject("Number is too big");
    })
};
promise(1000)
    .then(data => console.log(data, "Resolved"))
    .catch(err => console.log(err + "REjected"))