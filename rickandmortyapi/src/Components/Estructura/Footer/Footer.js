import { PrintImgFooter } from "../../ImgFooter/ImgFooter";
import "./footer.css";

const template = () => `<footer>
</footer>
`;
export const PrintFooter = () =>{
document.querySelector("#app").innerHTML += template();
PrintImgFooter()
}
