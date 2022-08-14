import Image from "next/image";

export default function FeedItem(post) {
    return <div key={post.id} className="card p-3 m-3 bg-base-100 shadow-xl">
        <figure className="h-96 w-96">
            {<Image
                src={post?.image}
                alt={post?.title}
                layout="fill" />}
        </figure>
        <div className="card-body bg-base-100 z-10 rounded-xl">
            <h3 className="card-title">{post?.title}</h3>
            <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae et a id nisi.
            </p>
        </div>
    </div>;
}