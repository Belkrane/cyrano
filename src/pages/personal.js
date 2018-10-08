import React, { Component } from 'react';
import '../App.css';
import Cyrano from '../Component/Cyrano';
import Bottombar from '../Component/Bottombar/Bottombar';

class personal extends Component {
    state = {
        cyranoList: [
            {
                title: "pet",
                date: "2018.09.21",
                author: "10cm",
                contents: "날 묶어줘, 보채고, 혼내줘",
                score: "4.3",
                like: "0"

            },
            {
                title: "Love",
                date: "2018.09.21",
                author: "test",
                contents: "Love is Wonderful things",
                score: "5.0",
                like: "115"
            },
            {
                title: "World",
                date: "2018.09.21",
                author: "test",
                contents: "Heal the world, make it a better place",
                score: "0",
                like: "10"
            }
        ]
    }

    render() {
        return (
            <div className="App">
                {this.state.cyranoList.map((cyrano, index) =>{
                    return <Cyrano title={cyrano.title} date={cyrano.date} author={cyrano.author} contents={cyrano.contents} score={cyrano.score} like={cyrano.like} key={index}></Cyrano>
                })}
                <Bottombar
                    isnewspeed={false}
                    ispersonal={true}/>
            </div>

        );
    }
}

export default personal;
