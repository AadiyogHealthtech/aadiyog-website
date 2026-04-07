import imgImageAadiyogLogo from "figma:asset/bcba3a5eeabdeea76c44f03b3b843059bb33070e.png";

function ImageAadiyogLogo() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Image (Aadiyog Logo)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageAadiyogLogo} />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Text">
      <p className="font-['Gistesy:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#4c4c4c] text-[36px] text-center tracking-[-0.6px]">
        <span className="leading-[32px]">Aadi</span>
        <span className="leading-[32px]">yog</span>
      </p>
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[2px] relative">
        <Text />
      </div>
    </div>
  );
}

export default function Button() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative size-full" data-name="Button">
      <ImageAadiyogLogo />
      <Container />
    </div>
  );
}