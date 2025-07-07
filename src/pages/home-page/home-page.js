import Promo from "../../component/promo/promo";
import Activities from "../../component/activities/activities";
import Git from "../../component/git/git";
import Works from "../../component/works/works";

const HomePage = () => {
    return (
        <>
            <Promo />
            <Activities />
            <Git />
            <Works />
        </>
    );
};

export default HomePage;
