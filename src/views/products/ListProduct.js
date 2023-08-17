import Header from "components/Headers/Header";
import CreateProduct from "components/Modal/CreateProduct";
import { getCategories } from "features/category/categorySlice";
import { getColors } from "features/color/colorSlice";
import { setCreateProductModalShow } from "features/product/createProductModalSlice";
import { getProducts } from "features/product/productSlice";
import { getProviders } from "features/provider/providerSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  Button,
} from "reactstrap";
import { formatDate } from "utils/formatDate";

function ListProduct() {
  // STORE REDUX
  const { products } = useSelector((store) => store.product);
  const { isCreateProductModal } = useSelector(
    (store) => store.createProductModal
  );
  const dispatch = useDispatch();

  // DISPATCH
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getProviders());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getColors());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  // CREATR ROWS PRODUCTS
  const createRowProducts = (products) => {
    return products.map((product) => {
      return (
        <tr key={product.id}>
          <td id={`tooltip-id-${product.id}`}>
            <div className="text-wrap-1">
              <span>{product.id}</span>
            </div>
          </td>{" "}
          <UncontrolledTooltip
            delay={0}
            trigger="hover"
            target={`tooltip-id-${product.id}`}
          >
            <p className="text-danger">{product.id}</p>
          </UncontrolledTooltip>
          <td>
            <Media className="align-items-center">
              <a
                className="avatar rounded-circle mr-1"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <img alt="..." src={product.image} />
              </a>
              <Media>
                <span
                  className="mb-0 text-sm text-wrap-2"
                  id={`tooltip-name-${product.id}`}
                >
                  {product.name}
                </span>
                <UncontrolledTooltip
                  delay={0}
                  trigger="hover"
                  target={`tooltip-name-${product.id}`}
                >
                  <p className="text-danger">{product.name}</p>
                </UncontrolledTooltip>
              </Media>
            </Media>
          </td>
          <td>
            <div className="d-flex align-items-center">
              <span className="mr-2">{product.price}đ</span>
            </div>
          </td>
          <td>
            <div className="d-flex align-items-center">
              <span className="mr-2">{product.category.categoryName}</span>
            </div>
          </td>
          <td>
            <div className="d-flex align-items-center">
              <span className="mr-2">{product.provider.providerName}</span>
            </div>
          </td>
          <td>
            <div className="d-flex align-items-center">
              <span className="mr-2">{formatDate(product.createdAt)}</span>
            </div>
          </td>
          <td>
            <div className="d-flex align-items-center">
              <span className="mr-2">{formatDate(product.updatedAt)}</span>
            </div>
          </td>
          <td className="text-right">
            <button className="btn btn-primary btn-sm">Sửa</button>
            <button className="btn btn-danger btn-sm">Xóa</button>
            <button className="btn btn-success btn-sm">Chi tiết</button>
          </td>
        </tr>
      );
    });
  };
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
                  <Button
                    color="success"
                    size="md"
                    onClick={() => dispatch(setCreateProductModalShow(true))}
                  >
                    Thêm mới
                  </Button>
                </div>
              </div>
            </CardHeader>
            <Table className="align-items-center table-flush" responsive>
              <thead className="thead-light">
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Tên sản phẩm</th>
                  <th scope="col">Giá</th>
                  <th scope="col">Loại sản phẩm</th>
                  <th scope="col">Nhà cung cấp</th>
                  <th scope="col">Ngày tạo</th>
                  <th scope="col">Ngày cập nhật</th>
                  <th scope="col" />
                </tr>
              </thead>
              <tbody>{createRowProducts(products)}</tbody>
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
      {isCreateProductModal && <CreateProduct />}
    </>
  );
}

export default ListProduct;
