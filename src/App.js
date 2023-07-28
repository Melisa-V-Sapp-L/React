import React, { useRef } from "react";
import { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import Carousel from "./componets/carousel";

import "./app.css";

function App() {
  const [text1, setText1] = useState("F");
  const [text2, setText2] = useState("");
  const [card, setCard] = useState("rxvHS6F/10");
  //const pdfRef = useRef();  ref={pdfRef} esto iria en el div que contiene a #bcard

  const OCText1 = function (event) {
    setText1(event.target.value);
  };

  const OCText2 = function (event) {
    setText2(event.target.value);
  };

  const OCCard = function (event) {
    setCard(event.target.value);
  };

  const OCCreate = function () {
    alert("New card generate PDF!");
    /*
    const input = pdfRef.current;
    html2canvas(input).then((canvas) =>{
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4', true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeigth = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeigth = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeigth / imgHeigth);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 30;
      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth*ratio, imgHeigth*ratio);
      pdf.save('BestWishes.pdf');
    }) */
    // Div de la tarjeta dentro de una variable.
    const create = document.getElementById("bcard");

    html2canvas(create, {
      logging: true,
      letterRedering: 1,
      useCORS: true,
    }).then((canvas) => {
      const imgWidth = 208;
      const imgHeigth = 300;
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeigth);
      pdf.save("wishesCard.pdf");
    });
  };

  const OCCreate2 = function () {
    alert("New card generate PNG!");

    html2canvas(document.querySelector("#bcard")).then((canvas) => {
      const img = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.download = "bestWishes.png";
      link.href = img;
      link.click();
    });
  };

  return (
    <>
      <div className="container text-center">
        <nav id="navflex" className="nav flex-column">
          <div>
            <Carousel />

            <div>
              <div className="Select">
                <select
                  onChange={OCCard}
                  className="form-select mb-3"
                  aria-label="Default select example"
                >
                  <option value="0">Choose your favorite card:</option>
                  <option value="rxvHS6F/10">10</option>
                  <option value="0hCWY2n/11">11</option>
                  <option value="dp2G38v/12">12</option>
                </select>
              </div>
              <div id="input" className="input-group input-group-sm mb-3">
                <span className="input-group-text" id="inputGroup-sizing-sm">
                  Courier New
                </span>
                <input
                  onChange={OCText1}
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                  maxLength="75"
                />
              </div>
              <div id="input" className="input-group input-group-sm mb-3">
                <span className="input-group-text">Segoe UI</span>
                <input
                  onChange={OCText2}
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                  maxLength="75"
                ></input>
              </div>

              <div id="bcard">
                <p id="style1">{text1}</p>
                <p id="style2">{text2}</p>
                <img src={"https://i.ibb.co/" + card + ".jpg"} alt="..." />
              </div>

              <button
                onClick={OCCreate}
                type="button"
                className="btn btn-outline-info mb-3"
              >
                Create card - PDF
              </button>
              <button
                onClick={OCCreate2}
                type="button"
                className="btn btn-outline-info mb-3"
              >
                Create card - PNG
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default App;
