// React TypeScript - Restricting Props - https://www.youtube.com/watch?v=yqn9Fkv7f2M

type RandomNumberType = {
    value:number
}

type PositiveNumber = RandomNumberType & {
    isPositive:boolean
    isNegative?:never
    isZero?:never
}

type NegativeNumber = RandomNumberType & {
    isNegative:boolean
    isPositive?:never
    isZero?:never
}

type ZeroNumber = RandomNumberType & {
    isZero:boolean
    isPositive?:never
    isNegative?:never
}
type RandomNumberProps = PositiveNumber | NegativeNumber | ZeroNumber

export const RandomNumber =  ({
    value,
    isPositive,
    isNegative,
    isZero,
}:RandomNumberProps)=>{
return(
    <div>
        <h3>Restricting Props - Please check RandomNumber.tsx for coding</h3>
        {value} {isPositive && 'positive'} {isNegative && 'negative'}{''}
        {isZero && 'zero'}
    </div>
)
}