interface Props {
  previewRef: React.RefObject<HTMLDivElement>;
}

function Preview({ previewRef }: Props) {
  return <div className="w-full border-solid border-2 border-indigo-600">Preview</div>;
}

export default Preview;
