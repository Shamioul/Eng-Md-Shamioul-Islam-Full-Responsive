interface Props{
isOn:boolean;
}


export default function Background({
isOn
}:Props){


return (

<div
className={`
absolute
inset-0
transition
duration-1000

${

isOn

?
"bg-[radial-gradient(circle,rgba(250,204,21,.3),black)]"

:

"bg-black"

}

`}
/>


)

}