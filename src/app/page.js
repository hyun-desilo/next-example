import { Suspense } from "react";
import ItemCard from "../components/ItemCard";
import axios from "../config/axios";
import CardWrapper from "../components/CardWrapper";

export default async function Home() {
  const { data: items } = await axios.get("/api/items");

  return (
    <main >
      <span>item count : {items.length}</span>
      <CardWrapper>
        <Suspense fallback={"아이템 로딩중... (10초 걸림)"} >
          {items.map((item) => <ItemCard key={item.name} {...item} />)}
        </Suspense>
      </CardWrapper>
    </main>
  );
}
