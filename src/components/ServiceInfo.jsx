function ServiceInfo({ icon, title, highlight }) {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <img className="rounded-xl bg-[#F6F6F6] p-4" src={icon} alt={title} />
      <p className="flex flex-col font-sfPro text-sm font-medium leading-6 text-[#717171]">
        {title}
        <span className="font-semibold text-black">{highlight}</span>
      </p>
    </div>
  );
}

export default ServiceInfo;
