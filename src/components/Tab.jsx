function Tab({ className,img}) {
  return (
    <>
      <div
        className={`${className} relative  cursor-pointer bg-[#f0f3f8] flex flex-col h-[10rem]
          w-56 rounded-xl py-4 px-4 justify-between `}
      >
        <p className="   opacity-90">
          {" "}
          Suggest beautiful places to see on an upcoming road trip
        </p>
        <img
          src={img}
          className="w-8 h-8  object-contain absolute bottom-2 right-2 "
        />
      </div>
    </>
  );
}

export default Tab;
