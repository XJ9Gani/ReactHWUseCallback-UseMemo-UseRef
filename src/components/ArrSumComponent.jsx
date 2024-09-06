import { useMemo } from "react"

export default function ArrSumComponent({numbers}){
    const getSum = () => {
        console.log('Рендер')
        return numbers.reduce((prev, el) => prev + el, 0);
    }
       
    
    const cachedValue = useMemo(getSum , [numbers]);

    return(
        <>
        <div style={{fontSize:'20px'}}>Сумма Чисел : {cachedValue}</div>
        </>
    )

}