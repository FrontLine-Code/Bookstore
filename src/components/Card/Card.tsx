import ProductImg from "../../assets/images/book-img.png";
import TruncatedText from "./TruncatedText";
import * as Style from "./style";

export function Card() {
  const longText = `This is a long paragraph that contains a lot of letters and spaces. It
                    needs to be truncated if it exceeds the specified limit of characters.`;

  return (
    <Style.CardBody>
      <img src={ProductImg} width={200} alt="product-img" />
      <Style.CardItems>
        <TruncatedText text={longText} limit={50} />
      </Style.CardItems>
    </Style.CardBody>
  );
}
