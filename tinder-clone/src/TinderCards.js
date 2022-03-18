import React, {useState} from 'react'
import TinderCard from 'react-tinder-card'
import "./TinderCards.css"
function TinderCards() {

    const [people, setPeople] = useState( [
        {
            name: 'Elon Musk',
            url: 'https://imageio.forbes.com/specials-images/imageserve/5f47d4de7637290765bce495/0x0.jpg?format=jpg&crop=2146,2145,x1699,y559,safe&fit=crop'
        },
        {
            name: 'Jeff Bezos',
            url: 'https://imageio.forbes.com/specials-images/imageserve/5f469ea85cc82fc8d6083f05/0x0.jpg?format=jpg&width=1200&fit=bounds'
        }
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete)
    }
    const outOfFrame = (name) => {
        console.log(name + " left the screen");
    }

    return (
        <div className = "tinderCards">

            <div className = "tinderCards__cardContainer">

                {people.map((person) => (
                    <TinderCard
                        className = "swipe"
                        key = {person.name}
                        preventSwipe = {["up", "down"]}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div
                            style = {{backgroundImage: `url(${person.url})`}}
                            className = "card"
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}

            </div>
            
            
        </div>
    )
}

export default TinderCards