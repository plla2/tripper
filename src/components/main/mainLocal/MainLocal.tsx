import { useQuery } from "@tanstack/react-query";
import { getMainLocalItems } from "../../../apis";
import { SyntheticEvent, useEffect, useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import TabPanel from "../tabpannel/TabPanel";
import "./mainlocal.scss";
import { itemType } from "../../../types";

const MainLocal = () => {
  const [areaCode, setAreaCode] = useState(1);
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
    <div className="mainLocal-wrapper">
      <p className="mainLocal-header">취향대로 즐기는 국내여행 지역별 코스</p>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          height: 450,
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={tabValue}
          onChange={handleChange}
          aria-label="Vertical tabs"
          sx={{
            borderRight: 1,
            marginRight: "30px",
            borderColor: "#609966",
            "& .MuiTabs-indicator": { backgroundColor: "#AAC8A7" },
            "& .MuiTab-root.Mui-selected": {
              color: "#AAC8A7",
              fontWeight: "bold",
              fontSize: "16px",
            },
          }}
        >
          <Tab label="서울" {...a11yProps(0)} sx={{ p: 3 }} />
          <Tab label="경기" {...a11yProps(1)} sx={{ p: 3 }} />
          <Tab label="제주" {...a11yProps(2)} sx={{ p: 3 }} />
          <Tab label="부산" {...a11yProps(3)} sx={{ p: 3 }} />
          <Tab label="인천" {...a11yProps(4)} sx={{ p: 3 }} />
          <Tab label="여수" {...a11yProps(5)} sx={{ p: 3 }} />
          <Tab label="거제" {...a11yProps(6)} sx={{ p: 3 }} />
        </Tabs>
        {getMainLocal.isLoading && <div>Loading...</div>}
        {getMainLocal.data &&
          getMainLocal.data.map((item: itemType) => (
            <TabPanel value={tabValue} index={tabValue} key={item.contentid}>
              <div className="mainLocal-container">
                <img className="img" src={item.firstimage} alt="이미지" />
                <span className="text">{item.title}</span>
              </div>
            </TabPanel>
          ))}
        <a href="/location" className="mainLocal-more">
          더보기
        </a>
      </Box>
    </div>
  );
};

export default MainLocal;
