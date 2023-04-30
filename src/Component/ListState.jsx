const ListState = () => {
  return (
    <>
      <div className="absolute top-10 right-0 left-0  bg-yellow-400 flex-1 max-w-md z-20">
        <ul className="flex flex-col justify-start items-start text-start">
          <li className="p-3 w-full hover:bg-pink-500">Bihar</li>
          <li className="p-3 w-full hover:bg-pink-500">West Bengla</li>
          <li className="p-3 w-full hover:bg-pink-500">Uttar Pradesh</li>
          <li className="p-3 w-full hover:bg-pink-500">Andhra Pradesh</li>
          <li className="p-3 w-full hover:bg-pink-500">Gujraat</li>
          <li className="p-3 w-full hover:bg-pink-500">Goa</li>
        </ul>
      </div>
    </>
  );
};
export { ListState };
