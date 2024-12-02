import React from "react";

export default function BlogDetailsPage({ params: { id } }) {
    return (
        <div className='bg-gray-600 p-40 '>
            <h3>This is blog details page for blog index {id}</h3>

            <h4>title: this is title of blog {id}</h4>
            <p>
                description: Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Impedit repellat deserunt quidem debitis. Dolorum voluptas
                perferendis beatae qui, ipsa incidunt natus libero consequuntur
                nisi rerum a, minus impedit atque unde possimus. Ipsum culpa,
                facere ex facilis dolores sequi nesciunt ullam cumque fugit nisi
                rem recusandae aperiam minima soluta iure neque.
            </p>
        </div>
    );
}
