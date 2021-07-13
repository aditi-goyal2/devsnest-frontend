import "./style.css";

const Card = () => {
    const Image = () =>{
        return(
            <img src="https://cdn.vox-cdn.com/thumbor/cV8X8BZ-aGs8pv3D-sCMr5fQZyI=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/19933026/image.png" alt="" />
        );
    };
    return(
        <div className="card-name" style={{minHeight: "100px" }}>
            <Image />
            {/* <h2>react card</h2>
            <p>This is a card</p> */}
        </div>
    )
}
export default Card;