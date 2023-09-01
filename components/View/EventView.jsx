import React from "react";
import DataTable from "../Table/DataTable";
import { FaEye, FaEdit, FaTrashAlt, FaPlus, FaSyncAlt } from "react-icons/fa";
import { Form, Input } from "antd";
import { Tag, useColorModeValue } from "@chakra-ui/react";
import EventForm from "../Forms/EventForm";
import useGetQuery from "../Hooks/useGetQuery";

const handleEventCreate = async (values) => {
  console.log(values);
};

const handleEventView = async (values) => {
  console.log(values);
};

const handleEventUpdate = async (values) => {
  console.log(values);
};

const handleEventDelete = async (values) => {
  console.log(values);
};

function EventView() {
  const filterOptions = ["name", "eventDate"];

  const textColor = useColorModeValue("black", "white");

  const { data, isLoading, refetch } = useGetQuery("/api/example/events");


  const actionConfig = [
    {
      title: "Add Event",
      action: "Create",
      icon: <FaPlus color={textColor} />,
      type: "ghost",
      component: EventForm,
      handler: handleEventCreate,
    },
    {
      action: "View",
      icon: <FaEye color={textColor} />,
      type: "ghost",
      component: EventForm,
      // handler: handleEventView,
    },
    {
      action: "Update",
      icon: <FaEdit color={textColor} />,
      type: "ghost",
      component: EventForm,
      handler: handleEventUpdate,
    },
    {
      action: "Delete",
      icon: <FaTrashAlt color={textColor} />,
      type: "ghost",
      component: EventForm,
      handler: handleEventDelete,
    },
  ];

  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
      key: "_id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },

    {
      title: "Event Date",
      dataIndex: "eventDate",
      key: "eventDate",
    },
    {
      title: "Venue",
      dataIndex: "venue",
      key: "venue",
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: (_, { status }) => (
        <>
          {status.map((statu) => {
            let color;
            if (statu === "offline") {
              color = "red";
            } else {
              color = "green";
            }
            return (
              <Tag bg={color} key={statu}>
                {statu.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
  ];

  return (
    <>
      <DataTable data={data} initialColumns={columns} title={"Events"} filters={filterOptions} />
      {/* <DataTable
        isFilter={true}
        filterOptions={filterOptions}
        title={"Events"}
        loading={isLoading}
        data={data}
        columnFields={columns}
        modalConfig={actionConfig}
        refetch={refetch}
      /> */}
    </>
  );
}

export default EventView;
