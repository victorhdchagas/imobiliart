import Table from "@/components/table"
import TablePlaceholder from "@/components/table-placeholder"
import React, { Suspense } from "react"

export default function UsuariosPage() {
	return (
		<main>
            page
			<Suspense fallback={<TablePlaceholder/>}>
				<Table/>
			</Suspense>
		</main>
	)
}
