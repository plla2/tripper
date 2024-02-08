import { useQuery } from "@tanstack/react-query";
import { getMainLocalItems } from "../../apis";
import { SyntheticEvent, useEffect, useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import TabPanel from "../tabpannel/TabPanel";
import "./mainlocal.scss";

interface itemType {
  contentid: string;
  firstimage: string;
  title: string;
}

const MainLocal = () => {
  const [areaCode, setAreaCode] = useState(39);
  const [tabValue, setTabValue] = useState(0);

  const getMainLocal = useQuery({
    queryKey: ["mainLocal", areaCode],
    queryFn: () => getMainLocalItems(areaCode),
  });

  useEffect(() => {
    switch (tabValue) {
      case 0:
        setAreaCode(1);
        break;
      case 1:
        setAreaCode(31);
        break;
      case 2:
        setAreaCode(39);
        break;
      case 3:
        setAreaCode(6);
        break;
      case 4:
        setAreaCode(2);
        break;
      case 5:
        setAreaCode(38);
        break;
      case 6:
        setAreaCode(36);
        break;
    }
  }, [tabValue]);

  function a11yProps(index: number) {
    return {
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`,
    };
  }

  const handleChange = (_e: SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "beige",
        display: "flex",
        height: 300,
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={tabValue}
        onChange={handleChange}
        aria-label="Vertical tabs"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab label="서울" {...a11yProps(0)} />
        <Tab label="경기" {...a11yProps(1)} />
        <Tab label="제주" {...a11yProps(2)} />
        <Tab label="부산" {...a11yProps(3)} />
        <Tab label="인천" {...a11yProps(4)} />
        <Tab label="여수" {...a11yProps(5)} />
        <Tab label="거제" {...a11yProps(6)} />
      </Tabs>
      {getMainLocal.data &&
        getMainLocal.data.map((item: itemType) => (
          <TabPanel value={tabValue} index={tabValue} key={item.contentid}>
            <div className="mainLocal-container">
              <img src={item.firstimage} alt="이미지" />
              <span>{item.title}</span>
            </div>
          </TabPanel>
        ))}
    </Box>
  );
};

export default MainLocal;
