import React, { useState } from "react";
import { PdfView } from "../sever";

const Upload = () => {
  const [fileLoad, setFileLoad] = useState({ data: [] });
  const [pdfView, setPdfView] = useState(null);

  const fileType = ["application/pdf"];
  const handleChange = (event) => {
    setFileLoad({ ...fileLoad, data: event.target.files[0] });
    fileReader(fileLoad);
  };
  const fileReader = (pdfData) => {
    if (pdfData) {
      if (pdfData && fileType.includes(pdfData.type)) {
        const file = new FileReader();
        file.readAsDataURL(pdfData);
        file.onload = (e) => {
          setPdfView(e.target.result);
        };
      }
    }
  };

  const handleSubmit = (event) => {};
  console.log(pdfView);

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit(event);
        }}
      >
        <div>
          <label htmlFor=""></label>
          <input
            type="file"
            name="file"
            onChange={(event) => handleChange(event)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {pdfView && (
        <PdfView setFileLoad={setFileLoad} fileData={fileLoad.data} />
      )}
    </>
  );
};

export { Upload };
