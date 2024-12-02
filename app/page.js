import Link from "next/link";
import React from "react";

export default function HomePage() {
    return (
        <div>
            this is the main page
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor,
                deserunt quidem aspernatur similique voluptatum quos explicabo a
                natus accusamus tenetur consectetur perferendis ipsum sequi
                sapiente magnam minus, porro eveniet exercitationem autem
                temporibus nobis. Distinctio aliquid delectus, tempore optio
                quod praesentium est id voluptates hic vitae aperiam tempora
                libero minima excepturi repellat nesciunt eveniet necessitatibus
                voluptate animi. Deserunt animi, corporis suscipit veniam
                veritatis iste soluta, maiores provident magni quis facilis
                consectetur hic reiciendis itaque sint quo quam perspiciatis,
                consequatur adipisci. Nemo laudantium, voluptatum consectetur ea
                obcaecati culpa cum? Aperiam, omnis reiciendis modi, asperiores
                placeat in corporis alias, consequuntur non voluptatem
                repudiandae error deserunt! Dolorum nobis obcaecati eius?
                Consequuntur modi, excepturi odio quae rerum magnam? Totam at
                omnis expedita quasi quis nostrum inventore eos error tempora
                natus, nemo aliquid! Inventore maiores rerum culpa delectus illo
                vero rem quos eligendi omnis iusto voluptatibus et quas commodi,
                harum tempora odit fugit nulla praesentium placeat esse. Quo,
                quasi temporibus! Ut inventore consequuntur, rerum temporibus
                nemo iste. Optio iusto beatae accusantium cumque, aspernatur
                minima esse excepturi ipsam earum, sunt harum dicta sed itaque
                omnis non voluptas maiores tempore. Excepturi, eius cupiditate,
                enim ea quasi veniam a dignissimos veritatis eum atque nesciunt,
                aut temporibus. Aliquid numquam quisquam maiores aspernatur
                facere, sint eius hic reprehenderit repellendus voluptatem
                dolorum officia repudiandae. Accusantium illo repudiandae libero
                sint quis quas praesentium, nulla mollitia et cupiditate
                quibusdam! Laboriosam neque nihil illo laudantium optio ratione!
                Hic debitis necessitatibus porro, unde accusantium consectetur
                laudantium odit sunt repudiandae incidunt soluta aut veniam
                quisquam molestiae, aliquid amet perferendis minima perspiciatis
                ad quaerat! Quaerat culpa libero necessitatibus natus laudantium
                voluptatem tempore ratione, officiis sapiente corrupti quibusdam
                saepe aliquid corporis sit dolor consequatur, vel, quam eius
                asperiores sunt hic similique minus. Maiores expedita debitis,
                inventore soluta repudiandae nulla unde. Vitae quas mollitia
                nemo aliquam temporibus fuga enim voluptatum!
            </p>
            <Link className='text-blue-500 underline' href={`/${1}`}>
                Read More
            </Link>
        </div>
    );
}
