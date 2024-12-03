import { posts } from "@/app/db/posts";
import { headers, cookies } from "next/headers";
// handle single get request
export async function GET(req, { params }) {
    /* const requestHeaders = new Headers(req.headers); */
    const requestHeaders = headers();
    console.log(requestHeaders.get("Authorization"));
    const cokkies = req.cookies.get("refreshToken");
    console.log(cokkies);
    cookies().set("theme", "dark");
    console.log(cookies().get("theme"));

    const postId = params.id;
    const newData = posts.find((post, index) => post.id === Number(postId));
    console.log(newData);
    return new Response(JSON.stringify(newData), {
        headers: {
            "Set-Cookie": "refreshToken=132434",
        },
    });
}

//handle patch request
export async function PATCH(req, { params }) {
    const changes = await req.json();
    const postId = params.id;

    const editableDataIndex = posts.findIndex(
        (post) => post.id === Number(postId)
    );
    posts[editableDataIndex] = {
        ...posts[editableDataIndex],
        ...changes,
    };

    const updatedData = posts.find((post) => post.id === Number(postId));
    return new Response(JSON.stringify(updatedData), {
        headers: {
            "Content-Type": "application/json",
        },
        status: 200,
    });
}

// handle delete request
export async function DELETE(_req, { params }) {
    const idToDelete = params.id;
    const deleteableDataIndex = posts.findIndex(
        (post) => post.id === Number(idToDelete)
    );
    const deletableData = posts[deleteableDataIndex];
    const deletedData = posts.splice(deleteableDataIndex, 1);
    return Response.json(deletableData);
}
