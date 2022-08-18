import { useRef, useState } from "react";
import { BACKEND_URL } from "../const";
import useOutsideAlerter from "../util/hooks/useOutsideAlerter";

export default function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef,isOpen, toggleOpen);

  const logout = () => {
    fetch(`${BACKEND_URL}/auth/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status === 200) {
        window.location.href = "/login";
      }
    });
  };

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Cropify</a>
      </div>
      <div className="flex-none">
        <div className="">
          <button
          onClick={() => props?.setUploaderOpen(!props?.uploaderOpen)}
          className="p-0 w-12 h-12 bg-red-600 rounded-full hover:bg-red-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">
            <svg
              viewBox="0 0 20 20"
              enableBackground="new 0 0 20 20"
              className="w-6 h-6 inline-block"
            >
              <path
                fill="#FFFFFF"
                d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                                    C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                                    C15.952,9,16,9.447,16,10z"
              />
            </svg>
          </button>
        </div>
        <button
          className="btn btn-square btn-ghost"
          data-dropdown-toggle="dropdown"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            ></path>
          </svg>
        </button>
      </div>
      <div
        ref={wrapperRef}
        className={
          "dropdown z-10 absolute top-16 right-5 ease-in duration-300 " +
          (isOpen ? "" : "hidden")
        }
      >
        <ul>
          <li>
            <button onClick={() => logout()}>Log Out</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
