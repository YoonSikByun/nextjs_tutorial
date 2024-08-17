import Link from "next/link";

export default function Invoices() {
    return (
        <>
            <div>
                Invoices....
            </div>
            <div>
                <Link
                    className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"
                    href="/"
                >
                    Home...
                </Link>
            </div>
        </>
    );
}