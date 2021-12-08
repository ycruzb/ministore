import Link from "next/link"
import { ShoppingCartIcon } from "@heroicons/react/solid"

const Header = () => {
	return <header className="w-full px-5 py-4 flex justify-between">
		<div className="">
			<Link href="/"><a className="text-gray-800 text-2xl block">Ministore</a></Link>
		</div>
		<div>
			<ShoppingCartIcon className="text-gray-800 w-6 h-6 mt-[6px]" />
		</div>
	</header>
}

export default Header