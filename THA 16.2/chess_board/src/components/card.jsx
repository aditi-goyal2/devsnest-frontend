
import Boximage from "./boximage";
import "./style.css";

function Card() {
    function Chess() {
        let boxes = [];
        for (let i = 0; i < 81; ++i)
            boxes.push(<Boximage key={i} />);
        return boxes;
    }
    return (
        <div className="card-name"><Chess /></div>
    )
}

export default Card;