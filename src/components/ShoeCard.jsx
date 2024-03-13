export const ShoeCard = ({ imgURL , changeBigShoeImage , bigShoeImg}) => {

const handleClick = () => {
  if (bigShoeImg !== imgURL.bigShoe)
  {
    changeBigShoeImage(imgURL.bigShoe)
  }
}

  return (
    <div className={`border-2 rounded-full
        ${bigShoeImg === imgURL.bigShoe
          ? 'border-coral-red'
          : 'border-transparent'
        } cursor-pointer max-sm:flex-1
        `}
        onClick={handleClick}
        > 
        <div className="flex justify-center items-center bg-card bg-center bg-cover w-40 h-40y rounded-full object-contain"> 
          <img src={imgURL.bigShoe} width={127} height={90} className=" object-contain "/>
        </div>
    </div>
  )
}
