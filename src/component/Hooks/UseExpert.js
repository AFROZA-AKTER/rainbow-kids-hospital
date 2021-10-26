import { useEffect, useState } from "react";

const useExpert = () => {
    const [specialist , setSpecialist] = useState([])
    useEffect(() => {
        fetch('specialist.json')
            .then(res => res.json())
            .then(data => setSpecialist(data));
    }, [])

    return {
        specialist
    }
}

export default useExpert;
