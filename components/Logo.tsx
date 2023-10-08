import Link from "next/link"

const Logo = () => {
    return (
        <>
            <div className="flex items-center justify-center mt-2">
                <Link href={`/`} className="w-16 h-16 bg-black text-white flex items-center justify-center rounded-full text-2xl font-extrabold">M.V</Link>
            </div>
            
        </>
    )
}

export default Logo
