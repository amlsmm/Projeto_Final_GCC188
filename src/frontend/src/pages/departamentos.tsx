import { HiOutlineTrash, HiOutlinePencilAlt } from "react-icons/hi";
import type { NextPage } from "next";
import { Meta } from "../templates/meta";
import { Template } from "../templates/template";
import DataTable from "react-data-table-component";
import { useEffect, useState } from "react";
import CadastrarDepartamento from "@components/modal/cadastrar/departamento";
import moment from "moment";

const paginationComponentOptions = {
  rowsPerPageText: "Departamentos por página",
  rangeSeparatorText: "de",
  selectAllRowsItem: true,
  selectAllRowsItemText: "Todos",
};

const columns = [
  {
    id: "data",
    name: "Data Criação",
    selector: (row: any) => {
      return moment(row.dataCriacao)
      .format("DD-MM-YYYY")
    },
    sortable: true,
  },
  {
    id: "nome",
    name: "Nome",
    selector: (row: any) => row.nome,
    sortable: true,
    width: "50%",
  },
  {
    id: "sigla",
    name: "Sigla",
    selector: (row: any) => row.sigla,
    sortable: true,
  },
  {
    id: "acoes",
    sortable: false,
    right: true,
    grow: 0,
    cell: (props: any) => (
      <div className="flex gap-2">
        <button
          type="button"
          className="text-danger p-1 hover:bg-gray-50 rounded-full transition duration-200"
          onClick={() => deleteDepto(props.id)}
        >
          <HiOutlineTrash size={18} />
        </button>
        <button
          type="button"
          className="text-primary p-1 hover:bg-gray-50 rounded-full transition duration-200"
        >
          <HiOutlinePencilAlt size={18} />
        </button>
      </div>
    ),
  },
];
/*
const data = [
  {
    id: 1,
    data: "22/08/2015",
    nome: "Departamento de Ciência da Computação",
    sigla: "DCC",
  },
  {
    id: 2,
    data: "25/08/2015",
    nome: "Departamento de Ciências Exatas",
    sigla: "DCE",
  },
  {
    id: 3,
    data: "01/05/2017",
    nome: "Departamento de Engenharia",
    sigla: "DEG",
  },
];
*/
const deleteDepto = async (id: number) => {
  await fetch(`http://localhost:8080/api/departamento/excluir/${id}`, {
     method: 'DELETE',
  }).then((response) => {
    console.log(response)
    window.location.reload();
  });
};

const Home: NextPage = () => {
  const [showCadastrar, setShowCadastrar] =
    useState(false);
  const [deptos, setDeptos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/departamento/listar')
      .then((response) => response.json())
      .then((data) => {
        setDeptos(data);
      })
      .catch((err) => {
        console.log(err.message)
      });
  }, []);

  return (
    <Template
      meta={
        <Meta
          title="Sistema Escolar"
          description="Administre suas funcionalidades"
          image="/img/banner/logo.png"
          imageAlt="Sistema Escolar"
        />
      }
    >
      <div className="container py-16">
        <div className="flex justify-between items-center">
          <h2 className="text-gray-700">Departamentos</h2>
          <CadastrarDepartamento
            show={showCadastrar}
            setShow={setShowCadastrar}
          />
        </div>

        <div className="mt-8 overflow-x-auto animate-fade-in-up text-gray-700">
          <DataTable
            columns={columns}
            data={deptos}
            pagination
            paginationComponentOptions={paginationComponentOptions}
            highlightOnHover
            pointerOnHover
          />
        </div>
      </div>
    </Template>
  );
};

export default Home;
