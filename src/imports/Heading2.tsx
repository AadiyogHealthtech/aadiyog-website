function Text() {
  return (
    <div className="absolute content-stretch flex h-[55px] items-start left-[581.23px] top-[-3.5px] w-[177.567px]" data-name="Text">
      <div className="flex flex-col font-['Gistesy:Regular',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[#f37003] text-[96px] text-center tracking-[-1.2px] whitespace-nowrap">
        <p className="leading-[48px]">Aadiyog</p>
      </div>
    </div>
  );
}

export default function Heading() {
  return (
    <div className="relative size-full" data-name="Heading 2">
      <p className="-translate-x-1/2 absolute font-['Arimo:Bold',sans-serif] font-bold leading-[48px] left-[295.68px] text-[#0a0a0a] text-[48px] text-center top-[-0.5px] tracking-[-1.2px] w-[573px] whitespace-pre-wrap">Holistic health starts with</p>
      <Text />
    </div>
  );
}