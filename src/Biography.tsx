import { BioType } from "./utils/interfaces";
import { dateFormatter } from "./utils/dateFormatter";

interface BiographyProps {
  bioData: BioType | null;
}

export function Biography({ bioData }: BiographyProps): JSX.Element {
  return (
    <section className="bio-container">
      <div className="grid-container">
        <h2 className="grid-tag">Name:</h2>
        <h2 className="grid-value">{bioData?.name}</h2>
        {bioData?.dob && (
          <>
            <h2 className="grid-tag">Date Of Birth:</h2>
            <h2 className="grid-value">{dateFormatter(bioData.dob)}</h2>{" "}
          </>
        )}
        <h2 className="grid-tag">Nationality:</h2>
        <h2 className="grid-value">{bioData?.nationality}</h2>
        <h2 className="grid-tag">Racing Code:</h2>
        <h2 className="grid-value">{bioData?.code}</h2>
        <h2 className="grid-tag">Racing Number:</h2>
        <h2 className="grid-value">{bioData?.num}</h2>
      </div>
    </section>
  );
}
