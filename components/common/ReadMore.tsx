import React, {useState} from 'react'

interface Props {
    children: string
}
const ReadMore = ( {children}: Props ) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <p className="inline w-full">
        {isReadMore ? text.slice(0, 150) : text}
        <span onClick={toggleReadMore} className="read-or-hide cursor-pointer">
          {isReadMore ? "...read more" : " show less"}
        </span>
      </p>
    );
  };

  export default ReadMore