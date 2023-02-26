interface Props {
  children: React.ReactNode;
}

function InteractiveContainer({ children }: Props) {
  return (
    <div className="w-full px-5 flex flex-col items-center justify-center tablet:w-[768px] tablet:px-10">
      {children}
    </div>
  );
}

export default InteractiveContainer;
