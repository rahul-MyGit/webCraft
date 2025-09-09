// "use client";
// import { useTRPC } from "@/trpc/client";
// import { useQuery } from "@tanstack/react-query";

// export default function Home() {

//   const trpc = useTRPC();
//   const {data} = useQuery(trpc.hello.queryOptions({ text: 1 }));
//   console.log(data);

//   return (
//     <div className="text-3xl font-bold underline">
//       {JSON.stringify(data)}
//     </div>
//   );
// }
 

//----------------------------------------------------------------------------------
import { caller } from "@/trpc/server";

export default async function Home() {
  const data = await caller.hello({ text: 1 });
  return (
    <div className="text-3xl font-bold underline">
      {JSON.stringify(data)}
    </div>
  );
}