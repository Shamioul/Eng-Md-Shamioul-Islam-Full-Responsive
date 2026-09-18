export default function Tooltip({
text
}:{
text:string
}){


return (

<span
className="
absolute
bg-black
text-white
px-3
py-1
rounded
text-xs
"
>

{text}

</span>

)

}