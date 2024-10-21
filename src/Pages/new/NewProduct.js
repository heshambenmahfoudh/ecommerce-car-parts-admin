import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import FormHeader from '../../Components/Headers/FormHeader'
import useFetchData from '../../hooks/useFetchData'
import Lables from '../../Components/Forms/Lables'
import Inputs from '../../Components/Forms/Inputs'
import Buttons from '../../Components/Forms/Buttons'
import TextAria from '../../Components/Forms/TextAria'
import SelectInput from '../../Components/Forms/SelectInput'
import {
  ApiPostImageRequest,
  ApiPostRequest,
  ApiPutRequest,
} from '../../Lib/apiRequest'
import SelectImage from '../../Components/Forms/SelectImage'

const NewProduct = ({ id, productData }) => {
  const [image, setImage] = useState(null)
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState(null)
  const [information, setInformtion] = useState()
  const [option, setOption] = useState({
    model: '',
    price: 0,
  })
  const [options, setOptions] = useState([])
  const [rederect, setRederect] = useState('')

  // render the categories ine the page
  const { data: categories } = useFetchData(
    information?.brand
      ? `/categories?brandId=${information?.brand}`
      : `/categories`,
  )
  // render the categories ine the page
  const { data: brands } = useFetchData(`/brands`)

  //  render the data when id found
  useEffect(() => {
    if (id) {
      setImage(productData?.img?.[0])
      setInformtion(productData)
      setOptions(productData?.options)
    }
  }, [productData, id])

  // add options model and price
  const changeOption = (e) => {
    setOption({ ...option, [e.target.name]: e.target.value })
  }

  // take values from fields
  const changeData = (e) => {
    setInformtion({ ...information, [e.target.name]: e.target.value })
  }

  //  add options price and model
  const addOption = (e) => {
    e.preventDefault()
    if (!option.model || !option.price) {
      return setErr('please add option model and price')
    }
    setOptions((prev) => [...prev, option])
  }

  // add string img and display in the page
  const changeImage = async (e) => {
    ApiPostImageRequest('/deploy', e, setImage)
  }

  //  delete options odel and price
  const deleteOption = (model) => {
    setOptions(options?.filter((option) => option.model !== model))
  }

  // send data into dataase
  const addedProduct = async (e) => {
    const data = {
      ...information,
      img: image,
      options: options.map((item) => ({
        model: item?.model,
        price: item?.price,
      })),
    }
    id
      ? ApiPutRequest(
          `/products/${id}`,
          e,
          data,
          setLoading,
          setRederect,
          setErr,
          '/products',
          'Product',
        )
      : ApiPostRequest(
          '/products',
          e,
          data,
          setLoading,
          setRederect,
          setErr,
          '/products',
          'Product',
        )
  }

  // redirect in the page
  if (rederect) {
    return <Navigate to={rederect} />
  }

  console.log('information dd :', information?.category)

  return (
    <div>
      <FormHeader
        url="../products"
        title={id ? 'Update product' : 'New product'}
      />
      <form className="p-10 smd:p-7 ssm:p-5 smss:p-3 mx-auto mt-4 rounded-md bg-white shadow-md border-1 max-w-4xl">
        <div className="flex justify-between flex-col gap-5">
          <SelectImage chaneValue={changeImage} img={image} />

          <div className="flex flex-col gap-1.5">
            <div className="flex items-center ssm:flex-col gap-5 ssm:gap-1">
              <div className="w-full">
                <Lables text="Product Brand" />
                <SelectInput
                  name="brand"
                  options={brands}
                  changeValue={changeData}
                  option="Brand"
                  data={id && information?.brand?._id}
                />
              </div>
              <div className="w-full">
                <Lables text="Product Category" />
                <SelectInput
                  name="category"
                  options={categories}
                  changeValue={changeData}
                  option="Category"
                  data={id && information?.category?._id}
                />
              </div>
            </div>

            <div className="flex items-center ssm:flex-col gap-5 ssm:gap-1">
              <div className="w-full">
                <Lables text="Product Part" />
                <Inputs
                  type="text"
                  name="part"
                  placeholder="Product Part"
                  changeValue={changeData}
                  value={id && information?.part}
                />
              </div>
              <div className="w-full">
                <Lables text="Product Made In" />
                <Inputs
                  type="text"
                  name="madein"
                  placeholder="Product Made In"
                  changeValue={changeData}
                  value={id && information?.madein}
                />
              </div>
            </div>
            <div className="flex items-center ssm:flex-col gap-5 ssm:gap-1">
              <div className="w-full">
                <Lables text="Product Title" />
                <Inputs
                  type="text"
                  name="title"
                  placeholder="Product Title"
                  changeValue={changeData}
                  value={id && information?.title}
                />
              </div>
              <div className="w-full">
                <Lables text="Product Start Price" />
                <Inputs
                  name="startPrice"
                  placeholder="Product Start Price"
                  changeValue={changeData}
                  value={id && information?.startPrice}
                />
              </div>
            </div>
            <div className="flex items-center ssm:flex-col gap-5 ssm:gap-1">
              <div className="w-full">
                <Lables text="Product Model" />
                <Inputs
                  type="text"
                  name="model"
                  placeholder="Product Model"
                  changeValue={changeOption}
                />
              </div>
              <div className="w-full ">
                <Lables text="Product Price" />
                <Inputs
                  type="text"
                  name="price"
                  placeholder="Product Price"
                  changeValue={changeOption}
                />
              </div>
            </div>
            <div className="w-fit -mt-2.5">
              <Buttons text="New" onClick={addOption} title="Option" />
            </div>
            <div className="grid grid-cols-4 mt-1 gap-1">
              {options?.map((item, i) => (
                <article
                  className="p-2 bg-blue-300 flex justify-between items-center rounded-lg cursor-pointer"
                  onClick={() => deleteOption(item.model)}
                  key={i}
                >
                  <span className="text-16 capitalize ">
                    model :{item?.model}
                  </span>
                  <span className="text-16 capitalize">
                    price : ${item?.price}
                  </span>
                </article>
              ))}
            </div>
            <div className="w-full">
              <Lables text="Product Description" />
              <TextAria
                name="description"
                placeholder="Product Description"
                value={id && information?.description}
                changeValue={changeData}
              />
            </div>
          </div>
        </div>
        <Buttons
          text={id ? 'Update' : 'Create'}
          onClick={addedProduct}
          loading={loading}
          title="Product"
          err={err}
        />
      </form>
    </div>
  )
}

export default NewProduct
