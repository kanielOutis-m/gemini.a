import Gemini from "./Gemini";

function Main() {
  
  return (
    <div className="flex flex-col w-full justify-between h-screen ">
      <header className="h-12 w-full  flex items-center p-12 justify-start">
        <p className="text-3xl">Jalemini</p>
      </header>
      <Gemini/>
      <footer className="h-12 w-full flex items-center justify-center p-4 ">
        <p className="text-sm tracking-wide opacity-90 ">
          Gemini may display inaccurate info, including about people, so
          double-check its responses. Your privacy and Gemini Apps
        </p>
      </footer>
    </div>
  );
}

export default Main;
