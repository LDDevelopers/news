import React, { useState } from "react";
import { PdfView } from "../sever";
// Core viewer
import { Viewer, Worker } from "@react-pdf-viewer/core";

// Plugins
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
// Import styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
const Upload = () => {
  //const [fileLoad, setFileLoad] = useState({ data: [] });
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfFileError, setPdfFileError] = useState("");

  // for submit event
  const [viewPdf, setViewPdf] = useState(null);
  const fileType = ["application/pdf"];
  const handlePdfFileChange = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile && fileType.includes(selectedFile.type)) {
        let reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = (e) => {
          setPdfFile(e.target.result);
          setPdfFileError("");
        };
      } else {
        setPdfFile(null);
        setPdfFileError("Please select valid pdf file");
      }
    } else {
      console.log("select your file");
    }
  };

  // form submit
  const handleSubmit = () => {
    if (pdfFile !== null) {
      setViewPdf(pdfFile);
    } else {
      setViewPdf(null);
    }
  };
  /*
  const fileType = ["application/pdf"];
  const handleChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      if (selectedFile && fileType.includes(selectedFile.type)) {
        const reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onload = (e) => {
          setPdfView(e.target.result);
        };
      }
    }
  };
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const handleSubmit = () => {};
  console.log(pdfView);*/
  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit();
        }}
      >
        <div>
          <label htmlFor=""></label>
          <input
            type="file"
            name="file"
            onChange={(event) => handlePdfFileChange(event)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div className="">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          <div className="w-full h-5/6">
            <Viewer
              fileUrl="/assests/narada.pdf"
              plugins={[defaultLayoutPlugin]}
            />
          </div>
        </Worker>
      </div>
    </>
  );
};

export { Upload };
