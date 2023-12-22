import BuyResidentialsPage from "@/template/BuyResidentialsPage";

async function BuyResidentials({ searchParams }) {
  const res = await fetch("http://localhost:3000/api/profile", {
    cache: "no-store",
  });
  const data = await res.json();

  if (data.error) return <h3>مشکلی پیش آمده است</h3>;

  console.log(searchParams);
  let finalData = data.data;
  if (searchParams.category) {
    finalData = finalData.filter((i) => i.category === searchParams.category);
  }
  if (searchParams.city) {
    finalData = finalData.filter((i) => i.location.includes(searchParams.city));
  }

  return <BuyResidentialsPage data={finalData} />;
}

export default BuyResidentials;
