import Button from "../button/button";
const Card = ({ cardInfo }) => {
  return (
    <div className="bg-[#FFFFFF] shadow-md w-[919px] h-[266px] rounded-[30px] border border-[#D6DDEB] flex pl-[45px] pr-[45px] pt-[25px] pb-[25px] gap-6">
      <img src={cardInfo.imgUrl} className="w-[66px] h-[59px]" />
      <div className="flex flex-col justify-between items-start">
        <h1 className="text-[#25324B] font-semibold text-[24px] leading-[20px]  epilogue-font">
          {cardInfo.title}
        </h1>
        <div className="flex gap-1 epilogue-font text-[#7C8493] text-sm font-normal">
          <span>{`${cardInfo.name} · `}</span>
          <span>{`${cardInfo.location.city},  ${cardInfo.location.country}`}</span>
        </div>

        <p className="font-normal text-justify text-[#25324B] text-base ">
          {cardInfo.description}
        </p>
        <div className="flex gap-2">
          <button className="rounded-[80px] text-[14px] pl-[8px] pr-[8px] pb-[6px] pt-[6px] text-green-300 font-semibold bg-[#56CDAD] bg-opacity-5 ">
            {cardInfo.work_location}
          </button>
          <button className="rounded-[80px] border"></button>
          {cardInfo.categories.map((buttonInfo) => (
            <Button
              color={buttonInfo.color}
              name={buttonInfo.name}
              key={buttonInfo.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
