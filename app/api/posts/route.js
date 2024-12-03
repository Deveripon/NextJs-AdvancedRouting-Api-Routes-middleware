import { posts } from "@/app/db/posts";
import { redirect } from "next/navigation";

// handle get request//
export async function GET(req) {
    const searchParams = req.nextUrl.searchParams;
    const query = searchParams.get("query");
    console.log(query);

    if (query) {
        const queryData = posts.filter((post) =>
            post.title.toLocaleLowerCase().includes(query)
        );

        console.log(queryData);

        if (queryData.length > 0) {
            return Response.json(queryData);
        } else {
            redirect("/api/posts");
            return new Response(
                JSON.stringify({
                    data: "not found",
                }),
                {
                    status: 404,
                }
            );
        }
    }
    return Response.json(posts);
}

// handle post request//
export async function POST(req) {
    const data = await req.json();
    const newData = {
        ...data,
        id: posts.length + 1,
    };

    posts.push(newData);
    return new Response(JSON.stringify(newData), {
        headers: {
            "Content-Type": "application/json",
        },
        status: 201,
        statusText: "created",
    });
}
