import { useState } from 'react';
import BtnSlider from './Slider/BtnSlider';
import Slider from './Slider/Slider';

const ReportForm = () => {
  const [picList, setPicList] = useState([
    {
      pic: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg',
    },
    {
      pic: 'https://media.istockphoto.com/photos/table-top-view-of-spicy-food-picture-id1316145932?b=1&k=20&m=1316145932&s=170667a&w=0&h=feyrNSTglzksHoEDSsnrG47UoY_XX4PtayUPpSMunQI=',
    },
  ]);
  const [enterBcgColor, setEnterBcgColor] = useState('#ff0000');
  const [enterCategoryName, setEnterCategoryName] = useState('חופש');
  const [enterTitle, setEnterTitle] = useState(
    'סיור קולינקי בין המסעדות הערביות הכי טובות בחיפה'
  );
  const [enterSubTitle, setEnterSecondaryTitle] = useState(
    'גם אני, שעסוק כל השבוע, מתפנה לצפות בטלוויזיה רק בסופי השבוע, ונוכחתי שרוב תוכניות הטלוויזיה בכל הערוציה בן תוכניות אוכל.'
  );
  const [enterAuthorName, setEnterAuthor] = useState('ישראלי');

  // State Handlers
  const picChangeHandler = (e, index) => {
    const { name, value } = e.target;
    const list = [...picList];

    list[index][name] = value;
    setPicList(list);
  };

  const bcgColorChangeHandler = (event) => {
    setEnterBcgColor(event.target.value);
  };

  const categoryChangeHandler = (event) => {
    setEnterCategoryName(event.target.value);
  };

  const titleChangeHandler = (event) => {
    setEnterTitle(event.target.value);
  };

  const secondaryTitleChangeHandler = (event) => {
    setEnterSecondaryTitle(event.target.value);
  };

  const authorChangeHandler = (event) => {
    setEnterAuthor(event.target.value);
  };

  // Pic Delete Handlers
  const handlerPicDelete = (index) => {
    const list = [...picList];
    list.splice(index, 1);
    setPicList(list);
  };

  // Pic Add Handler
  const handlerPicAdd = () => {
    setPicList([...picList, { pic: '' }]);
  };

  // Slider
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    console.log('picList.length', picList.length);
    if (slideIndex !== picList.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === picList.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(picList.length);
    }
  };

  return (
    <section className="report-section">
      <div className="report-preview">
        <Slider picList={picList} slideIndex={slideIndex} />
        <BtnSlider moveSlide={nextSlide} direction={'next'} picList={picList} />
        <BtnSlider moveSlide={prevSlide} direction={'prev'} picList={picList} />

        <p
          className="category-name"
          style={{
            backgroundColor: enterBcgColor,
            width: enterCategoryName.length * 10,
          }}>
          {enterCategoryName}
        </p>
        <h2>{enterTitle}</h2>
        <p className="sub-title">{enterSubTitle}</p>
        <p className="auteur">{enterAuthorName}</p>
      </div>

      <form className="report-form">
        <label>תמונות</label>
        <div className="flex-column">
          {picList.map((singlePic, index) => (
            <div className="single-pic" key={index}>
              <input
                onChange={(e) => picChangeHandler(e, index)}
                name="pic"
                value={singlePic.pic}
              />
              <button
                className="button-red"
                type="button"
                onClick={() => handlerPicDelete(index)}>
                מחק
              </button>
            </div>
          ))}
        </div>

        <button className="button-blue" type="button" onClick={handlerPicAdd}>
          הוסף תמונה
        </button>

        <label>צבע רקע - שם קטגוריה</label>
        <select onChange={bcgColorChangeHandler}>
          <option value={'#ff0000'}>אדום</option>
          <option value={'#5fcafc'}>כחול</option>
          <option value={'#9acd32'}>ירוק</option>
        </select>

        <label>שם קטגוריה</label>
        <input
          type="text"
          value={enterCategoryName}
          onChange={categoryChangeHandler}
        />

        <label>כותרת</label>
        <textarea
          type="text"
          value={enterTitle}
          onChange={titleChangeHandler}
        />

        <label>כותרת משנה</label>
        <textarea
          type="text"
          value={enterSubTitle}
          onChange={secondaryTitleChangeHandler}
        />

        <label>שם המחבר</label>
        <input
          type="text"
          value={enterAuthorName}
          onChange={authorChangeHandler}
        />
      </form>
    </section>
  );
};

export default ReportForm;
