import Heading from "@/components/ui/Heading";


export default async function SearchPage({ searchParams }: { searchParams: { search: string } }) {

  console.log(searchParams);
  

  return (
    <>
      <Heading label="Resultados de Búsqueda" />
    </>
  )
}
