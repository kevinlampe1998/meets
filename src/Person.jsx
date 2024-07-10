export default function Person({ fname, lname, picture }) {
    return (
        <div className="person">
            {picture ? <img src={picture} /> : <div className="replace">{fname.split("")[0]}</div>}
            <div className="person-name">
                <span>{fname}</span>
                <span>{lname}</span>
            </div>

        </div>
    );
}