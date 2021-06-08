const front = "card-front"
const back = "back"

const technologies = [
    "bootstrap",
    "css",
    "electron",
    "firebase",
    "html",
    "javascript",
    "jquery",
    "mongo",
    "node",
    "react",
]

function createCardsFromTecnologies() {
    let cards = []

    for (let technology of technologies) {
        cards.push(
            {
                id: technology + "_1",
                icon: technology,
                flipped: false,
            },
        
            {
                id: technology + "_2",
                icon: technology,
                flipped: false,
            }
        )
    }

    return cards
}
