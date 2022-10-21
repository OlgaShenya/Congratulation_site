import { useContext } from "react";
import { imgContext } from "../../../context/ImgContext";

const ImageCard = (props) => {
    const img = useContext(imgContext);
    return (
        <img src={props.img} alt='background' width={840} height={520} />
    )
};
export default ImageCard;