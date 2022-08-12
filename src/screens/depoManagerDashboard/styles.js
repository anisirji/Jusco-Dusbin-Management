export const styles = {
    container:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        background:"white",
        py:"20px",
        position:"relative"
    },
    imgLogo:{
        width:"50%",
        marginBottom:"20px",
    },
    imgLogoMobile:{
        width:"90%",
        marginBottom:"20px",
    },
    head:{
        fontFamily: "'Open Sans', sans-serif",
        fontSize:"28px",
        color:"#2D2D2D",
        '@media (max-width: 650px)': {
            fontSize:"28px",
          },
    },
    dashboardText:{
        fontFamily: "'Open Sans', sans-serif",
        fontSize:"25px",
        color:"#5D5D5D",
        mb:"20px",
        mt:"35px",
        alignSelf:"center",
    },
    tab:{
        width:"25%"
    }
}