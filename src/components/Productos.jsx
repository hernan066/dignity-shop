import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

import Producto from "./Producto";

const Productos = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products");
        setProducts(res.data);
        console.log(res.data);
      } catch (err) {}
    };
    getProducts();
  }, []);

  //const [cantProducts, setcantProducts] = useState(products.slice(0, 50));
  const [pageNumber, setPageNumber] = useState(0);

  const userPerPage = 10;
  const pageVisited = pageNumber * userPerPage;

  const displayProducts = products
    .slice(pageVisited, pageVisited + userPerPage)
    .map((product) => <Producto datos={product} key={product._id} />);

  const pageCount = Math.ceil(products.length / userPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="prod__container">
      <h2>Categoria: categoria</h2>

      <div className="prod__main">
        {/* {products.map((datos) => (
          <Producto datos={datos} key={datos._id} />
        ))} */}
        {displayProducts}
      </div>
      <div className="prod__paginate">
        <ReactPaginate
          previousLabel={"Anterior"}
          nextLabel={"Siguiente"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginate__container"}
          previousClassName={"paginate__btn_prev"}
          nextLinkClassName={"paginate__btn_next"}
          disabledClassName={"paginate__disable"}
          activeClassName={"paginate__active"}
          pageClassName={"paginate__page"}
        />
      </div>
    </div>
  );
};

export default Productos;
