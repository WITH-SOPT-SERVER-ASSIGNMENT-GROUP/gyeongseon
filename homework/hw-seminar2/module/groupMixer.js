const groupMixer = {
    mix: (originArray) => {
        return new Promise((resolve, reject) => {
            originArray.forEach(element => {
                // const array = [...originArray];
                element.groupIdx = parseInt(Math.random() * (originArray.length / 2 ) + 1);
                console.log(element);
                resolve(originArray);
            });
        })
    }
}

module.exports = groupMixer;