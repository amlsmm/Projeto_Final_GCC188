import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { HiOutlinePencilAlt, HiOutlineBriefcase } from "react-icons/hi";
/* templates */
import { Meta } from "@templates/meta";
import { Template } from "@templates/template";
/* utils */
import { paginationComponentOptions } from "@utils/table";
/* components */
import DataTable from "react-data-table-component";
import CadastrarProfessor from "@components/modal/form/professor";
import { EmptyTable } from "@components/empty/table";
import Excluir from "@components/modal/delete";
import moment from "moment";
import { NavbarAdminLinks } from "@utils/data";
import Navbar from "@components/navigation/navbar";
import AddEditProfessor from "@components/modal/form/professor";

const columns = [
  {
    id: "nome",
    name: "Nome",
    selector: (row: any) => row.nome,
    sortable: true,
  },
  {
    id: "nasc",
    name: "Data Nasc.",
    selector: (row: any) => {
      return moment(row.dataCriacao).format("DD-MM-YYYY");
    },
    sortable: true,
  },
  {
    id: "depto",
    name: "Departamento",
    selector: (row: any) => row.departamento,
    sortable: true,
    grow: 2,
  },
  {
    id: "salario",
    name: "Salário",
    selector: (row: any) => row.salario,
    sortable: true,
  },
  {
    id: "acoes",
    sortable: false,
    right: true,
    grow: 0,
    cell: (props: any) => (
      <div className="flex gap-2">
        <Excluir
          title="Excluir Professor"
          description="Tem certeza que deseja excluir esse professor?"
          onClick={() => (deleteProfessor(props.id))}
        />
        {/* <AddEditProfessor editData={props} /> */}
      </div>
    ),
  },
];

const deleteProfessor = async (id: number) => {
  await fetch(`http://localhost:8080/api/professor/excluir/${id}`, {
    method: "DELETE",
  }).then((response) => {
    console.log(response);
    window.location.reload();
  });
};

/*
const data = [
  {
    id: 1,
    nome: "José Maria Silva",
    nasc: "13/11/1960",
    departamento: "Departamento de Ciência da Computação",
    salario: "R$ 18.000,00",
  },
  {
    id: 2,
    nome: "Maria José Costa",
    nasc: "29/01/1961",
    departamento: "Departamento de Ciência da Computação",
    salario: "R$ 20.000,00",
  },
];
*/
const Home: NextPage = () => {
  const [showCadastrar, setShowCadastrar] = useState(false);
  const [professores, setProfessores] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/professor/listar")
      .then((response) => response.json())
      .then((data) => {
        data.map( (professor: any) => {
          professor.departamento = professor.departamento.nome;
        })
        setProfessores(data);
      })
      .catch((err) => {
        console.log(err.message);
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
      <Navbar links={NavbarAdminLinks} />
      <div className="container py-16">
        <div className="flex justify-between items-center">
          <h2 className="text-gray-700">Professores</h2>
          <AddEditProfessor />
        </div>

        <div className="mt-8 overflow-x-auto animate-fade-in-up text-gray-700">
          <DataTable
            columns={columns}
            data={professores}
            pagination
            paginationComponentOptions={paginationComponentOptions}
            highlightOnHover
            pointerOnHover
            noDataComponent={<EmptyTable title="Não há professores cadastrados :(" description="Cadastre um professor no botão Cadastrar!" icon={HiOutlineBriefcase} />}
          />
        </div>
      </div>
    </Template>
  );
};

export default Home;
