
export default function InlineFormError({id,errors}:{id:string,errors:string[]|undefined}) {
	if(errors)        
		return <div id={id}
			aria-live="polite"
			className="mt-2 text-sm text-red-500">
			{errors.map((error: string) => (
				<p key={error}>{error}</p>
			))}
		</div>;
	return null;
}
