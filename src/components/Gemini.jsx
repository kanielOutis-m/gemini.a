import Tab from "./Tab";
import assets from "../assets/assets";
import { useState, useRef } from "react";

function Gemini() {
  const inputRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setQuestion(inputRef.current.value);
    inputRef.current.value = "";
    genAns(question);
  };

  async function genAns(ask) {
    setLoading(true);
    try {
      const response = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCAh9bkhnF9Kuxo-NzN41c0xiAQEMIgOFg",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [{ parts: [{ text: ask }] }],
          }),
        }
      );

      const resp = await response.json();
      console.log(resp);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div>
        <main className=" m-auto p-8 ">
          {question ? (
            <p>
              {question}
            </p>
          ) : (
            <>
              {" "}
              <div className="text-[2.6rem] font-semibold mb-24">
                <span className="bg-gradient-to-r from-[#5691f6] to-[#ea5f62] bg-clip-text text-transparent">
                  {" "}
                  Hello, Dev.
                </span>{" "}
                <br />
                <span className="opacity-50"> How can I help you today?</span>
              </div>
              <div className="flex gap-12">
                <Tab className={`hidden md:block`} img={assets.compass_icon} />
                <Tab className={`hidden lg:block`} img={assets.bulb_icon} />
                <Tab className={`hidden xl:block`} img={assets.message_icon} />
                <Tab className={`sm:block`} img={assets.code_icon} />
              </div>
            </>
          )}

          <form onSubmit={handleSubmit} className="w-4/6 relative flex m-auto">
            <input
              ref={inputRef}
              type="text"
              className=" bg-[#f0f3f8]  w-full outline-none rounded-full h-16 mt-12 px-6"
              placeholder="Ask anything"
            />
            <img
              src={assets.mic_icon}
              className="w-7 h-7 object-contain absolute bottom-4 right-8 cursor-pointer mx-4"
              alt=""
            />
            <button type="submit">
              <img
                src={assets.send_icon}
                className={`w-7 h-7 object-contain absolute bottom-4 right-24 cursor-pointer`}
                alt=""
              />
            </button>
          </form>
        </main>
      </div>
    </>
  );
}

export default Gemini;
