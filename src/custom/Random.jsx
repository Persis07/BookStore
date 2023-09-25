import { useEffect, useState } from "react";

export function useRandom() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [num3, setNum3] = useState(0);  
    useEffect(() => {
        setNum1(Math.floor(Math.random() * 3));
        setNum2(Math.floor(Math.random() * 3) + 1 + 3);
        setNum3(Math.floor(Math.random() * 3) + 1 + 6);
    }, []);
    return {num1, num2, num3};
};