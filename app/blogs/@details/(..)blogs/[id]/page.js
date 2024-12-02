"use client";
import { useRouter } from "next/navigation";
import React from "react";

const DetailsPage = () => {
    const router = useRouter();
    return (
        <div>
            <p>This is intercepted blog details page</p>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
                inventore laboriosam adipisci doloribus natus sed labore eius
                odio ratione delectus impedit voluptas expedita fugiat excepturi
                eaque dolor magnam quam quisquam, cumque deserunt porro eum?
                Optio ducimus ipsum repellendus modi repellat! Voluptatibus
                similique qui magnam ipsum, nisi optio harum ipsam sunt
                quibusdam veniam animi? Quidem iusto est quisquam laboriosam ab
                magnam eligendi perferendis nesciunt tempora provident ad quis,
                placeat recusandae ex eveniet voluptatem cupiditate laudantium
                minima beatae nihil eius ipsa. Possimus eius fugiat, eaque
                dolores deserunt placeat praesentium veritatis cupiditate, quasi
                sequi delectus tempore omnis id ducimus doloribus autem non
                voluptatem beatae cum nesciunt repudiandae ipsam. Corporis
                laboriosam a velit. Voluptatum, ipsa odit reiciendis asperiores
                nesciunt iure facilis voluptate dignissimos aperiam modi ad
                nostrum officiis exercitationem tenetur corporis rerum
                praesentium quis repudiandae magnam corrupti incidunt obcaecati
                consequuntur? Aliquid quas dolores repudiandae ad temporibus
                recusandae necessitatibus quos ex ipsam nobis deserunt,
                explicabo deleniti voluptate dolorum non! Quidem dolore soluta
                doloribus dolores animi, distinctio architecto eligendi ipsam
                obcaecati ab magnam? Id natus dolorem deserunt molestiae
                provident magni rem vero laudantium placeat repudiandae eligendi
                expedita ut reiciendis veritatis, nisi unde qui sit quidem quo,
                non nesciunt sunt! Quasi doloremque ratione, placeat, nesciunt
                culpa magnam minima, tempore minus quo corporis obcaecati
                excepturi. Assumenda libero ad corrupti unde aspernatur
                consequatur odio, quaerat, illo ullam distinctio commodi
                voluptatibus atque? Facilis corrupti deleniti et obcaecati
                doloremque nam ratione sint ea ad voluptatem voluptatum iste
                cum, beatae, animi minima exercitationem explicabo perspiciatis
                iure praesentium optio voluptate voluptatibus. Consequatur
                molestias nobis tenetur ipsam magnam, accusantium ratione
                aliquid quam reiciendis facere ad atque error voluptatem esse
                fugiat sit incidunt, accusamus dolores possimus eius nostrum ut
                dolore unde? Unde veniam beatae in cupiditate, obcaecati sequi.
                Inventore sed consequatur iusto magnam dignissimos ducimus magni
                numquam, expedita at assumenda ad aliquam accusantium ab
                cupiditate!
            </p>
            <button
                onClick={() => router.back()}
                className='underline text-blue-400'>
                Back
            </button>
        </div>
    );
};

export default DetailsPage;
