import { useEffect } from "react";

const Shop = () => {
    useEffect(() => {
        document.title = 'Shop - Medicare';
    }, []);
    return <div>Shop</div>;
};

export default Shop;
