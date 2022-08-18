import { useRef } from "react";

// https://medium.com/web-dev-survey-from-kyoto/how-to-customize-the-file-upload-button-in-react-b3866a5973d8
export function Uplodader(props) {
  // Create a reference to the hidden file input element
  const hiddenFileInput = useRef(null);

  // Programatically click the hidden file input element
  // when the Button component is clicked
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    props.handleChange(fileUploaded);
  };

  return (
    props.open && (
      <>
        <label htmlFor="my-modal-4" className="modal modal-open cursor-pointer">
          <label className="modal-box modal-open relative" htmlFor="">
            <label
              onClick={() => props?.setUploaderOpen(!props?.open)}
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="text-lg font-bold text-center ">Upload</h3>
            <p className="py-4"></p>
            <div
              onClick={handleClick}
              className="p-8 block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-dashed border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            >
              <p className="text-lg text-center">Click here to upload a file!</p>
              <input
                onChange={handleChange}
                ref={hiddenFileInput}
                className="hidden"
                id="file_input"
                type="file"
              />
            </div>
          </label>
        </label>
      </>
    )
  );
}
