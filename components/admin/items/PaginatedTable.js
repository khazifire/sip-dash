import { Table, Row, Col, Tooltip, User, Text, Container } from "@nextui-org/react";
import { useState } from 'react'
import { StyledBadge } from "@/components/admin/icons/StyledBadge";
import { IconButton } from "@/components/admin/icons/IconButton";
import { EyeIcon } from "@/components/admin/icons/EyeIcon";
import { EditIcon } from "@/components/admin/icons/EditIcon";
import { DeleteIcon } from "@/components/admin/icons/DeleteIcon";
import PopupModal from "./PopupModal";

const PaginatedTable = () => {

  const [visible, setVisible] = useState(false);

  const detailHandler = () => {
    setVisible(true);
  }
  const updateHandler = () => {
    setVisible(true);
  }

  const closeHandler = () => {
    setVisible(false);
   
    // console.log("closed");
  };
    const columns = [
        { name: "NAME", uid: "name" },
        { name: "ROLE", uid: "role" },
        { name: "STATUS", uid: "status" },
        { name: "ACTIONS", uid: "actions" },
      ];
      const users = [
        {
          id: 1,
          name: "Tony Reichert",
          role: "CEO",
          team: "Management",
          status: "active",
          age: "29",
          avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
          email: "tony.reichert@example.com",
        },
        {
          id: 2,
          name: "Zoey Lang",
          role: "Technical Lead",
          team: "Development",
          status: "paused",
          age: "25",
          avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
          email: "zoey.lang@example.com",
        },
        {
          id: 3,
          name: "Jane Fisher",
          role: "Senior Developer",
          team: "Development",
          status: "active",
          age: "22",
          avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
          email: "jane.fisher@example.com",
        },
        {
          id: 4,
          name: "William Howard",
          role: "Community Manager",
          team: "Marketing",
          status: "vacation",
          age: "28",
          avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
          email: "william.howard@example.com",
        },
        {
          id: 5,
          name: "Kristen Copper",
          role: "Sales Manager",
          team: "Sales",
          status: "active",
          age: "24",
          avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
          email: "kristen.cooper@example.com",
        },
        {
          id: 6,
          name: "William Howard",
          role: "Community Manager",
          team: "Marketing",
          status: "vacation",
          age: "28",
          avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
          email: "william.howard@example.com",
        },
        {
          id: 7,
          name: "Kristen Copper",
          role: "Sales Manager",
          team: "Sales",
          status: "active",
          age: "24",
          avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
          email: "kristen.cooper@example.com",
        },
  
      ];
      const renderCell = (user, columnKey) => {
        const cellValue = user[columnKey];
        switch (columnKey) {
          case "name":
            return (
              <User squared src={user.avatar} name={cellValue} className="text-sm capitalize text-gray-700">
                {user.email}
              </User>
            );
          case "role":
            return (
              <Col>
                <Row>
                  <Text b size={14} className="text-sm capitalize text-gray-700">
                    {cellValue}
                  </Text>
                </Row>
                <Row>
                  <Text b size={13}  className="text-sm text-gray-500 font-normal">
                    {user.team}
                  </Text>
                </Row>
              </Col>
            );
          case "status":
            return <StyledBadge type={user.status}>{cellValue}</StyledBadge>;
    
          case "actions":
            return (
              <Row justify="center" align="center">
                <Col css={{ d: "flex" }}>
                  <Tooltip content="Details">
                    <IconButton value={"hello"} onClick={detailHandler}>
                      <EyeIcon size={20} fill="#979797" />
                    </IconButton>
                  </Tooltip>
                </Col>
                <Col css={{ d: "flex" }}>
                  <Tooltip content="Edit user">
                    <IconButton onClick={updateHandler}>
                      <EditIcon size={20} fill="#979797" />
                    </IconButton>
                  </Tooltip>
                </Col>
              </Row>
            );
          default:
            return cellValue;
        }
      };
    return ( 
      <>
          <PopupModal visible={visible} closeHandler={closeHandler} />
          
            <Table 
            headerLined
            shadow={false}
            aria-label={"recently added users"}
            sticked={true}
            css={{
              height: "auto",
              minWidth: "auto",
            
            }}
            containerCss={{
              borderRadius: "8px",
              padding:"8px",
            }}
            selectionMode="none"
          >
        
            <Table.Header columns={columns}>
              {(column) => (
                <Table.Column
                  key={column.uid}
                  hideHeader={column.uid === "actions"}
                  align={column.uid === "actions" ? "center" : "start"}
                >
                  {column.name}
                </Table.Column>
              )}
            </Table.Header>
            <Table.Body items={users}>
              {(item) => (
                <Table.Row>
                  {(columnKey) => (
                    <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
                  )}
                </Table.Row>
              )}
            </Table.Body>
      
            <Table.Pagination
              noMargin
              align="center"
              rowsPerPage={7}
              total={10}
              onPageChange={(page) => console.log({ page })}
            />
            </Table>
         
      </>
     );
}
 
export default PaginatedTable;