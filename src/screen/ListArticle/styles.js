import { StyleSheet } from "react-native"
import { Colors } from "../../styles"

// import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../constants"

const styles = StyleSheet.create({
  imageFullWidth: {
    width: null,
    height: null,
    flex: 1,
    resizeMode: 'cover',
  },
  imgWrapperIco: {
    height: 50,
    width: 50,
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center".
    // backgroundColor:'red',
    borderRadius: 50,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: Colors.light.orange,
    marginRight: -25
  },
  container: {
    flex: 1,
    backgroundColor: Colors.primary.white,
    height: "100%"
  },
  wrapperHeaderBtn: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingBottom: 7
  },
  buttonBookmark: {
    justifyContent: "center",
    alignItems: "center",
    height: 35,
    width: 35,
    borderRadius: 20,
    alignSelf: "flex-end",
    flexDirection: "row",
    paddingLeft: 1
    // position: "absolute"
  },
  title: {
    flex: 1,
    // fontFamily: Fonts.ProductSans.bold,
    fontSize: 30,
    color: Colors.dark.gray,
    marginVertical: 20
  },
  wrapperCard: {
    width: "100%",
    // height: 200,
    backgroundColor: "red",
    borderRadius: 5,
    backgroundColor: Colors.primary.orange,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 7,
    marginBottom: 20
  },
  cardTitle: {
    // fontFamily: Fonts.ProductSans.bold,
    color: Colors.primary.white,
    fontSize: 25
  },
  cardDescriptio: {
    // fontFamily: Fonts.ProductSans.light,
    color: Colors.primary.white,
    fontSize: 18
  },
  DetailDescription: {
    // fontFamily: Fonts.ProductSans.regular,
    color: Colors.primary.gray,
    fontSize: 18,
    lineHeight: 25,
    marginBottom: 20
  },
  wrapperTime: {
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    width:100,
    height:35,
    backgroundColor: Colors.primary.white,
    marginVertical:10,
    borderRadius: 5
  },
  time: {
    // fontFamily: Fonts.ProductSans.bold,
    color: Colors.primary.orange,
    fontSize: 18
  },
  member: {
    // fontFamily: Fonts.ProductSans.bold,
    color: Colors.primary.white,
    fontSize: 18
  },
  wrapperBottom:{
    display: "flex",
    flexDirection:"row",
    marginTop: 5,
    alignItems: "center"
  },
  borderBottom: {
    height:5,
    width: "100%",
    backgroundColor: Colors.primary.orange,
    borderRadius: 10,
    marginTop: 5
  },
  titleList:{
    // fontFamily: Fonts.ProductSans.bold,
    color: Colors.primary.gray,
    fontSize: 20
  },
  menuListWrapper: {
    marginRight: 30
  }
})

export default styles
