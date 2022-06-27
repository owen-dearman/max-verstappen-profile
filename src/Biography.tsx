import { BioType } from "./interfaces";

interface BiographyProps {
    bioData: BioType | null
}

export function Biography({ bioData }: BiographyProps): JSX.Element {
    return (
        <section className="bio-container">
            <h1 className="statsbox-title">Biography</h1>
            <div className="grid-container">
                <h2 className="grid-tag">Name:</h2>
                <h2 className="grid-value">{bioData?.name}</h2>
                <h2 className="grid-tag">Date Of Birth:</h2>
                <h2 className="grid-value">{bioData?.dob}</h2>
                <h2 className="grid-tag">Nationality:</h2>
                <h2 className="grid-value">{bioData?.nationality}</h2>
                <h2 className="grid-tag">Racing Code:</h2>
                <h2 className="grid-value">{bioData?.code}</h2>
                <h2 className="grid-tag">Racing Number:</h2>
                <h2 className="grid-value">{bioData?.num}</h2>
            </div>
        </section>);
}
