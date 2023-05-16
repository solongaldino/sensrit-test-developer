import {
  Table as TableStrap,
  Pagination,
  PaginationItem,
  PaginationLink,
  FormGroup,
  Input,
  Col,
  Row,
} from "reactstrap";

interface IParams {
  head: JSX.Element;
  body: JSX.Element;
  totalPages: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  setSize: React.Dispatch<React.SetStateAction<number>>;
}

export default function Table({
  head,
  body,
  totalPages,
  currentPage,
  setCurrentPage,
  setSize,
}: IParams) {
  const handleSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const size = Number(event.target.value);
    setSize(size);
  };

  return (
    <>
      <div>
        <FormGroup className="d-flex flex-row-reverse mt-3">
          <Input
            id="exampleSelect"
            name="select"
            type="select"
            onChange={handleSizeChange}
            className="mt-2 w-25"
          >
            <option value={10}>Size 10</option>
            <option value={25}>Size 25</option>
            <option value={50}>Size 50</option>
            <option value={100}>Size 100</option>
          </Input>
        </FormGroup>
      </div>
      <TableStrap striped>
        <thead>{head}</thead>
        <tbody>{body}</tbody>
      </TableStrap>
      <Row>
        <Col sm="1">
          <div className="h6 text-muted mt-1">Pages: {totalPages}</div>
        </Col>
        <Col>
          <Pagination className="d-flex justify-content-center">
            <PaginationItem disabled={currentPage === 1}>
              <PaginationLink
                first
                onClick={() => {
                  setCurrentPage(1);
                }}
              />
            </PaginationItem>
            <PaginationItem disabled={currentPage === 1}>
              <PaginationLink
                previous
                onClick={() => setCurrentPage((old) => Math.max(old - 1, 1))}
              />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink>{currentPage}</PaginationLink>
            </PaginationItem>
            <PaginationItem disabled={currentPage === totalPages}>
              <PaginationLink
                next
                onClick={() => {
                  setCurrentPage((old) =>
                    currentPage < totalPages ? old + 1 : old
                  );
                }}
              />
            </PaginationItem>
            <PaginationItem disabled={currentPage === totalPages}>
              <PaginationLink
                last
                onClick={() => {
                  setCurrentPage(totalPages);
                }}
              />
            </PaginationItem>
          </Pagination>
        </Col>
        <Col sm="1" />
      </Row>
    </>
  );
}
