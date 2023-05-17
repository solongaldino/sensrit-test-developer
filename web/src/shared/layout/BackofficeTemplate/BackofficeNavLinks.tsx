import { MdPercent, MdStorefront } from "react-icons/md";
import { BsCart4 } from "react-icons/bs";

const links = [
  {
    label: "Clientes",
    url: "/backoffice/customers",
    icon: <MdPercent className="m-1" />,
    isHideFirstActivation: false,
  },
  {
    label: "Produtos",
    url: "/backoffice/products",
    icon: <MdStorefront className="m-1" />,
    isHideFirstActivation: false,
  },
  {
    label: "Vendas",
    url: "/backoffice/sales",
    icon: <BsCart4 className="m-1" />,
    isHideFirstActivation: false,
  },
];

export default links;
