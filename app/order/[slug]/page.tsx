import Image from "next/image";

export default function OrderPage({ params }: { params: { slug: string } }) {
  console.log(params.slug);
  
  return (
    <h1>OrderPage</h1>
  );
}
