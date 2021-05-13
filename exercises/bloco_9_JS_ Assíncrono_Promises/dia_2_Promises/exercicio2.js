const fetchPromise = () => {
  const myPromise = new Promise ((resolve, reject) => {
    const array = Array.from(
      { length: 10 },
      () => Math.floor(Math.random() * 50) + 1,
    );//primeiro elemento do array inicia o reduce
    const sum = array.map(number => number * number)
    .reduce((acc, curr) => acc + curr);
    sum < 8000 ? resolve(sum) : reject(sum);
  });
  myPromise
  .then((sum) => console.log(`Resolvida ${sum}`))
  .catch((sum) => console.log(`Rejeitada ${sum}`))
}
fetchPromise();