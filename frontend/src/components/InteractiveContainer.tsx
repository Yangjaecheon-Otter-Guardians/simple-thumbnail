interface Props {
  children: React.ReactNode;
}

function InteractiveContainer({ children }: Props) {
  return (
    <div style={{ border: 'solid 3px red', width: '375px' }}>{children}</div>
  );
}

export default InteractiveContainer;
