import {createSlice} from "@reduxjs/toolkit";
import {board} from "../gameBoard.jsx";

const figure = localStorage.getItem("figure");
const playerPosition = localStorage.getItem("playerPosition");
const boughtStreets = localStorage.getItem("boughtStreets");
const money = localStorage.getItem("money");
const lap = localStorage.getItem("lap");
const dice = localStorage.getItem("dice");

export const gameSlice = createSlice({
    name: "game",
    initialState: {
        gameBoard: board,
        dice: dice ? JSON.parse(dice) : 0,
        chosenFigure: figure ? JSON.parse(figure) : undefined,
        playerPosition: playerPosition ? JSON.parse(playerPosition) : 1,
        lap: lap ? JSON.parse(lap) : 0,
        money: money ? JSON.parse(money) : 200,
        bought: boughtStreets ? JSON.parse(boughtStreets) : [],
        error: undefined,
        modal: false,
    },
    reducers: {
        rollDice: (state) => {
            state.dice = Math.floor(Math.random() * 6) + 1
            localStorage.setItem('dice', state.dice)
        },
        selectPlayerFigure: (state, action) => {
            state.chosenFigure = action.payload
            localStorage.setItem('figure', JSON.stringify(state.chosenFigure))
        },
        movePlayer: (state) => {
            const prevLap = state.lap
            state.lap = state.playerPosition + state.dice > 18 ? state.lap +1 : state.lap
            if (state.lap - 1 === prevLap) {
                state.money += 200
                localStorage.setItem('money', state.money)
            }
            state.playerPosition = (state.playerPosition + state.dice - 1) % 18 + 1;

            localStorage.setItem('playerPosition', state.playerPosition)
            localStorage.setItem('lap', state.lap)
        },
        setNewGame: (state) => {
            state.lap = 0
            state.playerPosition = 1
            state.money = 200
            state.bought = []
            state.dice = 0
            state.error = undefined
            state.modal = false
            localStorage.setItem('lap', state.lap)
            localStorage.setItem('playerPosition', state.playerPosition)
            localStorage.setItem('money', state.money)
            localStorage.setItem('boughtStreets', JSON.stringify(state.bought))
        },
        addStreetToBought: (state, action) => {
            const street = action.payload
            const alreadyBought = state.bought.includes(street)
            if (alreadyBought) {
                state.error = 'Already bought street'
            } else {
                state.error = undefined
                state.bought.push(action.payload)
                localStorage.setItem('boughtStreets', JSON.stringify(state.bought))
            }
        },
        payMoney: (state, action) => {
            state.money -= action.payload
            localStorage.setItem('money', state.money)
        },
        setErrorMessage: (state, action) => {
            state.error = action.payload
        },
        sellStreet: (state, action) => {
            const street = action.payload
            state.money += street.price / 2
            state.bought = state.bought.filter(item => item.number !== street.number)
            state.error = undefined
            localStorage.setItem('boughtStreets', JSON.stringify(state.bought))
        },
        setModal: (state, action) => {
            state.modal = action.payload
        },
    }
})


export const {rollDice, selectPlayerFigure, movePlayer, addStreetToBought, payMoney, setNewGame, setErrorMessage, sellStreet, setModal } = gameSlice.actions

export default gameSlice.reducer
