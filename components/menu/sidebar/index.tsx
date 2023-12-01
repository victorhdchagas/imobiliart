"use client"
import Image from "next/image"
import React from "react"
import SidebarLink from "./link"
import CollapseSubmenu from "./collapseSubmenu"
import { usePathname } from "next/navigation"
import LeaveButton from "./leaveButton"

export default function Sidebar() {
	const pathname = usePathname();
	return (
        
		<div className="sidebar top-0 bottom-0 lg:left-0 p-2 w-[300px] max-h-screen overflow-y-auto text-center bg-gray-900 select-none">
			<div className="text-gray-100 text-xl">
				<div className="p-2.5 mt-1 flex items-center">
					<i className="bi bi-app-indicator px-2 py-1 rounded-md bg-blue-600"><Image src="/github.svg" alt="Logo" width={24} height={24}/></i>
					<h1 className="font-bold text-gray-200 text-[15px] ml-3 select-none">Mobiliart</h1>
					<i
						className="bi bi-x cursor-pointer ml-28 lg:hidden"
						// onClick="openSidebar()"
					></i>
				</div>
				<div className="my-2 bg-gray-600 h-[1px]"></div>
			</div>
			{/* <div
				className="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 text-white"
			>
				<i className="bi bi-search text-sm"></i>
				<input
					type="text"
					placeholder="Search"
					className="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
				/>
			</div> */}
			
			<SidebarLink label="Inicio" href="/protected" className="mt-3" pathname={pathname}/>
			
			<SidebarLink label="Minha conta" href="/protected/conta" className="mt-3" pathname={pathname}/>
            
			<div className="my-4 bg-gray-600 h-[1px]"></div>
			<CollapseSubmenu label="Meu condomínio" >
				<SidebarLink label="Relatórios" href="/" pathname={pathname}/>
				<SidebarLink label="Investimentos futuros" href="/"pathname={pathname} />
				<SidebarLink label="Falar com síndico" href="/"pathname={pathname} />
			</CollapseSubmenu>

			{true && (
				<>
					<div className="my-4 bg-gray-600 h-[1px]"></div>
					<CollapseSubmenu label="Área do síndico" >
						<SidebarLink label="Insumos" href="/" pathname={pathname}/>
						<SidebarLink label="Listar valores" href="/" pathname={pathname} />
					</CollapseSubmenu>
				</>
			)}
			{true && (<>
            
				<div className="my-4 bg-gray-600 h-[1px]"></div>
				<CollapseSubmenu label="Sistema" >
					<SidebarLink label="Usuários" href="/protected/admin/usuarios" pathname={pathname}/>
					<SidebarLink label="Condominios" href="/protected/admin/condominios" pathname={pathname}/>
				</CollapseSubmenu>
			</>)
			}
			<div className="my-4 bg-gray-600 h-[1px]"></div>
			<LeaveButton>Sair</LeaveButton>
  
		</div>
	)
}
