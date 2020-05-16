import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        fortune: 90000000000,
        cardList: [{
            name: 'Big Mac',
            source: 'https://neal.fun/spend/minified/bigmac.jpg',
            value: 2
        }, {
            name: 'Cup of Coffee',
            source: 'https://neal.fun/spend/minified/cupofcoffee.jpg',
            value: 4
        }, {
            name: 'Book',
            source: 'https://neal.fun/spend/minified/book.jpg',
            value: 15
        }, {
            name: 'Video Game',
            source: 'https://neal.fun/spend/minified/videogame.jpg',
            value: 60
        }, {
            name: 'Charity',
            source: 'https://neal.fun/spend/minified/charity.jpg',
            value: 100
        }, {
            name: 'Headphones',
            source: 'https://neal.fun/spend/minified/headphones.jpg',
            value: 200
        }, {
            name: 'Air Jordans',
            source: 'https://neal.fun/spend/minified/airjordans.jpg',
            value: 200
        }, {
            name: 'Skateboard',
            source: 'https://neal.fun/spend/minified/skateboard.jpg',
            value: 300
        }, {
            name: 'Smartphone',
            source: 'https://neal.fun/spend/minified/smartphone.jpg',
            value: 600
        }, {
            name: 'Gaming Console',
            source: 'https://neal.fun/spend/minified/gamingconsole.jpg',
            value: 600
        }, {
            name: 'Bike',
            source: 'https://neal.fun/spend/minified/bike.jpg',
            value: 800
        }, {
            name: 'Drone',
            source: 'https://neal.fun/spend/minified/drone.jpg',
            value: 800
        }, {
            name: 'Designer Handbag',
            source: 'https://neal.fun/spend/minified/designerhandbag.jpg',
            value: 1000
        }, {
            name: 'Jet Ski',
            source: 'https://neal.fun/spend/minified/jetski.jpg',
            value: 8000
        }, {
            name: '4K TV',
            source: 'https://neal.fun/spend/minified/4ktv.jpg',
            value: 10000
        }, {
            name: 'Diamond Ring',
            source: 'https://neal.fun/spend/minified/diamondring.jpg',
            value: 10000
        }, {
            name: 'Rolex',
            source: 'https://neal.fun/spend/minified/rolex.jpg',
            value: 15000
        }, {
            name: 'Speed boat',
            source: 'https://neal.fun/spend/minified/speedboat.jpg',
            value: 30000
        }, {
            name: 'Food Truck',
            source: 'https://neal.fun/spend/minified/foodtruck.jpg',
            value: 50000
        }, {
            name: 'Tesla',
            source: 'https://neal.fun/spend/minified/tesla.jpg',
            value: 70000
        }, {
            name: 'Monster Truck',
            source: 'https://neal.fun/spend/minified/monstertruck.jpg',
            value: 150000
        }, {
            name: 'Helicopter',
            source: 'https://neal.fun/spend/minified/helicopter.jpg',
            value: 175000
        }, {
            name: 'Ferrari',
            source: 'https://neal.fun/spend/minified/ferrari.jpg',
            value: 200000
        }, {
            name: 'Lamborghini',
            source: 'https://neal.fun/spend/minified/lamborghini.jpg',
            value: 200000
        }, {
            name: 'Firetruck',
            source: 'https://neal.fun/spend/minified/firetruck.jpg',
            value: 200000
        }, {
            name: 'Townhouse',
            source: 'https://neal.fun/spend/minified/townhouse.jpg',
            value: 200000
        }, {
            name: 'Bar',
            source: 'https://neal.fun/spend/minified/bar.jpg',
            value: 300000
        }, {
            name: 'Pizza Shop',
            source: 'https://neal.fun/spend/minified/pizzashop.jpg',
            value: 500000
        }, {
            name: 'Bar of Gold',
            source: 'https://neal.fun/spend/minified/barofgold.jpg',
            value: 500000
        }, {
            name: 'Superbowl Ad',
            source: 'https://neal.fun/spend/minified/superbowlad.jpg',
            value: 5000000
        }, {
            name: 'Beach House',
            source: 'https://neal.fun/spend/minified/beachhouse.jpg',
            value: 5000000
        }, {
            name: 'Yacht',
            source: 'https://neal.fun/spend/minified/yacht.jpg',
            value: 10000000
        }, {
            name: 'F16',
            source: 'https://neal.fun/spend/minified/f16.jpg',
            value: 15000000
        }, {
            name: 'Skyscraper',
            source: 'https://neal.fun/spend/minified/skyscraper.jpg',
            value: 50000000
        }, {
            name: 'Mansion',
            source: 'https://neal.fun/spend/minified/mansion.jpg',
            value: 50000000
        }, {
            name: 'Rocket',
            source: 'https://neal.fun/spend/minified/superbowlad.jpg',
            value: 60000000
        }, {
            name: 'Passenger Jet',
            source: 'https://neal.fun/spend/minified/passengerjet.jpg',
            value: 150000000
        }, {
            name: 'Mona Lisa',
            source: 'https://neal.fun/spend/minified/yacht.jpg',
            value: 780000000
        }, {
            name: 'Cruise Ship',
            source: 'https://neal.fun/spend/minified/cruiseship.jpg',
            value: 1200000000
        }, {
            name: 'NBA Team',
            source: 'https://neal.fun/spend/minified/nbateam.jpg',
            value: 1300000000
        }, {
            name: 'MLB Team',
            source: 'https://neal.fun/spend/minified/mlbteam.jpg',
            value: 1500000000
        }, {
            name: 'NFL Team',
            source: 'https://neal.fun/spend/minified/nflteam.jpg',
            value: 2300000000
        }],
        options: [{
            label: 'Universe Forecast',
            source: 'https://neal.fun/link-backgrounds/minimized/universe-forecast.png'
        }, {
            label: 'The Action Game',
            source: 'https://neal.fun/link-backgrounds/minimized/auction-game.png'
        }, {
            label: 'Printing Money',
            source: 'https://neal.fun/link-backgrounds/minimized/printing-money.png'
        }, {
            label: 'Life Stats',
            source: 'https://neal.fun/link-backgrounds/minimized/life-stats.png'
        }, {
            label: 'The Deep Sea',
            source: 'https://neal.fun/link-backgrounds/minimized/deep-sea.png'
        }, {
            label: 'The Size of Space',
            source: 'https://neal.fun/link-backgrounds/minimized/size-of-space.png'
        }, {
            label: 'Share This Page',
            source: 'https://neal.fun/link-backgrounds/minimized/share-this-page.png'
        }, {
            label: 'Dark Patterns',
            source: 'https://neal.fun/link-backgrounds/minimized/dark-patterns.png'
        }, {
            label: 'Who Was Alive',
            source: 'https://neal.fun/link-backgrounds/minimized/who-was-alive.png'
        }, {
            label: 'Where does the day go',
            source: 'https://neal.fun/link-backgrounds/minimized/where-does-the-day-go.png'
        }, {
            label: 'Draw Your Island',
            source: 'https://neal.fun/link-backgrounds/minimized/draw-your-island.png'
        }, {
            label: 'Life Checklist',
            source: 'https://neal.fun/link-backgrounds/minimized/life-checklist.png'
        }, {
            label: 'Speed',
            source: 'https://neal.fun/link-backgrounds/minimized/speed.png'
        }, {
            label: 'Paper',
            source: 'https://neal.fun/link-backgrounds/minimized/paper.png'
        }, {
            label: 'Draw Logos From Memory',
            source: 'https://neal.fun/link-backgrounds/minimized/logos-from-memory.png'
        }, {
            label: 'Progress',
            source: 'https://neal.fun/link-backgrounds/minimized/progress.png'
        }, {
            label: "Spend Bill Gates' Money",
            source: 'https://neal.fun/link-backgrounds/minimized/spend.png'
        }, {
            label: 'Baby Map',
            source: 'https://neal.fun/link-backgrounds/minimized/baby-map.png'
        }]
    },
    mutations: {
        // Mutation para aumentar ou reduzir a fortuna em uma quantidade igual ao intero passado
        calcFortune(state, number) {
            state.fortune += number
        }
    }
})