import './app.css';
import {TwitterFollowCard} from './TwitterFollowCard.jsx';

export function App() {
    return (
        <section className="App">
            <TwitterFollowCard isFollowing={true} userName="gegeggge222" name="Miguel Ángel Durán" />
            <TwitterFollowCard isFollowing={false} userName="elonmusk" name="Elon Musk" />
            <TwitterFollowCard isFollowing={false} userName="billgates" name="Bill Gates" />
            <TwitterFollowCard isFollowing={true} userName="sundarpichai" name="Sundar Pichai" />
        </section>
    )
}