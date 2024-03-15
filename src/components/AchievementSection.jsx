function AchievementSection({ id }) {
  return (
    <div id={id} className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        <div className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0">
          <h2 className="text-white text-4xl font-bold flex flex-row">
            <p className="text-[#ADB7BE] text-base"></p>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default AchievementSection;
