"use client";

import { generatePagination } from "@/components/Utils";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

export default function Pagination({ totalPages }: { totalPages: number }) {
	// NOTE: comment in this code when you get to this point in the course

	const pathname = usePathname();
	const searchParams = useSearchParams();
	const currentPage = Number(searchParams.get("page")) || 1;
	const createPageURL = (pageNumber: number | string) => {
		const params = new URLSearchParams(searchParams);
		params.set("page", pageNumber.toString());
		return `${pathname}?${params.toString()}`;
	};
	const allPages = generatePagination(currentPage, totalPages);

	return (
		<>
			{/* NOTE: comment in this code when you get to this point in the course */}

			<div className="inline-flex">
				<PaginationArrow
					direction="left"
					href={createPageURL(currentPage - 1)}
					isDisabled={currentPage <= 1}
				/>

				<div className="flex -space-x-px">
					{allPages.map((page, index) => {
						let position: "first" | "last" | "single" | "middle" | undefined;

						if (index === 0) position = "first";
						if (index === allPages.length - 1) position = "last";
						if (allPages.length === 1) position = "single";
						if (page === "...") position = "middle";

						return (
							<PaginationNumber
								key={page}
								href={createPageURL(page)}
								page={page}
								position={position}
								isActive={currentPage === page}
							/>
						);
					})}
				</div>

				<PaginationArrow
					direction="right"
					href={createPageURL(currentPage + 1)}
					isDisabled={currentPage >= totalPages}
				/>
			</div>
		</>
	);
}

function PaginationNumber({
	page,
	href,
	isActive,
	position,
}: {
  page: number | string;
  href: string;
  position?: "first" | "last" | "middle" | "single";
  isActive: boolean;
}) {
	const className = 
		"flex h-10 w-10 items-center justify-center text-sm border "
			.concat(position === "first" || position === "single"? "rounded-l-md": "")
			.concat(position === "last" || position === "single"? "rounded-r-md": "")
			.concat(isActive?"z-10 bg-blue-600 border-blue-600 text-white":"")
			.concat(position === "middle" && !isActive ? "hover:bg-gray-100" : "")
			.concat(position === "middle"? "text-gray-300" : "")

	return isActive || position === "middle" ? (
		<div className={className}>{page}</div>
	) : (
		<Link href={href} className={className}>
			{page}
		</Link>
	);
}

function PaginationArrow({
	href,
	direction,
	isDisabled,
}: {
  href: string;
  direction: "left" | "right";
  isDisabled?: boolean;
}) {
	const className = "flex h-10 w-10 items-center justify-center rounded-md border "
		.concat(direction === "left" ? " mr-2 md:mr-4" : "")
		.concat(direction === "right" ? " ml-2 md:ml-4" : "")
		.concat(isDisabled ? " pointer-events-none text-gray-300" : "")
		.concat(!isDisabled ? " hover:bg-gray-100" : "")

	const icon =
    direction === "left" ? (<FaArrowLeft className="w-4" />) : (<FaArrowRight className="w-4" />);

	return isDisabled ? (
		<div className={className}>{icon}</div>
	) : (
		<Link className={className} href={href}>
			{icon}
		</Link>
	);
}
