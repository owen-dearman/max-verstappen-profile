import { LinkType } from "./utils/interfaces";

interface LinkTagProps {
  data: LinkType;
}

export function LinkTag({ data }: LinkTagProps): JSX.Element {
  return (
    <button className="linklist-button" onClick={() => window.open(data.url)}>
      {data.title}
    </button>
  );
}
