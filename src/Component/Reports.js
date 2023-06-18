import React from "react";
// import { useNavigate,useLocation } from "react-router-dom";
import "../css/Reports.css"
// import photoImage from "../component/image/origianl.jpg";

import { Document, Page,Image,View,StyleSheet,PDFViewer,
  } from "@react-pdf/renderer";

  const pdf = StyleSheet.create({
    page: {
      // backgroundColor: "#FF8A33",
      color: "white",
    },
    section: {
      margin: 10,
      padding: 10,
    },
    viewer: {
      width: window.innerWidth, //the pdf viewer will take up all of the width and height
      height: window.innerHeight,
    },
  });

const Reports = () =>{
   
    return(
        <>
        <div className="container-fluid">
    <div className="section" section id="sectionh">
        <img src="image/photo.jpg" id="photo" alt=""></img>
        
        <h1>Your reports are here</h1>
        <div className="reports">
{/* <img src="image/original.jpg" alt=""/> */}
        </div>
        
        <PDFViewer style={pdf.viewer} id="PDFViewer">
      {/* Start of the document*/}
      <Document>
        {/*render a single page*/}
        <Page size="A4" style={pdf.page}>
          <View style={pdf.section}>
          <Image src="image/original.jpg" />
          </View>
          <View style={pdf.section}>
            
          </View>
        </Page>
      </Document>
    </PDFViewer>
        </div>
    </div>
        </>
    )
}
export default Reports