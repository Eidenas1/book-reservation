// For adapt to different screens with standart css 
// you can use with media queries
import './MainPage.scss'
import Nav from '../../components/Nav/Nav';

const MainPage = () => {
  // Must be showing list with excursions
  return (
    <div className="z-10 w-full h-full flex fixed">
      <Nav/>
      <div className="blob blob-reverse mx-auto flex aspect-[9/16] flex-col max-md:justify-start max-h-[full] w-full items-start overflow-hidden bg-[#4E3524] p-16 py-32 transition-[background] before:relative before:top-[75%] before:left-[75%] before:z-0 before:h-[20%] before:w-[20%] before:origin-[60%] before:rounded-[30rem] before:bg-gradient-to-br before:from-[#161010] before:via-[#382121] before:to-[#763636] before:blur-[85px] before:brightness-150 after:relative after:top-[50%] after:left-[20%] after:z-0 after:h-[20%] after:w-[20%] after:origin-[60%] after:rounded-[30rem] after:bg-gradient-to-br after:from-[#763636] after:via-[#382121] after:to-[#161010] after:blur-[85px] after:brightness-150 max-md:h-[100dvh] max-md:before:h-[35%] max-md:before:w-[100%] max-md:after:h-[35%] max-md:after:w-[100%] max-md:before:rounded-2xl max-md:after:rounded-2xl max-md:before:top-[5%] max-md:after-top-[5%] max-md:py-12 max-md:px-12">
        <div className="">
      
        </div>
      </div>
    </div>
   
  );
};

export default MainPage;
