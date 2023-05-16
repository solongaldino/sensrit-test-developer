import { MdPercent, MdStorefront } from "react-icons/md";
import { GrTableAdd } from "react-icons/gr";
import { BsCart4 } from "react-icons/bs";

const links = [
  {
    label: "Impostos",
    url: "/taxes",
    icon: <MdPercent className="m-1" />,
    isHideFirstActivation: false,
  },
  {
    label: "Tipos de Produtos",
    url: "/products-type",
    icon: <GrTableAdd className="m-1" />,
    isHideFirstActivation: false,
  },
  {
    label: "Produtos",
    url: "/products",
    icon: <MdStorefront className="m-1" />,
    isHideFirstActivation: false,
  },
  {
    label: "Vendas",
    url: "/sales",
    icon: <BsCart4 className="m-1" />,
    isHideFirstActivation: false,
  },
];

export default links;
