import React, { useState, useEffect, useRef } from "react";
import { Icon, Input, List, Paging, Spinner } from "../components";
import apiServer from "../server/api.srver";
import { ItemProps } from "../interfaces/Item.props";
import { FilterOption } from "../types/filterOption.type";

/**
 *
 * @returns Main react component
 */
const Main: React.FC = () => {
  const [data, setData] = useState<ItemProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const firstRender = useRef(true);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [filterOption, setFilterOption] = useState<FilterOption>({
    pageSize: 6,
    currentPage: 1,
  });

  const onPagingHnadler = (
    event: React.ChangeEvent<HTMLInputElement>,
    item: number
  ) => {
    getProducts({ ...filterOption, currentPage: item });
  };

  const getProducts = (filterOption: FilterOption) => {
    if (firstRender) {
      setIsLoading(true);
      return apiServer
        .get(
          `/products?page_number=${filterOption.currentPage}&page_size=${filterOption.pageSize}`
        )
        .then((res) => {
          setData(res.data.products);
          setFilterOption({
            ...filterOption,
            currentPage: filterOption.currentPage,
          });
          setTotalPages(res.data.totalRow);
          setIsLoading(false);
        })
        .catch((error) => {
          setIsLoading(false);
          console.error(error);
        });
    }
  };

  useEffect(() => {
    firstRender.current = false;
    getProducts(filterOption);
  }, []);

  let timeout: number;
  var debounce = function (func: Function, delay = 600) {
    clearTimeout(timeout);

    timeout = setTimeout(func, delay);
  };

  const getData = (value: string) => {
    if (!value) {
      getProducts(filterOption);
    } else {
      apiServer
        .get(`/search?keyword=${value}`)
        .then((res) => {
          setData(res.data);
          setTotalPages(0);
        })
        .catch((error) => console.error(error));
    }
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    debounce(() => getData(value));
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col ">
            <div className="input-group">
              <div className="input-group-text">
                <Icon name="search" />
              </div>

              <Input
                type="text"
                placeholder="Search"
                onChange={onChangeHandler}
                aria-label="Text input with radio button"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            {isLoading && <Spinner />}
            <List data={data} isLoading={isLoading} />
            <Paging
              total={totalPages}
              currentPage={filterOption.currentPage}
              perPage="6"
              onChange={onPagingHnadler}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
