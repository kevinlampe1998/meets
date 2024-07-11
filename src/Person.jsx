export default function Person({ firstName, lastName, picture }) {

    const randomColor = () => {
        const num1 = Math.round(Math.random() * 255);
        const num2 = Math.round(Math.random() * 255);
        const num3 = Math.round(Math.random() * 255);
        return `rgb(${num1}, ${num2}, ${num3})`;
    }

    return (
        <div className="person">
            {picture ? <img src={picture} /> : <div style={{ background: randomColor() }} className="replace">{firstName.split("")[0]}</div>}
            <div className="person-name">
                <span className="">{firstName}</span>
                <span>{lastName}</span>
            </div>
        </div>
    );
}