const gameMap = [
    1, 2, 3, 4, 5, 6,
    18, 0, 0, 0, 0, 7,
    17, 0, 0, 0, 0, 8,
    16, 0, 0, 0, 0, 9,
    15, 14, 13, 12, 11, 10,
]

const createFullBoard = () => {
    return gameMap.map((item) => {
        let cell = { number: item, playerIs: false };

        if (item === 1) {
            cell.text = "START";
        } else if (item % 6 === 0 && item !== 0) {
            cell.color = "lightBlue";
            cell.price = 200;
            cell.text = "LightBlue street";
        } else if (item % 5 === 0 && item !== 0) {
            cell.color = "lightpink";
            cell.price = 100;
            cell.text = "Lightpink street";
        } else if (item % 2 === 0 && !cell.color && item !== 0) {
            cell.color = "lightgreen";
            cell.price = 45;
            cell.text = "Lightgreen street";
        } else if (!cell.color && item !== 0) {
            cell.color = "violet";
            cell.price = 55;
            cell.text = "Violet street";
        }

        return cell;
    });
};

export const board = createFullBoard()


