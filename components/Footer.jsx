import React from "react";

function Footer() {
  const links = [
    {
      id: 1,
      link: "FAQ",
    },
    {
      id: 2,
      link: "Investor Relations",
    },
    {
      id: 3,
      link: "Privacy",
    },
    {
      id: 4,
      link: "Speed Test",
    },
    {
      id: 5,
      link: "Help Center",
    },
    {
      id: 6,
      link: "Jobs",
    },
    {
      id: 7,
      link: "Cookie Preferences",
    },
    {
      id: 8,
      link: "Legal Notices",
    },
    {
      id: 9,
      link: "Account",
    },
    {
      id: 10,
      link: "Ways to Watch",
    },
    {
      id: 11,
      link: "Coorporate Information",
    },
    {
      id: 12,
      link: "Only on Netflix",
    },
    {
      id: 13,
      link: "Media Center",
    },
    {
      id: 14,
      link: "Terms of use",
    },
    {
      id: 15,
      link: "Contact US",
    },
  ];
  const linkItem = links.map((item, index) => (
    <li className="hover:underline cursor-pointer" key={index}>
      {item.link}
    </li>
  ));
  return (
    <div className=" container mx-auto mt-5 px-8 text-[#737373] md:px-20 lg:px-32 py-8 md:py-12 lg:my-16">
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
        {linkItem}
      </ul>
      <p className="text-center mt-10">
        &copy; Mahmudul Hasan. All Rights Reserved.
      </p>
    </div>
  );
}

export default Footer;
