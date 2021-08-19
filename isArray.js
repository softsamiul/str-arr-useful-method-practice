function getBestBuddy(friends) {
    if (Array.isArray(friends) == false) {
        return ('Opps! its not an array!');
    }
    let bestBuddy = friends[0];

    for (const friend of friends) {
        if (friend.length > bestBuddy.length) {
            bestBuddy = friend;
        }
    }
    return bestBuddy;
}

const friends = ['kolim', 'halim ve', 'James bond', 'pagla'];
const getOp = getBestBuddy(friends);
console.log(getOp);