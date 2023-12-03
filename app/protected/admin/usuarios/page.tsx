import UploadImageButton from "@/components/forms/UploadImageButton"
import Table from "@/components/table"
import TablePlaceholder from "@/components/table-placeholder"
import React, { Suspense } from "react"

export default function UsuariosPage() {
	return (
		<main className="h-full">
            page
			<UploadImageButton enableEdit/>
			<Suspense fallback={<TablePlaceholder/>}>
				<Table/>
			</Suspense>
		</main>
	)
}
