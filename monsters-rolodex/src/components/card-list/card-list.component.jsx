import Card from "../card/card.component";

import './card-list.styles.css';

const Cardlist = ({ monsters }) => (
    <div className="card-list">
        {monsters.map((monster, id) => {
            return  <Card key={id} monster={monster}/>
        })}
    </div>
)

export default Cardlist;