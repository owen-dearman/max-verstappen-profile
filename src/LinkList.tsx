import { LinkTag } from "./LinkTag";
import { LinkType } from "./utils/interfaces";

interface LinkListProps {
  wikiLink: string;
}

export function LinkList({ wikiLink }: LinkListProps) {
  const linkList: LinkType[] = require("./utils/links.json");
  linkList.length === 5 &&
    linkList.push({ id: 6, title: "Wikipedia", url: wikiLink });
  const linksAsJSXTags = linkList.map((link: LinkType) => (
    <LinkTag key={link.id} data={link} />
  ));
  return <div className="linklist-container">{linksAsJSXTags}</div>;
}
