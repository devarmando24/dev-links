interface Props {
  image: string;
  name: string;
}
export function Project({ image, name }: Props) {
  return (
    <button className="text-dark dark:text-light w-[70px] transition-all duration-500 hover:scale-105">
      <img src={image} alt={name} />
      <p className="overflow-hidden py-1 text-xs whitespace-nowrap text-ellipsis">
        {name}
      </p>
    </button>
  );
}
