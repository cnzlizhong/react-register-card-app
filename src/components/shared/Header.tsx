const Header = ({ headerText }: { headerText: string }) => {
  return (
    <div className="w-full flex items-center justify-center bg-yellow-400">
      <h1 className="p-2 text-lg font-medium">{headerText}</h1>
    </div>
  );
};

export default Header;
