export function CardImage({ src, alt }) {
    return (
        <div className="container absolute h-full w-full ">
            <img src={src} alt={alt}
                 className="absolute h-full object-contain object-center transition-transform "/>
        </div>

    );
}

export function FullCardImage({src, alt}) {
    return (
        <img
            src={src}
            alt={alt}
            className="absolute w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-150 filter blur-2xl"
        />
    );
}