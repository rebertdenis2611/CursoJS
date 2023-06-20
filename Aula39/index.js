function random(min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r)
}

const min = 10;
const max = 10;
let rand = random(min, max)

while(rand !== rand){
    rand = random(min, max);
    console.log(rand)
};


do {
    rand = random(min, max);
    console.log(rand)
} while (rand !== rand);