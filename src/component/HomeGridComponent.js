function HomeGridComponent({ items, moreItems, headingTexts,bgcolor }) {
  return (
    <div className={bgcolor} >
      <div className="px-10 md:px-24 " key={22}>
        {headingTexts &&
          headingTexts.map((headingText) => (
            <div  key={headingText.id}>
              <div 
               className="grid md:grid-cols-2 gap-1 grid-flow-row md:auto-rows-max  pb-4 pt-14"
              >
                {headingText.heading}
              </div>
              <div className="p-1 bg-purple-50 mb-10"></div>
            </div>
          ))}
        {items ? (
          <div className="grid md:grid-cols-2 gap-1 grid-flow-row md:auto-rows-max  pb-24 pt-14">
            {items &&
              items.map((item) => (
                <div key={item.id} className="">
                  {item.text}
                  {item.image ? (
                    <div className="relative h-[520px]  aspect-w-1 aspect-h-1">
                      {" "}
                      {item.image}
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              ))}
          </div>
        ) : (
          <div  key={'empty'} >&nbsp;</div>
        )}

        <div className="grid  md:grid-cols-3 gap-4 grid-flow-row md:auto-rows-max  pb-20">
          {moreItems && moreItems.map((moreItem) => (
            <div key={moreItem.id} className="pt-4 mt-4">
              {moreItem.text}
              {moreItem.detail}
            </div>
          ))}

        </div>

        
        
      </div>
    </div>
  );
}

export default HomeGridComponent;
