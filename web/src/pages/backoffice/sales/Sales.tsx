import { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  Table,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import CreateSaleForm from "./CreateSaleForm";
import { useCreateSale } from "../../../hooks/http/api/mutations";
import { ProductInterface } from "../../../types";
import { useAlertDialogs } from "../../../hooks";
import { APIGet } from "../../../utils";

interface SaleItemInterface {
  id: number;
  name: string;
  amount: number;
  unitaryValue: number;
  subTotalValue: number;
  subTotalTaxe: number;
}

interface CreateSaleInterface {
  items: SaleItemInterface[];
  amountValue: number;
  amountTaxe: number;
}

export default function Sales() {
  const [modal, setModal] = useState(false);

  const [sale, setSale] = useState<CreateSaleInterface>({
    items: [],
    amountTaxe: 0,
    amountValue: 0,
  });

  useEffect(() => {}, [sale]);

  const { showSuccessDialog, showErrorDialog } = useAlertDialogs();

  const { mutate } = useCreateSale({
    onSuccess: () =>
      showSuccessDialog({
        title: "Operação realizada",
        description: "Venda salva com sucesso!",
      }),
  });

  const toggle = () => setModal(!modal);

  async function addProduct(product: ProductInterface, amount: number) {
    const fullProduct = await APIGet<ProductInterface>(
      `/products?id=${product.id}`
    );

    const newSaleItem: SaleItemInterface = {
      id: fullProduct.id,
      name: fullProduct.name,
      amount,
      unitaryValue: fullProduct.value,
      subTotalValue: fullProduct.value * amount,
      subTotalTaxe: (function () {
        let value = 0;
        fullProduct.taxes?.forEach((item) => {
          value += (item.percentage * amount * fullProduct.value) / 100;
        });
        return value;
      })(),
    };

    const newSaleData: CreateSaleInterface = {
      items: [...sale.items, newSaleItem],
      amountTaxe: sale.amountTaxe + newSaleItem.subTotalTaxe,
      amountValue: sale.amountValue + newSaleItem.subTotalValue,
    };

    setSale(newSaleData);

    showSuccessDialog({
      title: "Operação realizada",
      description: "Produto adicionado com sucesso!",
    });

    setModal(false);
  }

  function removeProduct(productiId: number) {
    const newItems = sale.items.filter((item) => item.id !== productiId);
    const oldItems = sale.items.filter((item) => item.id === productiId);

    const newSaleData: CreateSaleInterface = {
      items: newItems,
      amountTaxe: sale.amountTaxe - oldItems[0].subTotalTaxe,
      amountValue: sale.amountValue - oldItems[0].subTotalValue,
    };

    setSale(newSaleData);

    showSuccessDialog({
      title: "Operação realizada",
      description: "Produto removido com sucesso!",
    });
  }

  function saveSale() {
    if (sale) {
      const list = {
        list: sale?.items.map((item) => {
          return {
            productId: item.id,
            amount: item.amount,
          };
        }),
      };
      mutate(list);
    } else {
      showErrorDialog({
        title: "Error ao tentar salvar venda",
        description: "Adicione no minimo um produto a sua venda!",
      });
    }
  }

  return (
    <div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h2>Vendas</h2>
      </div>
      <div>
        <Button
          onClick={saveSale}
          color="success"
          type="button"
          className="me-3"
        >
          Salvar venda
        </Button>
        <Button color="primary" onClick={toggle}>
          Adicionar um Produto
        </Button>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Adicionar produto</ModalHeader>
          <ModalBody>
            <div className="d-flex justify-content-center">
              <Card color="light app-backoffice-card p-2 my-3">
                <CardBody>
                  <CardTitle tag="h5" className="text-center pb-4">
                    Formulário
                  </CardTitle>
                  <CardText>
                    <CreateSaleForm addProduct={addProduct} />
                  </CardText>
                </CardBody>
              </Card>
            </div>
          </ModalBody>
        </Modal>
      </div>
      <div className="mt-5 ">
        <Table bordered responsive striped>
          <thead className="text-center">
            <tr>
              <th>Id</th>
              <th>Nome do Produto</th>
              <th>Quantidade</th>
              <th>Valor Unitário</th>
              <th>Total Impostos</th>
              <th>Sub. Total</th>
              <th>Remover Produto</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {sale.items.map((item) => (
              <tr>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>{item.amount}</td>
                <td>{item.unitaryValue}</td>
                <td>{item.subTotalTaxe}</td>
                <td>{item.subTotalValue}</td>
                <td className="text-center">
                  <Button onClick={() => removeProduct(item.id)} color="danger">
                    Remover Produto
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div>
        <Card color="light app-backoffice-card mt-3 p-1">
          <CardBody>
            <CardText>Total: R${sale.amountValue}</CardText>
            <CardText>Impostos: R${sale.amountTaxe}</CardText>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
