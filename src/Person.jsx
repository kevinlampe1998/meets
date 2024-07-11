export default function Person({ firstName, lastName, picture }) {
    return (
        <div className="person">
            {picture ? <img src={picture} /> : <div className="replace">{firstName.split("")[0]}</div>}
            <div className="person-name">
                <span>{firstName}</span>
                <span>{lastName}</span>
            </div>

        </div>
    );
}