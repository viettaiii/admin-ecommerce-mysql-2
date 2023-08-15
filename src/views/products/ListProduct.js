import Header from "components/Headers/Header";
import CreateProduct from "components/Modal/CreateProduct";
import { Link } from "react-router-dom";
import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  UncontrolledTooltip,
} from "reactstrap";

function ListProduct() {
  return (
    <>
      <Row></Row>
      <Row>
        <div className="col">
          <Card className="shadow">
            <CardHeader className="border-0">
              <div className="d-flex justify-content-between">
                <h3 className="mb-0">Trang sản phẩm</h3>
                <div>
                  <button className="btn btn-success">Thêm mới</button>
                </div>
              </div>
            </CardHeader>
            <Table className="align-items-center table-flush" responsive>
              <thead className="thead-light">
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Tên sản phẩm</th>
                  <th scope="col">Mô tả sản phẩm</th>
                  <th scope="col">Giá</th>
                  <th scope="col">Loại sản phẩm</th>
                  <th scope="col">Nhà cung cấp</th>
                  <th scope="col" />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row"> Argon Design System</th>
                  <td>
                    <Media className="align-items-center">
                      <a
                        className="avatar rounded-circle mr-1"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <img
                          alt="..."
                          src={require("../../assets/img/theme/bootstrap.jpg")}
                        />
                      </a>
                      <Media>
                        <span className="mb-0 text-sm">
                          Argon Design System
                        </span>
                      </Media>
                    </Media>
                  </td>
                  <td>dsadsa</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <span className="mr-2">1.999.000đ</span>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <span className="mr-2">Macbook</span>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <span className="mr-2">Apple</span>
                    </div>
                  </td>
                  <td className="text-right">
                    <button className="btn btn-primary btn-sm">Sửa</button>
                    <button className="btn btn-danger btn-sm">Xóa</button>
                    <button className="btn btn-success btn-sm">Chi tiết</button>
                  </td>
                </tr>
              </tbody>
            </Table>
            <CardFooter className="py-4">
              <nav aria-label="...">
                <Pagination
                  className="pagination justify-content-end mb-0"
                  listClassName="justify-content-end mb-0"
                >
                  <PaginationItem className="disabled">
                    <PaginationLink
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      tabIndex="-1"
                    >
                      <i className="fas fa-angle-left" />
                      <span className="sr-only">Previous</span>
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem className="active">
                    <PaginationLink
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      2 <span className="sr-only">(current)</span>
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      3
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fas fa-angle-right" />
                      <span className="sr-only">Next</span>
                    </PaginationLink>
                  </PaginationItem>
                </Pagination>
              </nav>
            </CardFooter>
          </Card>
        </div>
      </Row>
      <CreateProduct />
    </>
  );
}

export default ListProduct;
