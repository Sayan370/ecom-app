import Header from "@/app/components/header/header";
import TopHeader from "@/app/components/top-header/top-header";
import MainImageSlider from "./component/image-slider";
import Milestoneblock from "./component/milestone-block";
import Footer from "@/app/components/footer/footer";
import Product from "@/app/components/product/product";

export default function HomePage() {
    return (<>
        <TopHeader />
        <Header />
        <MainImageSlider />
        <div className="px-11 mb-7">
            <h2 className="text-center text-3xl font-semibold my-7">Top Products</h2>
            <Product />
        </div>
        <div className="px-11 bg-[#f8f8f8]"><Milestoneblock /></div>
        <Footer />
    </>
    )
}
