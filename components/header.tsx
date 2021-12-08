import Link from "next/link"
import { ShoppingCartIcon } from "@heroicons/react/solid"
import useScrollPosition from "../hooks/useScrollPosition"

const Header = () => {
	const scrollPosition = useScrollPosition();
	const headerClass = scrollPosition < 10 ? `w-full px-5 py-4 flex justify-between border-b border-gray-200 sticky top-0 z-50 bg-white` : `w-full px-5 py-4 flex justify-between border-b border-gray-200 sticky top-0 z-50 bg-white/60 transition duration-200 backdrop-filter backdrop-blur-lg shadow-lg`
	return <header className={headerClass}>
		<div className="">
			<Link href="/"><a className="text-2xl block">Ministore</a></Link>
		</div>
		<div>
			<ShoppingCartIcon className="text-gray-700 w-6 h-6 mt-[6px]" />
		</div>
	</header>
}

export default Header