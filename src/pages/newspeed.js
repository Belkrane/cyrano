import React, { Component } from 'react';
import '../App.css';
import Cyrano from '../Component/Cyrano';
import Bottombar from '../Component/Bottombar/Bottombar';
import axios from 'axios';

class newspeed extends Component {
    state = {
        cyranoList: [
            {
                title: "폰서트",
                date: "2018.09.21",
                author: "10cm",
                contents: "이건 세상에서 제일 비싼 단독 공연\n" +
                "가수는 나고 관객은 너 하나\n" +
                "화려한 막이 이제 곧 올라가기 전에\n" +
                "그저 몇 가지만 주의해줘요\n" +
                "\n" +
                "세상에서 제일 편한 옷을 갈아 입고\n" +
                "제일 좋아하는 자리에 누워\n" +
                "배터리가 바닥나지 않게 조심하고\n" +
                "통화상태를 항상 유지해줘요\n" +
                "\n" +
                "듣고 싶은 노래를 말 만해 everything\n" +
                "입이 심심할 때는 coffee, popcorn, anything\n" +
                "너무 부담주진 말고 편하게 들어줘\n" +
                "아님 내가 너무 떨리니까\n" +
                "\n" +
                "오직 너에게만 감동적인 노래\n" +
                "오직 너를 웃게 하기 위한 코너\n" +
                "네가 너무 설레 잠 못 들게 만들 거야\n" +
                "지금이야 크게 소리 질러줘\n" +
                "\n" +
                "누구보다 특별한 너의 취향을 알아\n" +
                "달콤한데 슬픈 듯 아찔하게 (맞지)\n" +
                "근데 다음 곡이 중요해 볼륨 높여봐\n" +
                "기억 나니 우리 그 날 그 노래\n" +
                "\n" +
                "내가 너무 진지해 보여도 웃지마\n" +
                "누가 봐도 완벽한 노래는 아니지만\n" +
                "많이 연습한 부분을 너 때문에 틀리잖아\n" +
                "아직 나는 너무 떨리니까\n" +
                "\n" +
                "오직 너에게만 감동적인 노래\n" +
                "오직 너를 웃게 하기 위한 코너\n" +
                "네가 너무 설레 잠 못 들게 만들 거야\n" +
                "지금이야 크게 소리 질러\n" +
                "\n" +
                "이 공연은 거의 다 끝나 가고 있어\n" +
                "어땠는지 말해줘 문자로\n" +
                "너무나 아쉽지만 졸린 거 이미 알고 있어\n" +
                "기대해줘 마지막 곡 이 중에서도 제일\n" +
                "\n" +
                "감동적인 노래\n" +
                "오직 너를 웃게 하기 위한 코너\n" +
                "네가 너무 설레 잠 못 들게 만들 거야\n" +
                "지금이야 제일 원하는 걸 말해 어떤 노래를\n" +
                "다시 듣고 싶어? 사실 내가 원해\n" +
                "네가 너무 설레 잠 못 들지 모르지만\n" +
                "앵콜이야 크게 소리 질러줘\n" +
                "\n" +
                "이건 세상에서 제일 비싼 단독공연\n" +
                "가수는 나고 관객은 너 하나",
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

    componentDidMount(){
        axios.get('http://35.189.130.115:8081/category')
            .then(function (response){
                console.log(response.data);
            })
            .catch(function (error){
                console.log(error);
            });
    }

    render() {
        return (
            <div className="App">
                {this.state.cyranoList.map((cyrano, index) =>{
                    return <Cyrano title={cyrano.title} date={cyrano.date} author={cyrano.author} contents={cyrano.contents} score={cyrano.score} like={cyrano.like} key={index}></Cyrano>
                })}
                <Bottombar
                    isnewspeed={true}
                    ispersonal={false}/>
            </div>

        );
    }
}

export default newspeed;
