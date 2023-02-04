import { useEffect } from "react";
import "./App.css";

interface XorEncStringT {
  input: string;
  secretKey: string;
}

interface XorDecStringT {
  binaryStringArray: string[];
  secretKey: string;
}

function Main() {
  const stringToBinary = ({ input, secretKey }: XorEncStringT): string[] => {
    let r = [];
    for (let i = 0; i < input.length; i++) {
      r.push(input.charCodeAt(i).toString(2));
    }
    const outputBin = input
      .split("")
      .map((_, index) => input.charCodeAt(index).toString(2));

    return outputBin;
  };

  const binaryToString = ({
    binaryStringArray,
    secretKey,
  }: XorDecStringT): string => {
    let r: string[] = [];

    const outputStr = binaryStringArray
      .map((bin) => String.fromCharCode(parseInt(bin, 2)))
      .join("");

    return outputStr;
  };

  const makeSecretKey = (secretKey: string) => {};

  /**
   * xor 비트 연산자 순서
   * 1. string 을 가지고 바이너리 파일로 만든다
   * 2. secret key도 바이너리 파일로 만든다
   * 3. 바이너리 파일을 가지고 xor 비트 연산을 진행한다.
   */

  useEffect(() => {
    console.log(
      stringToBinary({ input: "한글도되나?", secretKey: "secretKey" })
    );
    console.log(
      binaryToString({
        binaryStringArray: stringToBinary({
          input: "한글도되나?",
          secretKey: "secretKey",
        }),
        secretKey: "test",
      })
    );
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h4>Xor bit bitwise</h4>
    </div>
  );
}

export default Main;
