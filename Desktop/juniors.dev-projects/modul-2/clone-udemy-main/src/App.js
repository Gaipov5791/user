import HeaderContainer from "./container/HeaderContainer";
import CourseSelectionContainer from "./container/CourseSelectionContainer";
import StudentsViewingContainer from "./container/StudentsViewingContainer";
import TopCategoriesContainer from "./container/TopCategoriesContainer";
import FeaturedTopicsContainer from "./container/FeaturedTopicsContainer";
import AdvertisementContainer from "./container/AdvertisementContainer";
import FooterContainer from "./container/FooterContainer";
import Modal from "./components/modal/Modal";
import {useState} from 'react';


function App() {
    const [modalActive, setModalActive] = useState(true);
    
    return (
    <>
		{/* Yuko */}
		<HeaderContainer />
		{/* Lily */}
		<CourseSelectionContainer />
		{/* Phoebe */}
		<StudentsViewingContainer />
		{/* Ayako */}
		<TopCategoriesContainer />
		<FeaturedTopicsContainer />
		<AdvertisementContainer />
		<FooterContainer />
		<Modal  active={modalActive}
				setActive={setModalActive}
        />
    </>
  );
}

export default App;
