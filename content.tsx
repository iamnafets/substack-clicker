import { useEffect } from "react"

export default function SubstackClicker() {
    useEffect(() => {
        setInterval(() => {
            Array.from(document.querySelectorAll("div")).filter(x => x.innerText === "Continue reading").map(x => x.click())
        }, 250)
    }, [])
    return <div>Hello world</div>
}