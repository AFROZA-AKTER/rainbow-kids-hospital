import { useEffect, useState } from "react";

const UseExpert = () => {
    const [specialist , setSpecialist] = useState([]);
    useEffect(() => {
        fetch('/specialist.json')
            .then(res => res.json())
            .then(data => setSpecialist(data));
            console.log(specialist)
    }, [])

    return [specialist];
}

export default UseExpert;
