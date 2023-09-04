import React, { useState } from "react";

export const achivements = [
  {
    id: 44,
    text: <p className="text-6xl ">Islt at a glance </p>,
  },
  {
    id: 33,
    text: (
      <p className="">
        For nearly four centuries, people have come to Harvard in the pursuit of
        truth, knowledge, and a better world.
      </p>
    ),
  },
];

export const moreAchievements = [
  {
    id: 65,
    text: <p className="text-4xl text-purple-800 "> 1636 </p>,
    detail: (
      <p className="font-text pt-3 text-lg">
        Harvard College students in the 2021-2022 academic year
      </p>
    ),
  },
  {
    id: 2,
    text: <p className="text-4xl text-purple-800 "> 1636 </p>,
    detail: (
      <p className="font-text pt-3 text-lg">
        Harvard College students in the 2021-2022 academic year
      </p>
    ),
  },
  {
    id: 3,
    text: <p className="text-4xl text-purple-800 "> 1636 </p>,
    detail: (
      <p className="font-text pt-3 text-lg">
        Harvard College students in the 2021-2022 academic year
      </p>
    ),
  },
  {
    id: 4,
    text: <p className="text-4xl text-purple-800 "> 1636 </p>,
    detail: (
      <p className="font-text pt-3 text-lg">
        Harvard College students in the 2021-2022 academic year
      </p>
    ),
  },
  {
    id: 5,
    text: <p className="text-4xl text-purple-800 "> 1636 </p>,
    detail: (
      <p className="font-text pt-3 text-lg">
        Harvard College students in the 2021-2022 academic year
      </p>
    ),
  },
  {
    id: 6,
    text: <p className="text-4xl text-purple-700 "> 1636 </p>,
    detail: (
      <p className="font-text pt-3 text-lg">
        Harvard College students in the 2021-2022 academic year
      </p>
    ),
  },
];

export const headingTexts = [
  {
    id: 51,
    heading: <p className="text-6xl text-purple-50">Meet the Director </p>,
  },
];

export const meetDirector = [
  {
    id: 10,
    text: (
      <>
        <p className="text-6xl md:mt-4 font-text text-purple-50">
          I look forward to engaging with the vibrant African and Chinese
          studies communities across the university.”
        </p>
        <p className="font-bold text-xl text-purple-50">Mack Jame</p>
        <p className="text-sm italic">The Director</p>
      </>
    ),
  },
  {
    id: 34,
    image: (
      <img
        className="absolute rounded inset-0 w-full h-full object-cover"
        src="https://images.pexels.com/photos/16943679/pexels-photo-16943679/free-photo-of-young-girl-in-denim-jacket-and-jeans.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="img"
      />
    ),
  },
];

// Define the functional component
function Card({ name, detail, img, id }) {
  const [showText, setShowText] = useState(false);

  return (
    <div key={id}
      className="max-w-sm rounded overflow-hidden transition-all duration-1000 hover:shadow-lg relative"
      onMouseEnter={() => setShowText(true)}
      onMouseLeave={() => setShowText(false)}
    >
      <img
        className={`w-full transition ease-out ${
          showText ? "scale-110 ease-in duration-700" : ""
        }`}
        src={img}
        alt={name}
      />
      <div className="px-6 py-4 absolute bottom-0 w-full bgcard">
        <div className="font-bold text-2xl mb-2 text-violet-50 "> {name}</div>
        <p
          className={`text-gray-50 text-base pb-3 text-gradiant font-text ${
            showText
              ? "opacity-100  h-[150px] ease-in duration-300"
              : "opacity-0 h-[10px] translate-y-full  transition-all"
          }`}
        >
          {detail}
        </p>
      </div>
    </div>
  );
}

export const members = [
  {
    id: 16,
    text: "",
    detail: (
      <Card
        id={'one'}
        name="Kendra Ama"
        detail={
          "Adipisicing sit nisi voluptate dolore occaecat minim tempor ea mollit laborum ipsum deserunt esse. Consectetur duis nostrud ex culpa. Aliqua enim ipsum deserunt nulla reprehenderit sit occaecat officia Lorem."
        }
        img={
          "https://images.pexels.com/photos/16943679/pexels-photo-16943679/free-photo-of-young-girl-in-denim-jacket-and-jeans.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }
      />
    ),
  },
  {
    id: 29,
    text: "",
    detail: (
      <Card
        id={'two'}
        name={"Mac Jane"}
        detail={
          "Nulla proident sunt tempor amet. Et dolore Lorem excepteur officia. Amet enim consequat ullamco veniam nisi Lorem nulla in."
        }
        img={
          "https://images.pexels.com/photos/16943679/pexels-photo-16943679/free-photo-of-young-girl-in-denim-jacket-and-jeans.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }
      />
    ),
  },
  {
    id: 35,
    text: "",
    detail: (
      <Card
        id={'three'}
        name={"Joy Ma"}
        detail={
          "Magna incididunt eu deserunt adipisicing ipsum consequat non ullamco aliqua officia culpa in commodo dolor. Excepteur sunt non amet duis tempor. Anim amet culpa ullamco nisi incididunt nulla nulla id. Excepteur velit commodo deserunt sit esse mollit ea aliqua reprehenderit non sunt et. Aliqua laboris ea Lorem deserunt consectetur."
        }
        img={
          "https://images.pexels.com/photos/16943679/pexels-photo-16943679/free-photo-of-young-girl-in-denim-jacket-and-jeans.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }
      />
    ),
  },
];

export const headingTextsStudent = [
  {
    id: 18,
    heading: <p className="text-6xl text-purple-50">Meet the Student </p>,
  },
];

export const meetTheStudent = [
  {
    id: 11,
    text: (
      <>
        <p className="text-6xl md:mt-4 font-text text-purple-50">
          lElit volupidatat do laboris ex eu Voluptate cupidatat est culpa
          aliquip irure ut aute est exercitation irure cupidatat eiusmod
          aliquip.
        </p>
        <p className="font-bold text-xl text-purple-50">Peter Grace</p>
        <p className="text-sm italic"></p>
      </>
    ),
  },
  {
    id: 22,
    image: (
      <img
        className="absolute rounded inset-0 w-full h-full object-cover"
        src="https://images.pexels.com/photos/16943679/pexels-photo-16943679/free-photo-of-young-girl-in-denim-jacket-and-jeans.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="img"
      />
    ),
  },
];

export const studentmembers = [
  {
    id: 56,
    text: "",
    detail: (
      <Card
        id={'four'}
        name="Jane Joe"
        detail={
          "Adipisicing sit nisi voluptate dolore occaecat minim tempor ea mollit laborum ipsum deserunt esse. Consectetur duis nostrud ex culpa. Aliqua enim ipsum deserunt nulla reprehenderit sit occaecat officia Lorem."
        }
        img={
          "https://images.pexels.com/photos/16943679/pexels-photo-16943679/free-photo-of-young-girl-in-denim-jacket-and-jeans.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }
      />
    ),
  },
  {
    id: 21,
    text: "",
    detail: (
      <Card
        id={'five'}
        name={"Mac Jane"}
        detail={
          "Nulla proident sunt tempor amet. Et dolore Lorem excepteur officia. Amet enim consequat ullamco veniam nisi Lorem nulla in."
        }
        img={
          "https://images.pexels.com/photos/16943679/pexels-photo-16943679/free-photo-of-young-girl-in-denim-jacket-and-jeans.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }
      />
    ),
  },
  {
    id: 31,
    text: "",
    detail: (
      <Card
        id={'six'}
        name={"Joy Ma"}
        detail={
          "Magna incididunt eu deserunt adipisicing ipsum consequat non ullamco aliqua officia culpa in commodo dolor. Excepteur sunt non amet duis tempor. Anim amet culpa ullamco nisi incididunt nulla nulla id. Excepteur velit commodo deserunt sit esse mollit ea aliqua reprehenderit non sunt et. Aliqua laboris ea Lorem deserunt consectetur."
        }
        img={
          "https://images.pexels.com/photos/16943679/pexels-photo-16943679/free-photo-of-young-girl-in-denim-jacket-and-jeans.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }
      />
    ),
  },
];

export const whatNew = [
  {
    id: 67,
    heading: <p className="text-6xl text-purple-700">What’s new? </p>,
  },
];

export const theNews = [
  {
    id: 11,
    image: (
      <img
        className="absolute rounded inset-0 w-full h-full object-cover"
        src="https://images.pexels.com/photos/16943679/pexels-photo-16943679/free-photo-of-young-girl-in-denim-jacket-and-jeans.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="img"
      />
    ),
  },
  {
    id: '2q',
    text: (
      <>
        <div className="text-lg mt-1 md:mt-4 font-text font-bold flex items-center bg-purple-900 shadow-md hover:shadow-lg ease-in transition-all hover:translate-y-1 p-2 text-white rounded-md">
          <p className="">
            t et cillum id velit eu do aliquip elit dolore occaecat aute.
            Occaecat nisi quis eiusmod proident fugiat. Id fugiat duis amet
            Lorem incididunt mollit dolor. Quis ex ea aliqua cillum proident sit
            commodo esse.
          </p>
          <img 
            className="rounded inset-0  object-cover w-96 h-24"
            src="https://images.pexels.com/photos/16943679/pexels-photo-16943679/free-photo-of-young-girl-in-denim-jacket-and-jeans.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="img"
          />
        </div>
        <div className="text-lg mt-1 md:mt-4 font-text font-bold flex items-center bg-purple-900 shadow-md hover:shadow-lg ease-in transition-all hover:translate-y-1 p-2 text-white rounded-md">
          <p className="">
            t et cillum id velit eu do aliquip elit dolore occaecat aute.
            Occaecat nisi quis eiusmod proident fugiat. Id fugiat duis amet
            Lorem incididunt mollit dolor. Quis ex ea aliqua cillum proident sit
            commodo esse.
          </p>
          <img 
            className="rounded inset-0  object-cover w-96 h-24"
            src="https://images.pexels.com/photos/16943679/pexels-photo-16943679/free-photo-of-young-girl-in-denim-jacket-and-jeans.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="img"
          />
        </div>
        <div className="text-lg mt-1 md:mt-4 font-text font-bold flex items-center bg-purple-900 shadow-md hover:shadow-lg ease-in transition-all hover:translate-y-1 p-2 text-white rounded-md">
          <p className="">
            t et cillum id velit eu do aliquip elit dolore occaecat aute.
            Occaecat nisi quis eiusmod proident fugiat. Id fugiat duis amet
            Lorem incididunt mollit dolor. Quis ex ea aliqua cillum proident sit
            commodo esse.
          </p>
          <img 
            className="rounded inset-0  object-cover w-96 h-24"
            src="https://images.pexels.com/photos/16943679/pexels-photo-16943679/free-photo-of-young-girl-in-denim-jacket-and-jeans.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="img"
          />
        </div>
      </>
    ),
  },
 
  
];
