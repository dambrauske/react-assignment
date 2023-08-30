const gameMap = [
    1, 2, 3, 4, 5, 6,
    18, 0, 0, 0, 0, 7,
    17, 0, 0, 0, 0, 8,
    16, 0, 0, 0, 0, 9,
    15, 14, 13, 12, 11, 10,
]

const streetNames = [
    'Main Street',
    'Oak Street',
    'Pine Street',
    'Lake Street',
    'Hill Street',
    'Lee Street',
    'Bury Street',
    'Blake Street',
    'Sunset Street',
    'Abbey Street',
    'Forest Street',
    'Corn Street',
    'River Street',
    'Spruce Street',
    'Davis Street',
    'Broad Street',
    'Central Street',
    'Bridge Street',
]

const createFullBoard = () => {
    return gameMap.map((item) => {
        let cell = { number: item };

        if (item === 1) {
            cell.text = "START";
        } else if (item % 6 === 0 && item !== 0) {
            cell.color = "lightBlue";
            cell.price = 200;
        } else if (item % 5 === 0 && item !== 0) {
            cell.color = "lightpink";
            cell.price = 100;
        } else if (item % 2 === 0 && !cell.color && item !== 0) {
            cell.color = "lightgreen";
            cell.price = 80;
        } else if (!cell.color && item !== 0) {
            cell.color = "violet";
            cell.price = 155;
        }

        if (item > 1) {
            cell.text = streetNames[item - 1];
        }

        return cell;
    });
};

export const board = createFullBoard()


